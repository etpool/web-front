var $ = require('jquery');
let endTime;//数据最后一条时间
let amount=0;
var _formatDate=function(inputTime){ //时间戳格式化
	var date = new Date(parseInt(inputTime));
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	m = m < 10 ? ('0' + m) : m;
	var d = date.getDate();
	d = d < 10 ? ('0' + d) : d;
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute;
	second = second < 10 ? ('0' + second) : second;
	return y + '-' + m + '-' + d +' ' + h + ':' + minute + ':' + second;
}
var WebsockFeed = function(url,coin,stompClient,scale){
    this._datafeedURL = url;
    this.coin = coin;
    this.stompClient = stompClient;
    this.lastBar = null;
    this.currentBar = null;
    this.subscribe = true;
    this.scale = scale;
};

WebsockFeed.prototype.onReady=function(callback){
    var config = {};
    config.exchanges = [];
    config.supported_resolutions = ["1","5","15","30","60","240","1D","1W","1M"];
    config.supports_group_request = false;
    config.supports_marks = false;
    config.supports_search = false;
    config.supports_time = true;
    config.supports_timescale_marks = false;

    $("#"+window.tvWidget.id).contents().on("click",".date-range-list>a",function(){
      if (window.tvWidget) {
        if ($(this).html() == "分时") {
          $(this).parent().addClass("real-op").removeClass("common-op");
          window.tvWidget.chart().setChartType(3);
        }else {
          $(this).parent().addClass("common-op").removeClass("real-op");
          window.tvWidget.chart().setChartType(1);
        }
      }
    });

    setTimeout(function() {
        callback(config);
    }, 0);
};

WebsockFeed.prototype.subscribeBars = function(symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback) {
    var that = this;
	
    this.stompClient.subscribe('/topic/market/trade/'+symbolInfo.name, function(msg) {
        var resp = JSON.parse(msg.body);
        if(that.lastBar != null && resp.length > 0){
            var price = resp[resp.length - 1].price;
            that.lastBar.close = price;
			let time = resp[resp.length - 1].time;
			// console.log(_formatDate(time),resp[resp.length - 1].amount)
			amount +=resp[resp.length - 1].amount;
			// console.log(amount);
			if(
				( resolution=="1" && (time - endTime >= 60000) ) || //1分钟
				( resolution=="5" && (time - endTime >= 300000) ) || //5分钟
				( resolution=="15" && (time - endTime >= 900000) ) || //15分钟
				( resolution=="30" && (time - endTime >= 1800000) ) || //30分钟
				( resolution=="60" && (time - endTime >= 3600000) ) //60分钟
			){
				that.lastBar.time = time;
				endTime = time;
				amount = 0;
			}
			that.lastBar.volume = amount;
			
            // console.log(JSON.stringify(resp))
            // console.log(resp)
            if(price > that.lastBar.high){
                that.lastBar.high = price;
            }
            if(price < that.lastBar.low){
                that.lastBar.low = price;
            }
			// console.log(that.lastBar)
			// console.log(JSON.stringify(that.lastBar))
            onRealtimeCallback(that.lastBar);
        }
    });
    this.stompClient.subscribe("/topic/market/thumb", function(msg) {
          var resp = JSON.parse(msg.body);
          if(resp.symbol == symbolInfo.name) {
            if(that.lastBar != null && resp.length > 0){
                var price = resp.price;
                that.lastBar.close = price;
                if(price > that.lastBar.high){
                    that.lastBar.high = price;
                }
                if(price < that.lastBar.low){
                    that.lastBar.low = price;
                }
                onRealtimeCallback(that.lastBar);
            }
          }
        });
    this.stompClient.subscribe('/topic/market/kline/'+symbolInfo.name, function(msg) {
        if (that.currentBar != null) onRealtimeCallback(that.currentBar);

        var resp = JSON.parse(msg.body);
        if(resolution == "1" && resp.period != "1min") return;
        if(resolution == "5" && resp.period != "5min") return;
        if(resolution == "15" && resp.period != "15min") return;
        if(resolution == "30" && resp.period != "30min") return;
        if(resolution == "60" && resp.period != "60min") return;
        if(resolution == "240" && resp.period != "4hour") return;
        if(resolution == "1D" && resp.period != "1day") return;
        if(resolution == "1W" && resp.period != "1week") return;
        if(resolution == "1M" && resp.period != "1mon") return;
        
        var newTime = resp.time*1000;
        if(newTime - that.currentBar.time > 0 && newTime - that.currentBar.time < 86400000){
            that.lastBar = {time:resp.time*1000, open:resp.openPrice, high:resp.highestPrice, low:resp.lowestPrice, close:resp.closePrice, volume:resp.volume};
            that.currentBar = that.lastBar;
            onRealtimeCallback(that.lastBar);
        }
    });
};

WebsockFeed.prototype.unsubscribeBars = function(subscriberUID){
    this.subscribe = false;
}

WebsockFeed.prototype.resolveSymbol = function(symbolName, onSymbolResolvedCallback, onResolveErrorCallback){
    // var data = {"name":this.coin.symbol,"exchange-traded":"","exchange-listed":"","minmov":1,"minmov2":0,"pointvalue":1,"has_intraday":true,"has_no_volume":false,"description":this.coin.symbol,"type":"bitcoin","session":"24x7","supported_resolutions":["1","5","15","30","60","240","1D","1W","1M"],"pricescale":500,"ticker":"","timezone":"Asia/Shanghai"};
  // var data = {"name":this.coin.symbol,"exchange-traded":"","exchange-listed":"","minmov":1,"volumescale":10000,"has_daily":true,"has_weekly_and_monthly":true,"has_intraday":true,"description":this.coin.symbol,"type":"bitcoin","session":"24x7","supported_resolutions":["1","5","15","30","60","240","1D","1W","1M"],"pricescale":100,"ticker":"","timezone":"Asia/Shanghai"};
  var data = {"name":this.coin.symbol,"exchange-traded":"","exchange-listed":"","minmov":1,"volumescale":10000,"has_daily":true,"has_weekly_and_monthly":true,"has_intraday":true,"description":this.coin.symbol,"type":"bitcoin","session":"24x7","supported_resolutions":["1","5","15","30","60","1D","1W","1M"],"pricescale":Math.pow(10,this.scale || 2),"ticker":"","timezone":"Asia/Shanghai"};
    setTimeout(function() {
        onSymbolResolvedCallback(data);
    }, 0);
};

WebsockFeed.prototype._send = function(url, params) {
    var request = url;
    if (params) {
        for (var i = 0; i < Object.keys(params).length; ++i) {
            var key = Object.keys(params)[i];
            var value = encodeURIComponent(params[key]);
            request += (i === 0 ? '?' : '&') + key + '=' + value;
        }
    }

    return $.ajax({
        type: 'GET',
        url: request,
        dataType: 'json'
    });
};

WebsockFeed.prototype.getBars = function(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest){
    var bars = [];
    var that = this;
    this._send(this._datafeedURL+'/history',{
        symbol: symbolInfo.name,
        from: from*1000,
        to: firstDataRequest ? new Date().getTime():to*1000,
        resolution: resolution
    })
    .done(function(response) {
		// console.log(JSON.stringify(response))
        var data = response;
        if (data.length === 0) {
            return false
        }
        for(var i = 0;i<data.length;i++){
            var item = data[i];
            if (i !== 0) {
                var preItem = data[i - 1];
                item[1] = preItem[4]
            }
            bars.push({time:item[0],open:item[1],high:item[2],low:item[3],close:item[4],volume:item[5]})
        }
		endTime=data[data.length-1][0];
        that.lastBar = bars.length > 0 ? bars[bars.length-1] : that.lastBar;
        that.currentBar = that.lastBar;
        var noData = bars.length == 0;
        var retBars = onHistoryCallback(bars,{noData:noData});
    })
    .fail(function(reason) {
        onErrorCallback(reason);
    });
};
WebsockFeed.prototype.periodLengthSeconds = function(resolution, requiredPeriodsCount) {
    var daysCount = 0;
    if (resolution === 'D') {
        daysCount = requiredPeriodsCount;
    } else if (resolution === 'M') {
        daysCount = 31 * requiredPeriodsCount;
    } else if (resolution === 'W') {
        daysCount = 7 * requiredPeriodsCount;
    }
    else if(resolution === 'H'){
        daysCount = requiredPeriodsCount * resolution / 24;
    }
    else {
        daysCount = requiredPeriodsCount * resolution / (24 * 60);
    }

    return daysCount * 24 * 60 * 60;
};

export default {WebsockFeed}
