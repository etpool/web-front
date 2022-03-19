<template>
  <div>
    <div id="fullpage">
      <!--通知公告-->
      <!--<div id="pagetips" style="border-bottom:1px solid rgb(28, 39, 58);">-->
        <!--<div class="topnav">-->
          <!--<div class="carl">-->
            <!--<div class="notice-list">-->
              <!--<div class="notice-item" v-for="(item,index) in FAQList">-->
                <!--<div class="cal_content">-->
                  <!--<span></span>-->
                  <!--<router-link target="_blank" :to="{path: '/announcement/' + item.id}">[ {{item.createTime}} ] {{strde(item.title)}}</router-link>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="more">-->
              <!--<router-link to="/announcement/0" target="_blank">{{$t('common.more')}}</router-link>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->

      <!--Banner轮播图-->
      <div class="section" id="page1">
        <!-- <div v-if="lang==='简体中文'"> -->
        <div class="spin-wrap banner-panel">
          <!--<img style="height: 100%;" src="../../assets/images/bannerbg.png"></img>-->
          <!--<p style="text-align:center;font-size:40px;color:#fff;position:absolute;top: 70px;width:100%;letter-spacing:5px;text-shadow: 0px 0px 10px #000000;">{{$t("common.slogan")}}</p>-->
          <!--<p style="text-align:center;font-size:20px;color:#828ea1;position:absolute;top: 130px;width:100%;letter-spacing:2px;">{{$t("common.subslogan")}}</p>-->
          <div class="activity-list" v-show="picShow">
            <div class="swiper-container" id="swiper_container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in picList">
                  <a v-if="item.linkUrl&&item.linkUrl!=' '&&item.linkUrl!='1'" :href="item.linkUrl" target="_blank">
                    <div class="activity-item">
                      <img :src="item.url"/>
                    </div>
                  </a>
                  <div v-else class="activity-item">
                    <img :src="item.url"/>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      <!--热门前五交易行情-->
      <div class="hot">
        <div class="container line">
          <div class="left">
            <div>BTCUSDT永续</div>
            <div>43,510.2</div>
            <div>≈￥276794.4833</div>
          </div>
          <div class="right">
            <div class="up">43,510.2</div>
            <div>≈￥276794.4833</div>
          </div>
        </div>
        <div class="container line">
          <div class="left">
            <div>BTCUSDT永续</div>
            <div>43,510.2</div>
            <div>≈￥276794.4833</div>
          </div>
          <div class="right">
            <div class="up">43,510.2</div>
            <div>≈￥276794.4833</div>
          </div>
        </div>
        <div class="container line">
          <div class="left">
            <div>BTCUSDT永续</div>
            <div>43,510.2</div>
            <div>≈￥276794.4833</div>
          </div>
          <div class="right">
            <div class="up">43,510.2</div>
            <div>≈￥276794.4833</div>
          </div>
        </div>
        <div class="container line">
          <div class="left">
            <div>BTCUSDT永续</div>
            <div>43,510.2</div>
            <div>≈￥276794.4833</div>
          </div>
          <div class="right">
            <div class="down">43,510.2</div>
            <div>≈￥276794.4833</div>
          </div>
        </div>
        <div class="container line">
          <div class="left">
            <div>BTCUSDT永续</div>
            <div>43,510.2</div>
            <div>≈￥276794.4833</div>
          </div>
          <div class="right">
            <div class="down">43,510.2</div>
            <div>≈￥276794.4833</div>
          </div>
        </div>
      </div>

      <div style="width: 100%;background: #141e2c;display:none;">
        <router-link to="/announcement/118930" target="_blank" style="width: 100%;">
          <img src="https://bihuo.oss-ap-southeast-1.aliyuncs.com/bannerimg.png" style="width: 72%;margin-left: 14%;margin-top: 20px;">
        </router-link>
      </div>
      <div class="section" id="page2">
        <!--<div class="page2nav">-->
          <!--<div class="board-title" style="display:inline-block;display: none;">{{$t('sectionPage.mainboard')}}  &nbsp; >>></div>-->
          <!--<ul class="brclearfix">-->
            <!--<li v-show="!(index==0&&!isLogin)" v-for="(item,index) in indexBtn" @click="addClass(index)" :class="{'active':index==choseBtn,'ivu-btn-default':index!=choseBtn}" :key="index">{{item.text}}</li>-->
            <!--<li style="float:right;padding-right: 6px;"><Input search :placeholder="$t('common.searchplaceholder')" @on-change="seachInputChange" v-model="searchKey"/></li>-->
          <!--</ul>-->
        <!--</div>-->
        <div class="ptjy">
          <Table v-if="choseBtn==0" :columns="favorColumns" :data="dataIndex" class="" :disabled-hover="true" :loading="loading"  :no-data-text="$t('common.nodata')"></Table>
          <Table v-if="choseBtn!=0" :columns="coins.columns" :data="dataIndex" class="" :disabled-hover="true" :loading="loading"  :no-data-text="$t('common.nodata')"></Table>
<!--
          <p v-if="choseBtn!=0" style="height:50px;line-height:50px;padding-left:10px;border-bottom:1px solid #26303d;font-size:14px;color:rgb(97, 119, 146);">创新版</p>
          <Table  v-if="choseBtn!=0" :columns="coins.columns" :data="dataIndex2" class="tables" :disabled-hover="true" :loading="loading"  :no-data-text="$t('common.nodata')"></Table>
-->
        </div>
      </div>

      <div id="page3">
        <div class="container">
          <span>{{$t('home.text1')}}</span>
          <span>{{$t('home.text2')}}</span>
          <ul>
            <li>
              <div><img src="../../assets/icon1/home_1.png"/></div>
              <span>{{$t('home.text3')}}</span>
              <span>{{$t('home.text4')}}</span>
              <span>{{$t('home.text5')}}</span>
              <span>{{$t('home.text6')}}</span>
            </li>
            <li>
              <div><img src="../../assets/icon1/home_2.png"/></div>
              <span>{{$t('home.text7')}}</span>
              <span>{{$t('home.text8')}}</span>
              <span>{{$t('home.text9')}}</span>
            </li>
            <li>
              <div><img src="../../assets/icon1/home_3.png"/></div>
              <span>{{$t('home.text10')}}</span>
              <span>{{$t('home.text11')}}</span>
              <span>{{$t('home.text12')}}</span>
              <span>{{$t('home.text13')}}</span>
            </li>
          </ul>
          <span>{{$t('home.text14')}}</span>
          <span>{{$t('home.text15')}}</span>
          <span>{{$t('home.text16')}}</span>
          <span>{{$t('home.text17')}}</span>
          <ul>
            <li>
              <div><img src="../../assets/icon1/home_4.png"/></div>
              <span>{{$t('home.text18')}}</span>
              <span>{{$t('home.text19')}}</span>
            </li>
            <li>
              <div><img src="../../assets/icon1/home_5.png"/></div>
              <span>{{$t('home.text20')}}</span>
              <span>{{$t('home.text21')}}</span>
            </li>
            <li>
              <div><img src="../../assets/icon1/home_6.png"/></div>
              <span>{{$t('home.text22')}}</span>
              <span>{{$t('home.text23')}}</span>
            </li>
            <li>
              <div><img src="../../assets/icon1/home_7.png"/></div>
              <span>{{$t('home.text24')}}</span>
              <span>{{$t('home.text25')}}</span>
            </li>
            <li>
              <div><img src="../../assets/icon1/home_8.png"/></div>
              <span>{{$t('home.text26')}}</span>
              <span>{{$t('home.text27')}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
var Stomp = require("stompjs");
var SockJS = require("sockjs-client");
var moment = require("moment");
import SvgLine from "@components/exchange/SvgLine.vue";
import SvgIndex from "@components/exchange/SvgIndex.vue";

import Swiper from 'swiper';
import VueQr from 'vue-qr'

export default {
  components: { SvgLine, SvgIndex, VueQr },
  data() {
    let self = this;
    return {
      lineValues :[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      trendData: {
        highest: 0,
        lowest: 0,
        close: 0,
        volume: 0
      },
      loading: false,
      percent: 0,
      pageNo: 1,
      pageSize: 6,
      totalNum: 0,
      FAQList: [],
      yesDayCashDividensBonusETH: 0,
      CNYRate: null,
      dataIndex: [],
      pageNo: 1,
      totalNum: 0,
      searchKey: "",
      favorColumns: [
        // {
        //   title: self.$t("service.favor"),
        //   align: "center",
        //   key: "collection",
        //   width: 60,
        //   render: (h, params) => {
        //     let flag = this.isLogin;
        //     return h("Icon", {
        //       props: {
        //         color: "#f0a70a",
        //         size: "18",
        //         type: params.row.isFavor
        //           ? "ios-star"
        //           : "ios-star-outline"
        //       },
        //       nativeOn: {
        //         click: () => {
        //           if (this.isLogin) {
        //             event.stopPropagation(); //阻止事件冒泡
        //             if (
        //               event.currentTarget.className ==
        //               "ivu-icon ivu-icon-ios-star"
        //             ) {
        //               // 解除收藏
        //               this.cancelCollect(params.index, params.row);
        //               event.currentTarget.className ==
        //                 "ivu-icon ivu-icon-ios-star-outline";
        //             } else {
        //               // 收藏
        //               this.collect(params.index, params.row);
        //               event.currentTarget.className =
        //                 "ivu-icon ivu-icon-ios-star";
        //             }
        //           } else {
        //             this.$Message.warning("请先登录");
        //           }
        //         }
        //       }
        //     });
        //   }
        // },
        {
          title: self.$t("service.COIN"),
          align: "center",
          width: 70,
          key: "symbol"
        },
        {
          title: self.$t("service.NewPrice"),
          align: "center",
          key: "price",
          minWidth:180,
          sortable: true,
          sortMethod: function(a, b, type) {
            let a1 = parseFloat(a);
            let b1 = parseFloat(b);
            if (type == "asc") {
              return a1 - b1;
            } else {
              return b1 - a1;
            }
          },
          render: function(h, params) {
            // var rmb = self.round(self.mul(params.row.price, 6.5), 2);
            // if (self.CNYRate != null)
            //   rmb = self.round(self.mul(params.row.price, self.CNYRate), 2);
            let CNYRate = self.CNYRate || 6.5,
              rmb = self.round(self.mul(params.row.usdRate, CNYRate), 2);
            const isgreen = parseFloat(params.row.rose) < 0 ? "none" : "inline-block";
            const nogreen = parseFloat(params.row.rose) < 0 ? "inline-block" : "none";
            const className = parseFloat(params.row.rose) < 0 ? "red" : "green";
            return h("div", {
                  attrs: {
                    class: "price-td"
                  }
            },[
              h("span", {
                attrs: {
                  class: className
                }
              }, params.row.price),
              h("span", {
                  attrs: {
                    class: "price-rmb"
                  }
                }, "  ≈ ￥" + rmb),
              h(
                "Icon",
                {
                  props: {
                    type: "arrow-up-c"
                  },
                  style: {
                    display: isgreen,
                    fontSize: "16px",
                    marginLeft: "5px",
                    verticalAlign: "middle"
                  },
                  class: {
                    green: true
                  }
                },
                "↑"
              ),
              h(
                "Icon",
                {
                  props: {
                    type: "arrow-down-c"
                  },
                  style: {
                    display: nogreen,
                    fontSize: "16px",
                    marginLeft: "5px",
                    verticalAlign: "middle"
                  },
                  class: {
                    red: true
                  }
                },
                "↓"
              )
            ]);
          }
        },
        {
          title: self.$t("service.Change"),
          align: "center",
          key: "rose",
          minWidth:50,
          sortable: true,
          sortMethod: function(a, b, type) {
            let a1 = a.replace(/[^\d|.|-]/g, "") - 0;
            let b1 = b.replace(/[^\d|.|-]/g, "") - 0;
            if (type == "asc") {
              return a1 - b1;
            } else {
              return b1 - a1;
            }
          },
          render: (h, params) => {
            const row = params.row;
            const className = parseFloat(row.rose) < 0 ? "red" : "green";
            return h(
              "span",
              {
                attrs: {
                  class: className
                }
              },
              row.rose
            );
          }
        },
        // {
        //   title: self.$t("service.high"),
        //   align: "center",
        //   key: "high",
        //   render: (h, params) => {
        //     return h("div", {}, params.row.high);
        //   }
        // },
        // {
        //   title: self.$t("service.low"),
        //   align: "center",
        //   key: "high",
        //   render: (h, params) => {
        //     return h("div", {}, params.row.low);
        //   }
        // },
        {
          title: self.$t("service.ExchangeNum"),
          align: "center",
          key: "volume",
          // width: 110,
          sortable: true,
          sortMethod: function(a, b, type) {
            let a1 = parseFloat(a);
            let b1 = parseFloat(b);
            if (type == "asc") {
              return a1 - b1;
            } else {
              return b1 - a1;
            }
          }
        },
        // {
        //   title: self.$t("service.OpenPrice"),
        //   align: "center",
        //   key: "open",
        //   width: 150,
        //   sortable: true,
        //   sortMethod: function(a, b, type) {
        //     let a1 = parseFloat(a);
        //     let b1 = parseFloat(b);
        //     if (type == "asc") {
        //       return a1 - b1;
        //     } else {
        //       return b1 - a1;
        //     }
        //   }
        // },

        {
          title: self.$t("service.PriceTrend"),
          align: "center",
          render: function(h, params) {
            let valus = null;
            let len = params.row.trend.length;
            valus =
              len > 0
                ? params.row.trend
                : [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                  ];
            return h(SvgLine, {
              props: {
                values: valus,
                rose: params.row.rose,
                width: 100,
                height: 25
              }
            });
          }
        },
        {
            title: self.$t("service.Operate"),
            align: "center",
            key: "buyBtn",
            width: 100,
            render: function(h, params) {
              return h("div", [
                h("span", {
                  style: {
                    cursor: "pointer",
                    color: "#4364EE",
                    display: "inline-block",
                    padding: "2px 8px"
                  },
                  on: {
                    click: function() {
                      self.$router.push({
                        name: 'ExchangePair',
                        params: {
                          pair: params.row.href
                        }
                      });
                    }
                  }
                }, self.$t("service.Exchange"))
              ]);
            }
          }
      ],
      //当前市场上的交易币种，按交易对分
      coins: {
        _map: [],
        USDT: [],
        USDT2: [],
        BTC: [],
        BTC2: [],
        ETH: [],
        ETH2: [],
        favor: [],
        columns: [
          // {
          //   title: self.$t("service.favor"),
          //   align: "center",
          //   key: "collection",
          //   width: 60,
          //   // renderHeader: (h, params) => {
          //   // return h("Icon", {
          //   //   props: {
          //   //     color: "#f0a70a",
          //   //     size: "18",
          //   //     type: "android-star-outline"
          //   //   }
          //   // });
          //   // },
          //   render: (h, params) => {
          //     let flag = this.isLogin;
          //     return h("Icon", {
          //       props: {
          //         color: "#f0a70a",
          //         size: "18",
          //         type: params.row.isFavor
          //           ? "ios-star"
          //           : "ios-star-outline"
          //       },
          //       nativeOn: {
          //         click: (event) => {
          //           if (this.isLogin) {
          //             event.stopPropagation(); //阻止事件冒泡
          //             if (
          //               event.currentTarget.className ==
          //               "ivu-icon ivu-icon-ios-star"
          //             ) {
          //               // 解除收藏
          //               this.cancelCollect(params.index, params.row);
          //               event.currentTarget.className ==
          //                 "ivu-icon ivu-icon-ios-star-outline";
          //             } else {
          //               // 收藏
          //               this.collect(params.index, params.row);
          //               event.currentTarget.className =
          //                 "ivu-icon ivu-icon-ios-star";
          //             }
          //           } else {
          //             this.$Message.warning("请先登录");
          //           }
          //         }
          //       }
          //     });
          //   }
          // },
          {
            title: self.$t("service.COIN"),
            align: "center",
            key: "coin",
            width: 90,
            render: function(h, params) {
              return h("div", [
                h("span", {}, params.row.coin+"/"+params.row.base)
              ]);
            }
          },
          {
            title: self.$t("service.NewPrice"),
            align: "center",
            key: "price",
            minWidth: 150,
            sortable: true,
            sortMethod: function(a, b, type) {
              let a1 = parseFloat(a);
              let b1 = parseFloat(b);
              if (type == "asc") {
                return a1 - b1;
              } else {
                return b1 - a1;
              }
            },
            render: function(h, params) {
              // var rmb = self.round(self.mul(params.row.price, 6.5), 2);
              // if (self.CNYRate != null)
              //   rmb = self.round(self.mul(params.row.price, self.CNYRate), 2);
              let CNYRate = self.CNYRate || 6.5,
                rmb = self.round(self.mul(params.row.usdRate, self.CNYRate), 2);
              const isgreen =
                parseFloat(params.row.rose) < 0 ? "none" : "inline-block";
              const nogreen =
                parseFloat(params.row.rose) < 0 ? "inline-block" : "none";
              return h("div", {
                attrs: {
                    class: "price-td"
                  }
              }, [
                h("span", {}, params.row.price + ""),
                h("span", {
                  attrs: {
                    class: "price-rmb"
                  }
                }, "  ≈ $" + rmb),
                h(
                  "Icon",
                  {
                    props: {
                      type: "arrow-up-c"
                    },
                    style: {
                      display: isgreen,
                      fontSize: "16px",
                      marginLeft: "5px",
                      verticalAlign: "middle"
                    },
                    class: {
                      green: true
                    }
                  },
                  "↑"
                ),
                h(
                  "Icon",
                  {
                    props: {
                      type: "arrow-down-c"
                    },
                    style: {
                      display: nogreen,
                      fontSize: "16px",
                      marginLeft: "5px",
                      verticalAlign: "middle"
                    },
                    class: {
                      red: true
                    }
                  },
                  "↓"
                )
              ]);
            }
          },
          {
            title: self.$t("service.Change"),
            align: "center",
            key: "rose",
            minWidth: 50,
            sortable: true,
            sortMethod: function(a, b, type) {
              let a1 = a.replace(/[^\d|.|-]/g, "") - 0;
              let b1 = b.replace(/[^\d|.|-]/g, "") - 0;
              if (type == "asc") {
                return a1 - b1;
              } else {
                return b1 - a1;
              }
            },
            render: (h, params) => {
              const row = params.row;
              const className = parseFloat(row.rose) < 0 ? "red" : "green";
              return h(
                "span",
                {
                  attrs: {
                    class: className
                  }
                },
                row.rose
              );
            }
          },
          // {
          //   title: self.$t("service.high"),
          //   align: "center",
          //   key: "high",
          //   render: (h, params) => {
          //     return h("div", {}, params.row.high);
          //   }
          // },
          // {
          //   title: self.$t("service.low"),
          //   align: "center",
          //   key: "high",
          //   render: (h, params) => {
          //     return h("div", {}, params.row.low);
          //   }
          // },
          {
            title: self.$t("service.ExchangeNum"),
            align: "center",
            key: "volume",
            // minWidth: 110,
            sortable: true,
            sortMethod: function(a, b, type) {
              let a1 = parseFloat(a);
              let b1 = parseFloat(b);
              if (type == "asc") {
                return a1 - b1;
              } else {
                return b1 - a1;
              }
            }
          },
          {
            title: self.$t("service.PriceTrend"),
            align: "center",
            render: function(h, params) {
              let valus = null;
              let len = params.row.trend.length;
              valus =
                len > 0
                  ? params.row.trend
                  : [
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0,
                      0
                    ];
              return h(SvgLine, {
                props: {
                  values: valus,
                  rose: params.row.rose,
                  width: 100,
                  height: 25
                }
              });
            }
          },
          {
            title: self.$t("service.Operate"),
            align: "center",
            key: "buyBtn",
            width: 100,
            render: function(h, params) {
              return h("div", [
                h("span", {
                  style: {
                    cursor: "pointer",
                    color: "#4364EE",
                    display: "inline-block",
                    padding: "2px 8px"
                  },
                  on: {
                    click: function() {
                      self.$router.push({
                        name: 'ExchangePair',
                        params: {
                          pair: params.row.href
                        }
                      });
                    }
                  }
                }, self.$t("service.Exchange"))
              ]);
            }
          }
        ]
      },
      indexBtn: [
        {
          text: this.$t("service.CUSTOM")
        },
        {
          text: this.$t("service.USDT")
        },
        {
          text: this.$t("service.BTC")
        },
        {
          text: this.$t("service.ETH")
        }
      ],
      choseBtn: 0,
      valueCal: 0,
      showArrow: "never",
      speed: 5000,
      symbol: "",
      usdtData: [],
      usdtList: [],
      btcList: [],
      ethList: [],
      picList: [],
      picShow: false,
      iosDownloadUrl: "",
      androidDownloadUrl: "",
    };
  },
  created: function() {
    this.init();
  },
  computed: {
    isLogin: function() {
      return this.$store.getters.isLogin;
    },
    lang: function() {
      return this.$store.state.lang;
    },
    langPram: function(){
      if(this.$store.state.lang == "简体中文"){
        return "CN";
      }
      if(this.$store.state.lang == "English"){
        return "EN";
      }
      return "CN";
    }
  },
  watch: {
    lang: function() {
      this.updateLangData();
    }
  },
  filters:{
    fixed2: function(value){
      return value.toFixed(2);
    }
  },
  mounted: function() {
    this.getCNYRate();
    this.getSymbol();
    //this.initSwiper();
  },
  methods: {
    seachInputChange(){
      this.searchKey = this.searchKey.toUpperCase();
      if(this.choseBtn == 0){
          this.dataIndex = this.coins.favor.filter(item => item["symbol"].indexOf(this.searchKey) == 0);
      }else if(this.choseBtn == 1){
          this.dataIndex = this.coins.USDT.filter(item => item["symbol"].indexOf(this.searchKey) == 0);
      }else if(this.choseBtn == 2){
          this.dataIndex = this.coins.BTC.filter(item => item["symbol"].indexOf(this.searchKey) == 0);
      }else if(this.choseBtn == 3){
          this.dataIndex = this.coins.ETH.filter(item => item["symbol"].indexOf(this.searchKey) == 0);
      }
    },
    initSwiper(){
      var ss = new Swiper ('.swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
      var comtainer = document.getElementById('swiper_container');
      comtainer.onmouseenter = function () {
        ss.autoplay.stop();
      };
      comtainer.onmouseleave = function () {
        ss.autoplay.start();
      }
    },
    strde(str) {
      str = str.trim();
      if(this.langPram == "EN"){
        return str.length > 25 ? str.slice(0, 25) + "..." : str;
      }
      return str.length > 18 ? str.slice(0, 18) + "..." : str;
    },
    updateLangData() {
      this.indexBtn = [
        {
          text: this.$t("service.CUSTOM")
        },
        {
          text: this.$t("service.USDT")
        },
        {
          text: this.$t("service.BTC")
        },
        {
          text: this.$t("service.ETH")
        }
      ];

      this.coins.columns[0].title = this.$t("service.favor");
      this.coins.columns[1].title = this.$t("service.COIN");
      this.coins.columns[2].title = this.$t("service.NewPrice");
      this.coins.columns[3].title = this.$t("service.Change");
      this.coins.columns[4].title = this.$t("service.high");
      this.coins.columns[5].title = this.$t("service.low");
      this.coins.columns[6].title = this.$t("service.ExchangeNum");
      this.coins.columns[7].title = this.$t("service.PriceTrend");
      this.coins.columns[8].title = this.$t("service.Operate");

      this.favorColumns[0].title = this.$t("service.favor");
      this.favorColumns[1].title = this.$t("service.COIN");
      this.favorColumns[2].title = this.$t("service.NewPrice");
      this.favorColumns[3].title = this.$t("service.Change");
      this.favorColumns[4].title = this.$t("service.high");
      this.favorColumns[5].title = this.$t("service.low");
      this.favorColumns[6].title = this.$t("service.ExchangeNum");
      this.favorColumns[7].title = this.$t("service.PriceTrend");
      this.favorColumns[8].title = this.$t("service.Operate");
    },
    init() {
      this.$store.commit("navigate", "nav-index");
      this.$store.state.HeaderActiveName = "1-1";
      this.loadPicData();
      this.addClass(1);
      // this.getmoneyData();
      this.loadDataPage(this.pageNo);
      this.downloadUrlList()
    },
    getStyle(obj, attr) {
      if (obj.currentStyle) {
        return obj.currentStyle[attr];
      } else {
        return getComputedStyle(obj, false)[attr];
      }
    },
    loadDataPage(pageIndex) {
      var param = {};
      (param["pageNo"] = pageIndex),
        (param["pageSize"] = this.pageSize),
        (param["lang"] = this.langPram),
        this.$http
          .post(this.host + this.api.uc.announcement, param)
          .then(response => {
            var resp = response.body;
            if (resp.code == 0) {
              if (resp.data.content.length == 0) return;

              this.totalNum = resp.data.totalElements;

              let FAQListtem = resp.data.content;
              if(this.totalNum > 3){
                this.FAQList = FAQListtem.slice(0, 3);
              }else{
                this.FAQList = FAQListtem;
              }
              this.FAQList.forEach(function(item){
                item.createTime = item.createTime.substring(5, 10);
              });
            } else {
              this.$Notice.error({
                title: this.$t("common.tip"),
                desc: resp.message
              });
            }
          });
    },
    getCNYRate() {
      // this.$http
      //   .post(this.host + "/market/exchange-rate/usd-cny")
      //   .then(response => {
      //     var resp = response.body;
      //     this.CNYRate = resp.data;
      //   });
      if (this.choseBtn === 1) {
        this.CNYRate = 1;
      } else if (this.choseBtn === 2) {
        for (let item of this.coins.USDT) {
          if (item.coin === 'BTC') {
            this.CNYRate = item.price
          }
        }
      } else if (this.choseBtn === 3) {
        for (let item of this.coins.USDT) {
          if (item.coin === 'ETH') {
            this.CNYRate = item.price
          }
        }
      }
    },
    donwload(type) {
      const title = this.$t("common.tip");
      const content = "<p>" + this.$t("common.expect") + "</p>";
      this.$Modal.info({
        title: title,
        content: content,
        closable: true
      });
    },
    loadPicData() {
      let param = {};
      param["sysAdvertiseLocation"] = 1;
      param["lang"] = this.langPram;
      this.$http
        .post(this.host + "/uc/ancillary/system/advertise", param)
        .then(response => {
          var result = response.body;
          if (result.code == 0 && result.data.length > 2) {
            this.picList = result.data;
            this.picShow = true;
            var _this = this;
            setTimeout(function(){
              _this.initSwiper();
            },1000);
          }else{
            this.picShow = false;
          }
        });
    },
    getCoin(symbol) {
      return this.coins._map[symbol];
    },
    startWebsock() {
      var stompClient = null;
      var that = this;
      var socket = new SockJS(that.host + that.api.market.ws);
      stompClient = Stomp.over(socket);
      stompClient.debug = false;
      stompClient.connect({}, function(frame) {
        //订阅价格变化消息
        stompClient.subscribe("/topic/market/thumb", function(msg) {
          var resp = JSON.parse(msg.body);
          var coin = that.getCoin(resp.symbol);
          if (coin != null) {
            // coin.price = resp.close.toFixed(2);
            coin.price = resp.close;
            coin.rose =
              resp.chg > 0
                ? "+" + (resp.chg * 100).toFixed(2) + "%"
                : (resp.chg * 100).toFixed(2) + "%";
            // coin.close = resp.close.toFixed(2);
            // coin.high = resp.high.toFixed(2);
            // coin.low = resp.low.toFixed(2);
            coin.close = resp.close;
            coin.high = resp.high;
            coin.low = resp.low;
            coin.turnover = parseInt(resp.volume);

            if(resp.symbol == "BTC/USDT") {
              that.trendData.highest = resp.high;
              that.trendData.lowest = resp.low;
              that.trendData.volume = resp.volume;
              that.trendData.close = resp.close;
              that.trendData.rose = resp.chg > 0
                ? "+" + (resp.chg * 100).toFixed(2) + "%"
                : (resp.chg * 100).toFixed(2) + "%";
            }
          }
        });
      });
    },
    loadTrendData(){
      this.$http
        .post(this.host + "/market/btc/trend", {})
        .then(response => {
          var resp = response.body;
          this.lineValues = resp.data;
          this.$refs["svgIndexRef"].reload(this.lineValues, this.$refs.trendPanel.offsetWidth, this.$refs.trendPanel.offsetWidth/8);
        });
    },
    downloadUrlList(){
      this.$http
        .post(this.host + "/uc/ancillary/system/app/version/list", {})
        .then(response => {
          var resp = response.body || {}
          var data = resp.data || []
          for (let item of data) {
            if(item.platform == 0) {
              this.androidDownloadUrl = item.downloadUrl
            } else if(item.platform == 1) {
              this.iosDownloadUrl = item.downloadUrl
            }
          }
          console.log(this.androidDownloadUrl)
          console.log(this.iosDownloadUrl)
        });
    },
    round(v, e) {
      var t = 1;
      for (; e > 0; t *= 10, e--);
      for (; e < 0; t /= 10, e++);
      return Math.round(v * t) / t;
    },
    mul(a, b) {
      var c = 0,
        d = a.toString(),
        e = b.toString();
      try {
        c += d.split(".")[1].length;
      } catch (f) {}
      try {
        c += e.split(".")[1].length;
      } catch (f) {}
      return (
        Number(d.replace(".", "")) *
        Number(e.replace(".", "")) /
        Math.pow(10, c)
      );
    },
    addClass(index) {
      this.choseBtn = index;
      if (index == 0) {
        this.dataIndex = this.coins.favor;
      } else if (index == 1) {
        this.dataIndex = this.coins.USDT;
        this.dataIndex2 = this.coins.USDT2;
      } else if (index == 2) {
        this.dataIndex = this.coins.BTC;
        this.dataIndex2 = this.coins.BTC2;
      } else if (index == 3) {
        this.dataIndex = this.coins.ETH;
        this.dataIndex2 = this.coins.ETH2;
      }
    },
    getSymbol() {
      this.loading = true;
      this.$http
        .post(this.host + this.api.market.thumbTrend, {})
        .then(response => {
          var resp = response.body;
          for (var i = 0; i < resp.length; i++) {
            var coin = resp[i];
            coin.price = resp[i].close;
            coin.rose =
              resp[i].chg > 0
                ? "+" + (resp[i].chg * 100).toFixed(2) + "%"
                : (resp[i].chg * 100).toFixed(2) + "%";
            coin.coin = resp[i].symbol.split("/")[0];
            coin.base = resp[i].symbol.split("/")[1];
            coin.href = (coin.coin + "_" + coin.base).toLowerCase();
            coin.isFavor = false;
            this.coins._map[coin.symbol] = coin;
            if(coin.zone == 0) {
              this.coins[coin.base].push(coin); // 主板
            }else{
              this.coins[coin.base+"2"].push(coin); // 创新版
            }

            if(resp[i].symbol == "BTC/USDT") {
              this.trendData.highest = resp[i].high;
              this.trendData.lowest = resp[i].low;
              this.trendData.volume = resp[i].volume;
              this.trendData.close = resp[i].close;
              this.trendData.rose = resp[i].chg > 0
                ? "+" + (resp[i].chg * 100).toFixed(2) + "%"
                : (resp[i].chg * 100).toFixed(2) + "%";
            }
          }
          if (this.isLogin) {
            this.getFavor();
          }
          this.startWebsock();
          this.loading = false;
        });

        this.loadTrendData();
    },
    // getFavor() {
    //   //查询自选
    //   this.$http
    //     .post(this.host + this.api.exchange.favorFind, {})
    //     .then(response => {
    //       var resp = response.body;
    //       for (var i = 0; i < resp.length; i++) {
    //         var coin = this.getCoin(resp[i].symbol);
    //         this.coins.favor.push(coin);
    //       }
    //     });
    // },
    getFavor() {
      //查询自选(收藏)
      this.$http
        .post(this.host + this.api.exchange.favorFind, {})
        .then(response => {
          var resp = response.body;
          this.coins.favor = [];
          for (var i = 0; i < resp.length; i++) {
            var coin = this.getCoin(resp[i].symbol);
            if (coin != null) {
              coin.isFavor = true;
              this.coins.favor.push(coin);
            }
          }
        });
    },
    collect(index, row) {
      if (!this.isLogin) {
        this.$Message.info(this.$t("common.logintip"));
        return;
      }
      var params = {};
      params["symbol"] = row.symbol;
      this.$http
        .post(this.host + this.api.exchange.favorAdd, params)
        .then(response => {
          var resp = response.body;
          if (resp.code == 0) {
            this.$Message.info(this.$t("exchange.do_favorite"));
            this.getCoin(row.symbol).isFavor = true;
            row.isFavor = true;
            this.coins.favor.push(row);
          }
        });
    },
    cancelCollect(index, row) {
      if (!this.isLogin) {
        this.$Message.info(this.$t("common.logintip"));
        return;
      }
      var params = {};
      params["symbol"] = row.symbol;
      this.$http
        .post(this.host + this.api.exchange.favorDelete, params)
        .then(response => {
          var resp = response.body;
          if (resp.code == 0) {
            this.$Message.info(this.$t("exchange.cancel_favorite"));
            this.getCoin(row.symbol).isFavor = false;
            for (var i = 0; i < this.coins.favor.length; i++) {
              var favorCoin = this.coins.favor[i];
              if (favorCoin.symbol == row.symbol) {
                this.coins.favor.splice(i, 1);
                break;
              }
            }
          }
        });
    }
  }
};
</script>
<style scoped lang="scss" >
/*前五热门交易*/
.hot {
  background: #151826;opacity: 1;height: 143px;padding-top: 28px;
  .container {
    float: left;
    width: 20%;
    height: 86px;
    padding: 0 28px 0 31px;
    font-family: Microsoft YaHei;
    color: #FFFFFF;
    &.line {
      border-right: 1px solid #707070;
    }
    .left, .right {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .left {
      float: left;
      &>div:nth-child(1) {
        font-size: 14px;
        font-weight: 400;
      }
      &>div:nth-child(2) {
        font-size: 20px;
        font-weight: bold;
      }
      &>div:nth-child(3) {
        font-size: 12px;
        font-weight: 400;
        color: #999999;
      }
    }
    .right {
      float: right;
      text-align: right;
      &>div:nth-child(1) {
        font-size: 14px;
        &.up {
          color: green;
        }
        &.down {
          color: #FF0000;
        }
      }
    }
  }
}
@media screen and (max-width:768px){
  .app_bottom{
    display: block!important;
  }
  #fullpage {
    padding-top: 45px!important;
  }
}
.banner-panel{
  height:400px;background-color:#141e2b;overflow:hidden;position:relative;
  .activity-list{
    width: 100%;min-width:1200px;display:flex;flex-start:row;justify-content:center;position:absolute;
    .swiper-container {
      margin: 0 auto;
      .swiper-wrapper{
        margin-bottom: 15px;
        .activity-item{
          margin: 0 0;
          &:hover{
            opacity:0.9;
            cursor:pointer;
          }
          img{
            /*max-width:250px;*/
            transition: all 0.5s;
            width: 100%;
            &:hover{
              transform: scale(1.05);
            }
          }
        }
      }
    }
  }
}

#pagetips{
  .agent-panel{
    display:flex;flex-direction:row;overflow:hidden;position:relative;justify-content: center;min-width:1200px;
    .title{
      margin-right: 10px;
      float:left;width:220px;padding: 10px 0px;border-right:1px solid rgb(28, 44, 72);letter-spacing: 3px;
      .gettingstart{
        color: #FFF;
        text-align: justify;
        height: 20px;
        &:after{
          display: inline-block;
          width: 100%;
          content: '';
        }
      }
      .tips{
        font-size:10px;color: #869ec9;letter-spacing:2px;margin-top: 5px;text-align: justify;
        height: 18px;
        &:after{
          display: inline-block;
          width: 100%;
          content: '';
        }
      }
    }
    .agent-list{
      float:left;padding: 4px 0px;height:62px;display:flex;flex-direction:row;overflow:hidden;
      .agent-item{
        height:54px;background:#151f2c;width:210px;margin-left:10px;padding-right:15px;
        border: 1px solid #151f2c;
        transition: all 0.5s;
        .agent-img{
          padding-top:7px;margin-left:7px;float:left;
          img{
            height:40px;width:40px;border-radius:40px;
          }
        }
        .agent-detail{
          padding-top:10px;margin-left:10px;float:left;max-width:130px;
          .agent-name{
            font-size: 13px;
            color:#ffa800;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 130px;
          }
          .agent-count{
            font-size: 10px;color:rgb(103, 122, 153);margin-top:5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 130px;
            letter-spacing: 1px;
          }
        }
      }
      .agent-item:hover{
        cursor:pointer;
        border: 1px solid rgb(240, 185, 11);
      }
    }
    .agent-all{
      height:62px;text-align:right;line-height:62px;background:transparent;position:absolute;right:12px;font-size:12px;color: #f0a70a;
    }
  }
}

#pagetips {
  background: #141e2b;
  padding: 0 10%;

  overflow: hidden;
  .topnav {
    width: 100%;
    line-height: 40px;
    height: 40px;
    // float: left;
    margin: 0 auto;
    .carl {
      width: 100%;
      height: 40px;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      position: relative;
      .notice-list{
        width: 100%;
        text-align:center;
        display:flex;
        flex-start:row;
        justify-content:center;
        height: 40px;
        .notice-item{
          max-width:25%;
          padding:0px 30px;
          text-align:center;
          position:relative;
          .cal_content{
            max-width:100%;
            a{
              color: rgba(130,142,161,1);
              font-size:12px;
            }
            a:hover{
              color: #f0a70a!important;
            }
          }
        }
        .notice-item:not(:last-child):after{
          content: "/";
          position: absolute;
          right: 0;
          top: 1px;
          color: #afafaf;
        }
      }

      .more {
        position: absolute;
        z-index: 0;
        right: 0;
        a {
          color: #f0a70a!important;
          font-size: 12px;
          padding: 3px 12px;
          border-radius:3px;
        }
      }
    }
  }
  .frinend_wakuang {
    width: 50%;
    float: right;
    text-align: right;
    height: 100%;
    line-height: 40px;
    a {
      color: #f0a70a;
      font-size: 14px;
    }
  }
}
#progress {
  padding: 20px 14%;
  .title {
    color: #f0a70a;
    overflow: hidden;
    line-height: 30px;
    font-size: 16px;
    .already {
      float: left;
    }
    .total {
      float: right;
      color: #f0ac19;
    }
  }
  .ivu-progress.ivu-progress-normal {
    .ivu-progress-inner {
      background: #fff;
      border-radius: 0;
      .ivu-progress-bg {
        border-radius: 0;
      }
    }
  }
}
#page2 {
  /*background: #141e2c;*/
  height: auto;
  min-height: 320px;
  padding: 40px 14%;
  .page2nav {
    line-height: 50px;
    font-size: 20px;
    background: #1e2834;
    min-width: 864px;
    display:flex;
    .board-title{
      width: 20%;
      height: 60px;
      line-height: 60px;
      text-align:center;
      background: #ffa800;
      color: #000;
    }
    .brclearfix {
      width: 100%;
      li {
        float: left;
        cursor: pointer;
        color: #fff;
        background: #1e2834;
        list-style: none;
        font-size: 16px;
        padding: 5px 40px;
        -moz-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
        -webkit-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
        box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
        &:hover {
          background: #222b38;
        }
      }
      li.active {
        background: #27313e;
        color: #f0a70a;
        position: relative;
        border-bottom: 2px solid #f0a70a;
      }
    }
  }
  .ptjy {
    height: 100%;
    min-width: 864px;
    .tables {
      border: none;
      -moz-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
      -webkit-box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
      box-shadow: 2px 2px 5px transparent, -2px -2px 4px transparent;
      .ivu-table {
        .ivu-table-header {
          .ivu-table-column-center {
            background: none;
          }
        }

      }
    }
  }
}
#page3 {
  width: 100%;
  min-width: 1200px;
  background-color: #000000;
  color: #999999;
  .container {
    overflow: hidden;
    width: 1200px;
    margin: auto;
    color: #999999;
    ul {
      list-style: none;
    }
    span {
      display: block;
      text-align: center;
    }
    &>span:nth-child(1) {
      font-size: 40px;
      margin-top: 100px;
      color: #FFFFFF;
    }
    &>span:nth-child(2) {
      font-size: 26px;
      margin-top: 40px;
    }
    &>ul:nth-child(3) {
      display: flex;
      font-size: 12px;
      margin-top: 120px;
      li {
        width: 33%;
        div {
          height: 186px;
          text-align: center;
          vertical-align: middle;
          img {
            width: 50%;
          }
        }
        &>span:nth-child(2) {
          margin-bottom: 20px;
          font-size: 20px;
          color: #DDDDDD;
        }
        span {
          display: block;
        }
      }
    }
    &>span:nth-child(4) {
      font-size: 40px;
      margin-top: 120px;
      margin-bottom: 40px;
      color: #FFFFFF;
    }
    &>span:nth-child(5),&>span:nth-child(6),&>span:nth-child(7) {
      font-size: 26px;
      text-align: center;
    }
    &>ul:nth-child(8) {
      display: flex;
      font-size: 12px;
      margin-top: 120px;
      margin-bottom: 100px;
      li {
        width: 20%;
        div {
          text-align: center;
          height: 96px;
          img {
            width: 25%;
          }
        }
        span {
          width: 60%;
          margin: auto;
        }
      }
    }
  }
}
.ivu-input{
  border-radius: 20px;
  border-color: transparent;
}
.bg-dark{
  background: #192330;
}
.bg-light{
  background: #222e3d;
}
</style>
<style lang="scss">
#progress {
  .ivu-progress.ivu-progress-normal {
    .ivu-progress-inner {
      background: #fff;
      border-radius: 5px;
      border: 1px solid #f0a70a;
      .ivu-progress-bg {
        border-radius: 0;
        background: #f0a70a;
      }
    }
  }
}
#page2 {
  .ptjy {
    position:relative;
    min-height: 500px;
    /*background-color: #141e2c;*/
    /*border-bottom: 1px solid #27313e!important;*/
    /*&:after{*/
      /*background:#27313e!important;*/
      /*content: '';*/
      /*width: 1px;*/
      /*height: 100%;*/
      /*position: absolute;*/
      /*top: 0;*/
      /*right: 0;*/
      /*z-index: 3;*/
    /*}*/
    /*&:before{*/
      /*background:#27313e!important;*/
      /*content: '';*/
      /*width: 1px;*/
      /*height: 100%;*/
      /*position: absolute;*/
      /*top: 0;*/
      /*left: 0;*/
      /*z-index: 3;*/
    /*}*/
    .tables {
      .ivu-table {
        /*background-color: #141e2c;*/
        .ivu-table-header {
          /*background:#27313e;*/
          color:#888;
          th {
            background: none;
            border-color:#26303d;
          }
        }

        .ivu-table-header{
          /*background: #141e2c;*/
              border-bottom: 1px solid #27313e;
          .ivu-table-cell {
            padding: 10px 0;
          }
        }
        .ivu-table-body {
          .ivu-table-cell {
            padding: 5px 0;
          }
        }
        .ivu-table-body table .ivu-table-tbody {
            tr td{
              border-color:#26303d;
              color:#fff;
            }
        }
      }
    }
  }
}
</style>


<style>
.section .ivu-carousel-dots-inside {
  bottom: 20px;
}

.green {
  color: #00b275 !important;
}

.red {
  color: #f15057 !important;
}

.brclearfix:after {
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
}

#fullpage {
  background: #fff;
  padding-top: 60px;
}

.carousel-item {
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
  background-size: cover;
}

.demo-carousel1 {
  /* background: url(../../assets/images/banner1.jpg) no-repeat center; */
  height: 575px;
  background-size: cover;
}

.demo-carousel2 {
  /* background: url(../../assets/images/banner2.jpg) no-repeat center; */
  height: 575px;
  background-size: cover;
}

.demo-carousel-btn {
  width: 100%;
  height: 100%;
  padding-top: 345px;
}

.demo-carousel1 a {
  display: inline-block;
  width: 250px;
  height: 55px;
  margin: 0 15px;
}

/*.register {
  background: url(../../assets/images/register.png) no-repeat;
}*/

/* .usdt {
  float: left;
  width: 100%;
} */

.usdt_icon {
  float: left;
  width: 18%;
  height: 290px;
  background: #1d293a;
  padding-top: 125px;
  margin: 5px;
}
.btc,
.eth {
  float: left;
  width: 100%;
  margin-top: 10px;
}

.btc_icon,
.eth_icon {
  float: left;
  width: 18%;
  height: 140px;
  background: #1d293a;
  padding-top: 50px;
  margin: 5px;
}

#nav {
  position: fixed;
  right: 10%;
  top: 50%;
  z-index: 100;
}

#nav ul li {
  display: block;
  /* width: 120px; */
  height: 25px;
  margin: 7px;
  position: relative;
  padding-right: 20px;
  text-align: right;
  color: #fff;
}

#nav ul li span {
  display: none;
}

#nav ul li a {
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: url(../../assets/images/page.png) no-repeat;
  position: absolute;
  z-index: 1;
}

#nav ul li a:hover,
#nav ul li a.active {
  top: 0;
  right: -3px;
  width: 18px;
  height: 18px;
  background: url(../../assets/images/page_active.png) no-repeat;
  position: absolute;
  z-index: 1;
}

@-webkit-keyframes fadeinB {
  0% {
    top: 50%;
    opacity: 0;
  }
  100% {
    top: 30%;
    opacity: 1;
  }
}

@keyframes fadeinB {
  0% {
    top: 50%;
    opacity: 0;
  }
  100% {
    top: 30%;
    opacity: 1;
  }
}

@-webkit-keyframes fadeinA {
  0% {
    top: 60%;
    opacity: 0;
  }
  100% {
    top: 40%;
    opacity: 1;
  }
}

@keyframes fadeinA {
  0% {
    top: 60%;
    opacity: 0;
  }
  100% {
    top: 40%;
    opacity: 1;
  }
}

.news_1 {
  color: #202b3c;
  font-size: 12px;
}

.news_2 {
  color: #505c6f;
  font-size: 13px;
}

.news_3 {
  color: #fff;
  font-size: 18px;
}

.news_title {
  color: #fff;
  font-size: 20px;
}

.news_date {
  color: #505c6f;
}

.news_detail {
  color: #98999f;
  margin-top: 10px;
}
.ptjy .ivu-table td, .ptjy .ivu-table th{
  height: 25px;
}
.price-rmb{
  color: #828ea1;
  font-size: 10px;
  margin-left: 3px;
}
.price-td{
  padding-left: 100px;
  text-align: left;
}
th .ivu-table-cell span{
  font-weight: normal!important;
}
.ivu-table td{
  background: transparent!important;
}
.app_bottom{
  display: none;
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: rgba(242,246,250,1) !important;
}
.app_bottom .left_logo img{
  height: 30px;margin-top:5px;border-radius: 5px;margin-left: 5px;margin-right: 5px;
}
.app_bottom .right_btn_wrap{
  float: right;height: 40px;line-height: 40px;margin-right: 5px;
}
.app_bottom .right_btn{
  color: #FFF;
  border-radius: 3px;
  padding: 0px 10px;
  line-height: 26px;
  height: 26px;
  display: block;
  margin-top: 7px;
  background: linear-gradient(200deg, #ff9900, #ffbe2b, #ffa500);
}

.lastest-price{
  background:-webkit-linear-gradient(left,#828ea1,#4c5563 25%,#828ea1 50%,#4c5563 75%,#828ea1);
  color:transparent;
  -webkit-background-clip:text;
  background-size:200% 100%;
  animation:masked-animation 2s infinite linear;
}

@-webkit-keyframes masked-animation {
    0% {
        background-position:0 0;
    }
    100% {
        background-position:-100% 0;
    }
}
</style>


