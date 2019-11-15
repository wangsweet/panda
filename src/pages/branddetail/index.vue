<template>
  <div>
    <header>
      <span class="iconfont" @click="handleback()">&#xe608;</span>
      <span>品牌详情</span>
      <span>&nbsp;</span>
    </header>
    <section>
      <div class="brand_box">
        <div style="height:.81rem;"></div>
        <div class="brand_info" v-for="(item,index) in branddetail" :key="index">
          <div class="logo">
            <img
              :src="item.brandLogo"
            />
          </div>
          <div class="brand_name text-center">{{item.brandName}}</div>
          <div class="brand_wenan text-center">
            <span>{{item.brandWenan}}</span>
          </div>
          <div class="brand_rest text-center">
            <span class="fans">粉丝：{{item.fansNum>10000?(item.fansNum/10000)+'万':item.fansNum}}</span>
            <span>近期销量：{{item.recentSale}}</span>
          </div>
          <div class="brand_label text-center">
            <span class="brand_label_span">
              <span>「{{item.label[0]}}」</span>
            </span>
          </div>
          <div class="brand_msg">
            <span
              class="brand_msg_span"
            >{{item.brandDes}}</span>
          </div>
          <div class="brand_more">查看更多</div>
        </div>
        <div class="brand_hot">
          <div class="brand__hot_title_detail">
            <h3>爆款推荐</h3>
          </div>
          <div class="brand_hot_product_list row-s">
            <li class="col-12-4" v-for="(item,index) in brandhotlist" :key="index">
              <div class="brand_hot_product">
                <div class="cent">
                  <div class="img ui-act-label">
                    <div class="imgArea">
                      <img
                        :src="item.pic"
                      />
                      <div class="imgTag">{{item.discount}}</div>
                    </div>
                  </div>
                  <div class="textArea">
                    <div class="price">
                      <div class="priceTag">￥</div>
                      <div class="currentPrice">{{item.jiage}}</div>
                      <div class="prePrice">￥{{item.yuanjia}}</div>
                    </div>
                    <div class="tag">
                      <img
                        class="jiaobiao"
                        src="http://cmsstatic.ffquan.cn//wap_new/brand/images/ju.png"
                      />
                      <div class="merchantTag">爆卖</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
        <div class="presell_goods">
          <ul>
            <li v-for="(item,index) in branddetaillist" :key="index">
              <img
                :src="item.pic"
              />
              <h3 class="product_title">
                <span class="labelTop">天猫</span>
                <span class="title_text">{{item.d_title}}</span>
              </h3>
              <div class="product_info">
                <div class="price">
                  <span class="ju">聚</span>
                  <span>券后&nbsp;</span>
                  <span class="RMB">¥</span>
                  <span class="price_num">{{item.jiage}}</span>
                  <span class="red_bubble">
                    {{item.labelThree?item.labelThree:"限时价"}}
                    <span class="triangle"></span>
                  </span>
                </div>
                <div class="label_box">
                  <span class="juan">
                    <span>劵</span>{{item.quanJine}}元
                  </span>
                </div>
                <div class="salse">
                  <span>已售{{item.xiaoliang>10000?(item.xiaoliang/10000)+"万":item.xiaoliang}}</span>
                  <span>{{item.comments}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {branddetailApi,branddetailsApi} from "@api/branddetail";
export default {
  name: "Branddetail",
  data(){
    return{
      branddetail:[],
      branddetaillist:[],
      brandhotlist:[],
    }
  },
  methods:{
    handleback(){
      this.$router.back();
    }
  },
  async created(){
    let data=await branddetailApi(this.$route.query.cid);
    this.branddetail.push(data.data);
    this.brandhotlist=data.data.hotPush;
    // console.log(this.brandhotlist);

    let branddata=await branddetailsApi(this.$route.query.cid);
    this.branddetaillist=branddata.data.lists;
    // console.log(this.branddetaillist);
  }
};
</script>
<style scoped>
header {
  height: 45px;
  font-size: 0.18rem;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 100;
  background: #fff;
}
section {
  background: linear-gradient(180deg, #aaa 0, #f6f6f6 100%);
  margin-bottom: .45rem;
}
header > span:first-child {
  font-size: 0.26rem;
  font-weight: 400;
  color: #000;
  padding-left: 0.1rem;
  text-align: center;
}

header > span:nth-child(2) {
  font-size: 0.18rem;
  color: #000;
  margin-left: -0.18rem;
}
.brand_box {
  overflow: auto;
  height: 6rem;
}
.brand_box .brand_info {
  background: #fff;
  border-radius: 0.08rem;
  padding: 0 0.11rem 0.17rem;
  margin: 0 0.1rem 0.1rem;
  position: relative;
}

.brand_box .brand_info .logo {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 0.04rem;
  overflow: hidden;
  position: absolute;
  zoom: 1;
  top: -0.3rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}

.brand_info .logo img {
  width: 100%;
}

.brand_box .brand_info .brand_name {
  height: 0.24rem;
  font-size: 0.17rem;
  font-family: PingFangSC;
  font-weight: 500;
  color: #333;
  line-height: 0.24rem;
  text-align: center;
  padding-top: 0.4rem;
}

.brand_info .brand_wenan {
  text-align: center;
  padding: 0 0.05rem;
  box-sizing: border-box;
  height: 0.16rem;
  margin-top: 0.05rem;
  font-size: 0.1rem;
  font-family: PingFangSC;
  font-weight: 400;
  color: #666;
  line-height: 0.16rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.brand_info .brand_wenan>span {
  background: rgba(0, 0, 0, 0.05);
  margin: auto;
  display: inline-block;
  padding: 0 0.05rem;
  border-radius: 0.1rem;
  height: 0.16rem;
  font-size: .14rem;
}

.brand_info .brand_rest {
  height: 0.17rem;
  font-size: 0.1rem;
  font-family: PingFangSC;
  font-weight: 300;
  color: #333;
  line-height: 0.17rem;
  margin-top: 0.11rem;
  display: flex;
  justify-content: center;
  margin-bottom:.1rem;
}
.fans,.brand_rest span{
  font-size:.1rem;
}

.brand_info .brand_rest .fans:after {
  display: inline-block;
  width: 1px;
  height: 0.11rem;
  background: rgba(51, 51, 51, 0.5);
  content: "";
  margin: 0 0.05rem;
  
}

.brand_info .brand_label span {
  height: 0.17rem;
  color: #fe3a33;
  padding: 0 0.12rem;
  margin-top: 0.15rem;
  text-overflow: ellipsis;
  font-size: 0.14rem;
  font-weight: 400;
  line-height: 0.17rem;
  overflow: hidden;
  text-align: center;
}

.brand_info .brand_msg {
  color: #666;
  text-indent: 0.24rem;
  margin-bottom: 0.1rem;
  margin-top: 0.15rem;
  text-overflow: ellipsis;
  font-size: 0.12rem;
  font-weight: 400;
  line-height: 0.17rem;
  overflow: hidden;
  font-family: PingFangSC;
}
.brand_msg span{
  font-size: .14rem;
}
.brand_info .brand_more {
  height: 0.17rem;
  font-size: 0.12rem;
  font-family: PingFangSC;
  font-weight: 400;
  color: #9b9b9b;
  line-height: 0.17rem;
  text-align: center;
}

.brand_hot {
  background: #fff;
  border-radius: 0.08rem;
  padding: 0.16rem 0.085rem 0.075rem 0.1rem;
  overflow: hidden;
  margin: 0.1rem;
}

.brand__hot_title_detail {
  margin-bottom: 0.24rem;
  text-align: center;
  height: 0.2rem;
}

.brand__hot_title_detail h3 {
  font-size: 0.15rem;
  font-weight: 500;
  color: #333;
  line-height: 0.21rem;
}

.row-s .col-12-4 {
  width: 33.33333333%;
  float: left;
}

.brand_hot_product {
  position: relative;
  padding: 0 0.025rem;
}

.brand_hot_product .cent {
  position: relative;
}

.ui-act-label {
  position: relative;
  z-index: 1;
  zoom: 1;
}

.brand_hot_product .cent .imgArea {
  position: relative;
  overflow: hidden;
  border-radius: 0.06rem;
}

.brand_hot_product .cent .imgArea img {
  width: 100%;
  background: #fff !important;
}

.brand_hot_product .cent .imgArea .imgTag {
  width: 0.31rem;
  height: 0.14rem;
  background: linear-gradient(153deg, #fad961 0, #f76b1c 100%);
  border-radius: 0.07rem 0.07rem 0.07rem 0;
  font-size: 0.1rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 0.03rem;
  right: 0.03rem;
}

.brand_hot_product .cent .textArea {
  padding: 0.06rem 0 0 0.04rem;
}

.brand_hot_product .cent .textArea .price {
  margin-bottom: 0.04rem;
  display: flex;
  align-items: baseline;
}

.brand_hot_product .cent .textArea .price .priceTag {
  font-size: 0.14rem;
  font-weight: 400;
  color: #ff3b32;
  line-height: 0.14rem;
  margin-right: 0.025rem;
}

.brand_hot_product .cent .textArea .price .currentPrice {
  font-size: 0.14rem;
  font-weight: 500;
  color: #ff3b32;
  line-height: 0.17rem;
  margin-right: 0.09rem;
}

.brand_hot_product .cent .textArea .price .prePrice {
  font-size: 0.11rem;
  font-weight: 400;
  color: #aaa;
  line-height: 0.12rem;
  text-decoration: line-through;
}

.brand_hot_product .cent .textArea .tag {
  display: flex;
  overflow: hidden;
  min-height: 0.13rem;
}

.jiaobiao {
  width: 0.18rem;
  height: 0.13rem;
  margin-right: 0.04rem;
}

.brand_hot_product .cent .textArea .tag .merchantTag {
  box-sizing: border-box;
  border-radius: 0.03rem;
  opacity: 0.7;
  border: 1px solid #fe3a33;
  font-size: 0.1rem;
  font-family: PingFangSC;
  font-weight: 400;
  color: #fe3a33;
  text-align: center;
  padding: 0 0.05rem;
  word-break: keep-all;
  display: inline-block;
  height: 0.13rem;
  line-height: 0.13rem;
}
.presell_goods {
  /* padding-left: 0.08rem; */
  clear: both;
  border-radius: 0.08rem;
  /* padding: 0.16rem 0.085rem 0.075rem 0.1rem; */
  overflow: hidden;
  margin: 0.1rem;
}
.presell_goods ul {
  display: flex;
  flex-wrap: wrap;
}
.presell_goods ul li {
  width: 48.2%;
  background: #fff;
  border-radius: 0.05rem;
  box-sizing: border-box;
  margin: 0.025rem;
}
.presell_goods ul li:nth-child(2n) {
  margin-right: 0;
}

.presell_goods ul li img {
  width: 100%;
  border-radius: 0.05rem;
}

.labelTop {
  min-width: 0.23rem;
  height: 0.16rem;
  background-color: #fe0036;
  border-radius: 0.02rem;
  display: inline-block;
  margin-right: 0.03rem;
  color: #fff;
  font-size: 0.12rem;
  line-height: 0.16rem;
  font-weight: 400;
}

.product_title > span {
  float: left;
}

.title_text {
  width: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.13rem;
  font-weight: 400;
  color: #333;
}

.product_info {
  margin-top: 0.3rem;
}

.price {
  font-size: 0.1rem;
  font-weight: 400;
  color: #666;
  margin-bottom: -0.03rem;
  display: flex;
  align-items: baseline;
  vertical-align: text-bottom;
}

.ju {
  min-width: 0.15rem;
  height: 0.16rem;
  background-color: #fe0036;
  border-radius: 0.02rem;
  display: inline-block;
  margin-right: 0.03rem;
  color: #fff;
  font-size: 0.10rem;
  line-height: 0.16rem;
  font-weight: 400;
  text-align: center;
}
.price span:first-child{
  font-size: 0.10rem;
}
.red_bubble {
  min-width: 0.35rem;
  height: 0.16rem;
  background: linear-gradient(150deg, #fe3a33 0, #fb8d2c 100%);
  border-radius: 0.02rem;
  display: inline-block;
  margin-right: 0.03rem;
  color: #fff;
  font-size: 0.10rem;
  line-height: 0.12rem;
  font-weight: 400;
  text-align: center;
}

.RMB {
  font-size: 0.10rem;
  font-weight: 500;
  color: #ff2b22;
  margin-left: 1px;
}

.price_num {
  font-size: 0.16rem;
  font-weight: 500;
  color: #ff2b22;
}
.active_title_label > img {
  width: 0.23rem !important;
  height: 0.14rem;
  margin-top: -0.15rem;
}

.juan {
  height: 0.12rem;
  background: linear-gradient(90deg, #ff8873 0, #ff4f4f 100%);
  border-radius: 0.02rem;
  font-size: 0.08rem;
  font-weight: 400;
  padding-right: 0.02rem;
  padding-left: 0.02rem;
  color: #fff;
  line-height: 0.13rem;
  display: inline-block;
  text-align: center;
}

.juan > span {
  background: #fff;
  border-radius: 1px 0 0 1px;
  font-size: 0.06rem;
  color: #fe3a33;
  margin: auto 0.03rem auto 1px;
  width: 0.08rem;
  height: 0.08rem;
  padding: 0 0.1px;
  text-align: center;
  line-height: 0.08rem;
}

.salse > span {
  font-size: 0.09rem;
  font-weight: 400;
  color: #888;
}
.salse span:nth-child(2)::before {
  content: "";
  width: 1px;
  background: #888;
  margin: 0 5px;
  display: inline-block;
  height: 8px;
  position: relative;
  z-index: 1;
  zoom: 1;
  top: 1px;
}
</style>