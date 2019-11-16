<template>
  <div>
    <header>
      <span class="iconfont" @click="handleback()">&#xe608;</span>
      <span class="iconfont">&#xe636;</span>
    </header>
    <div>
      <div class="detail_box" v-for="(item,index) in detail" :key="index">
        <div class="swiper">
          <img alt :src="item.pic" />
        </div>
        <div class="goods_info">
          <h1 class="col-mar">
            <span>天猫</span>
            {{item.d_title}}
          </h1>
          <div class="row-s">
            <div class="col-money">
              券后价¥
              <span>{{item.jiage}}</span>
            </div>
            <div class="text-right">
              已售
              <span
                class="col-red"
              >{{item.xiaoliang>10000?(item.xiaoliang/10000).toFixed(1)+'万':item.xiaoliang}}</span>件
            </div>
            <div class="text-left">天猫价 ¥{{item.yuanjia}}</div>
            <div class="text-right">
              <span>
                <i class="iconfont">&#xe637;</i>包邮
              </span>
              <span>
                <i class="iconfont">&#xe637;</i>运费险
              </span>
            </div>
          </div>
          <div class="goods_quan">
            <a class="row getGoodsLink">
              <div class="col-12-8 money">
                <p>
                  <span>{{item.quan_jine}}</span> 元优惠券
                </p>
                <b>使用期限:{{(item.quan_start_time).split("&nbsp;")[0]}}-{{(item.quan_time).split("&nbsp;")[0]}}</b>
              </div>
              <div class="col-12-4 name">
                <span>立即领券</span>
              </div>
            </a>
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/main/images/goods_quan.png?v=201911081848"
              alt
            />
          </div>
          <div class="goods_desc">{{item.miaoshu}}</div>
        </div>

        <div class="goods_shop" v-for="(item,index) in detailshop" :key="index">
          <div class="info">
            <img :src="item.shopLogo" alt style="background: rgb(245, 245, 245); display: block;" />
            <div class="text">
              <h3>{{item.shopName}}</h3>
              <p class="new">
                店铺所有优惠
                <i class="iconfont">&#xe609;</i>
              </p>
            </div>
          </div>
          <div class="tab">
            <div class="col-12-4">宝贝描述:{{item.dsrScore}}</div>
            <div class="col-12-4">卖家服务:{{item.serviceScore}}</div>
            <div class="col-12-4">物流服务:{{item.shipScore}}</div>
          </div>
        </div>
        <div id="goodsRecoShow">
          <div class="goods_reco">
            <h3>相似推荐</h3>
            <div class="goods_container">
              <div class="swiper_side">
                <div class="swiper-cent" v-for="(item,index) in detailsim" :key="index">
                  <img :src="item.pic" alt />
                  <p class="name">{{item.dtitle}}</p>
                  <p class="quan">
                    <span>{{item.quanJine}}元券</span>
                  </p>
                  <p class="money">
                    券后价
                    <span>¥{{item.jiage}}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="goods_reco">
          <h3>今日热销</h3>
          <ul>
            <li v-for="(item,index) in detailrcd" :key="index">
              <img ui-lazyload :src="item.pic" />
              <h3 class="product_title">
                <span class="labelTop">天猫</span>
                <span class="title_text">{{item.dtitle}}</span>
              </h3>
              <div class="product_info">
                <div class="price">
                  <span class="ju">聚</span>
                  <span>券后&nbsp;</span>
                  <span class="RMB">¥</span>
                  <span class="price_num">{{item.jiage}}</span>
                  <span class="red_bubble">
                    历史低价
                    <span class="triangle"></span>
                  </span>
                </div>
                <div class="label_box">
                  <span class="juan">
                    <span>劵</span>
                    {{item.quanJine}}元
                  </span>
                </div>
                <div class="salse">
                  <span>已售{{item.xiaoliang>10000?(item.xiaoliang/10000)+"万":item.xiaoliang}}</span>
                  <span>评论0</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div style="height: .56rem;"></div>
      </div>
    </div>
    <div class="footer">
      <div class="cent">
        <div class="text-center">
          <p class="img">
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/main/images/detail_tab_share.svg?v=201911081848"
              alt
            />
          </p>分享
        </div>

        <div class="text-center">
          <p class="img">
            <i class="iconfont">&#xe613;</i>
          </p>收藏
        </div>

        <!-- 领券购买 淘口令 -->
        <div class="but">
          <span>口令购买</span>
          <span>领券购买</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  detailApi,
  detailsApi,
  detailssApi,
  detailimgApi,
  detailrcdApi,
  detailshopApi,
  detailsimApi
} from "@api/detail";
export default {
  name: "Detail",
  data() {
    return {
      detail: [],
      detailshop: [],
      detailrcd: [],
      detailsim: [],
      detailimg: []
    };
  },
  async created() {
    let data = await detailApi(this.$route.query.cid);
    let datas = await detailsApi(this.$route.query.cid);
    let datass = await detailssApi(this.$route.query.cid);
    if (data.data.goodsList.length > 0) {
      this.detail.push(data.data.goodsList[this.$route.query.index]);
    } else if (datas.data.content.length > 0) {
      this.detail.push(datas.data.content[this.$route.query.index]);
    } else {
      this.detail.push(datass.data.content[this.$route.query.index]);
    }
    let shopdata = await detailshopApi(this.$route.query.goodsid);
    this.detailshop.push(shopdata.data);
    let detailrcddata = await detailrcdApi(this.$route.query.id);
    this.detailrcd = detailrcddata.data;
    let detailsimdata = await detailsimApi(
      this.$route.query.id,
      this.$route.query.cateid
    );
    this.detailsim = detailsimdata.data.splice(1);
    let detailimgdata = await detailimgApi(this.$route.query.goodsid);
    this.detailimg = detailimgdata.data;
  },
  methods: {
    handleback() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
/* body {
  background: #faf5f6;
} */

header {
  height: 0.44rem;
  background: rgba(255, 255, 255, 0);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
}
header span {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  text-align: center;
  background: #ccc;
  color: #fff;
  font-size: 0.15rem;
  line-height: 0.3rem;
  margin: 0.1rem;
}
.detail_box {
  height: 8rem;
  overflow: auto;
}
.swiper {
  width: 3.2rem /* 320/100 */;
}

.swiper > img {
  width: 100vw;
}
.goods_quan {
  position: relative;
}
.goods_quan .row {
  display: block;
  position: absolute;
  z-index: 1;
  zoom: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
.goods_quan .row .money {
  font-size: 0.12rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 6%;
  line-height: 0.13rem;
  position: relative;
  z-index: 1;
  zoom: 1;
  left: 0.03rem;
  width: 66%;
  float: left;
  border-right:2px dotted #fff;
}
.goods_quan .row .money p {
  font-size: 0.16rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.1rem;
}
.goods_quan .row .money b {
  font-size: 0.13rem;
  font-weight: 400;
  color: #fff;
}
.goods_quan .row .money p span {
  font-size: 0.18rem;
  position: relative;
  z-index: 1;
  zoom: 1;
  top: 0;
  color: #fff;
  font-weight: 600;
}
.goods_quan .row .name {
  line-height: 100%;
  color: #fff;
  position: relative;
  z-index: 1;
  zoom: 1;
  text-align: left;
  font-weight: 600;
  float: left;
  top: 40%;
}
.goods_quan .row .name span {
  margin-left: 10%;
}
.goods_quan img {
  width: 100%;
}
.goods_info h1 {
  font-size: 0.16rem;
  font-weight: 400;
  padding: 0.1rem 0 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #fff;
}

.goods_info h1 span {
  border: 1px solid #fc3f78;
  color: #fc3f78;
  border-radius: 2px;
  padding: 0 0.05rem;
  margin-right: 0.05rem;
  margin-left: 0.1rem;
  font-size: 0.1rem;
  top: -1px;
  position: relative;
  z-index: 1;
  zoom: 1;
}
.row-s {
  height: 0.7rem;
}
.col-money {
  color: #fc4d52;
  font-size: 0.13rem;
  height: 0.3rem;
  line-height: 0.3rem;
  margin-left: 0.1rem;
  float: left;
  width: 46%;
  background: #fff;
}

.col-money i {
  font-style: normal;
  font-size: 0.13rem;
  margin-right: 0.08rem;
}

.col-money span {
  color: #fc4d52;
  font-size: 0.18rem;
  font-weight: 500;
}

.text-right {
  float: left;
  width: 50%;
  color: #666;
  font-size: 0.13rem;
  text-align: right;
  height: 0.3rem;
  line-height: 0.3rem;
  background: #fff;
}
.text-right span {
  font-size: 0.12rem;
  margin-left: 0.1rem;
}
.text-right span i {
  color: red;
  font-size: 0.1rem;
}

.text-left {
  float: left;
  width: 45%;
  font-size: 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  margin-left: 0.1rem;
  color: #888;
  background: #fff;
}

.col-red {
  color: #f72239;
}

.goods_quan img {
  width: 100%;
}

.goods_desc {
  font-size: 0.14rem;
  color: #888;
  padding: 0 0.1rem;
  background: #fff;
}

.goods_shop {
  margin-top: 0.07rem;
}

.goods_shop .info {
  padding: 0.1rem 0.1rem;
  min-height: 0.6rem;
  background: #fff;
}

.goods_shop .info img {
  float: left;
  width: 60px;
  height: 0.6rem;
}

.goods_shop .info div.text {
  position: relative;
  z-index: 1;
  zoom: 1;
  min-height: 0.6rem;
  padding-left: 0.8rem;
  line-height: 0.3rem;
}

.goods_shop .info div.text h3 {
  font-size: 0.15rem;
  font-weight: 400;
  margin-right: 1.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goods_shop .info div.text .new {
  position: absolute;
  z-index: 1;
  zoom: 1;
  right: 0;
  top: 50%;
  margin-top: -15px;
  color: #888;
  font-size: 0.13rem;
}

.goods_shop .tab {
  border-top: solid 1px #f5f5f5;
  color: #555;
  padding: 0.1rem 0.1rem;
  background: #fff;
  margin-bottom: 0.08rem;
  height: 0.3rem;
  line-height: 0.3rems;
}

.col-12-4 {
  width: 33%;
  float: left;
  font-size: 0.14rem;
}

.goods_reco {
  background: #fff;
  overflow: scroll;
  flex-wrap: nowrap;
  width: 100%;
  margin-top: 0.1rem;
}

.swiper_side {
  display: flex;
  flex-direction: row;
  padding-left: 0.1rem;
}

.goods_reco > h3 {
  height: 0.35rem;
  font-size: 0.16rem;
  font-weight: 400;
  text-align: center;
  background: #fff;
}

.goods_container {
  display: block;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: left;
  float: left;
  overflow: scroll;
  flex-wrap: nowrap;
}

.swiper-cent {
  width: 30%;
  height: 100%;
  margin-right: 0.1rem;
  height: 100%;
  text-align: left;
  background: #fff;
  position: relative;
}

.swiper-cent > img {
  display: block;
  position: relative;
  z-index: 1;
  width: 100%;
  background: #fff;
}

.swiper-cent .name {
  font-size: 0.14rem;
  width: 95%;
  padding: 0.05rem 0 0;
  margin-bottom: 0.08rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #666;
  background: #fff;
}

.swiper-cent .quan {
  font-size: 0.1rem;
  color: #fc4d52;
  border: 1px solid #fc4d52;
  padding: 0 0.05rem;
  display: inline-block;
  height: 0.15rem !important;
  line-height: 0.15rem;
  overflow: hidden;
  background: #fff;
}
.quan span {
  font-size: 0.1rem;
  color: #fc4d52;
}
.swiper-cent .money {
  width: 100%;
  line-height: 0.2rem;
  padding-bottom: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.14rem;
  color: #fc4d52;
}
.money span {
  font-size: 0.14rem;
  color: #fc4d52;
}
.imglist > img {
  width: 100%;
}
.goods_reco {
  background: #f5f5f5;
}
.goods_reco ul {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.04rem;
}

.goods_reco ul li {
  width: 48%;
  background: #fff;
  border-radius: 0.05rem;
  box-sizing: border-box;
  margin: 0.02rem;
}

.goods_reco ul li img {
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
  width: 0.95rem;
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
  margin-bottom: 0.07rem;
  display: flex;
  align-items: baseline;
  vertical-align: text-bottom;
}
.label_box {
  margin-bottom: 0.05rem;
}
.ju {
  min-width: 0.15rem;
  height: 0.16rem;
  background-color: #fe0036;
  border-radius: 0.02rem;
  display: inline-block;
  margin-right: 0.03rem;
  color: #fff;
  font-size: 0.12rem;
  line-height: 0.16rem;
  font-weight: 400;
  text-align: center;
}

.red_bubble {
  min-width: 0.35rem;
  height: 0.16rem;
  background: linear-gradient(150deg, #fe3a33 0, #fb8d2c 100%);
  border-radius: 0.02rem;
  display: inline-block;
  margin-right: 0.03rem;
  color: #fff;
  font-size: 0.12rem;
  line-height: 0.12rem;
  font-weight: 400;
  text-align: center;
}

.RMB {
  font-size: 0.12rem;
  font-weight: 500;
  color: #ff2b22;
  margin-left: 1px;
}

.price_num {
  font-size: 0.19rem;
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

.footer {
  height: 0.56rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 110;
}

.cent {
  position: relative;
  zoom: 1;
  z-index: 5;
  background: #fff;
  box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.1);
  height: 0.56rem;
}

.text-center {
  font-size: 0.14rem;
  padding: 0.05rem 0.1rem;
}

.but {
  width: 60%;
  margin-left: 0.25rem;
  height: 0.5rem;
  margin-top: 0.02rem;
  background: linear-gradient(to left, #fb85f7 0, #fe9f69 100%);
}

.text-center,
.but {
  float: left;
}

.img > i {
  font-size: 0.22rem;
  color: rgb(116, 113, 113);
}

.but span:first-child {
  width: 48%;
  background: #fff;
  color: #fe9f69;
  line-height: 0.48rem;
  text-align: center;
  height: 0.48rem;
  margin-top: 0.01rem;
  margin-left: 0.01rem;
  border-radius: 0.03rem 0 0 0.03rem;
  float: left;
}
.but span:last-child {
  width: 48%;
  background: linear-gradient(to left, #fb85f7 0, #fe9f69 100%);
  color: #fff;
  line-height: 0.48rem;
  text-align: center;
  height: 0.48rem;
  border-radius: 0.03rem 0 0 0.03rem;
  float: left;
}
</style>
