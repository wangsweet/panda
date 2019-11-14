<template>
  <div class="index">
    <div>
      <div class="home-header">
        <input type="text" />
        <div>
          <p>消息</p>
        </div>
      </div>
      <div class="home-nav">
        <ul>
          <router-link
            v-for="(item, index) in labels"
            :key="index"
            tag="li"
            to="/mine"
            >{{ item.name }}</router-link
          >
        </ul>
      </div>
    </div>
    <div class="home-big">
      <div class="home-pic">
        <img
          src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01k4JT7K2JJhz3c7Ykp_!!2053469401.jpg"
          alt=""
        />
      </div>
      <div class="home-aside">
        <img
          src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01q8cs0b2JJhz6ibMRm_!!2053469401.gif"
          alt=""
        />
      </div>
      <div class="home-article">
        <img
          src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01qBpdPc2JJhz9qcaoo_!!2053469401.png"
          alt=""
        />
        <img
          src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01TE1jtB2JJhzCwcHO3_!!2053469401.jpg"
          alt=""
        />
      </div>
      <div>
        <div class="home-center">
          <ul>
            <li>
              <img
                src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01kl9Ojp2JJhz8zXBs1_!!2053469401.gif"
                alt=""
              />
              <p>品牌狂欢</p>
            </li>
            <li>
              <img
                src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01mokNrf2JJhz8Wya6N_!!2053469401.png"
                alt=""
              />
              <p>每日半价</p>
            </li>
            <li>
              <img
                src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01M1Ih4f2JJhz6r143L_!!2053469401.gif"
                alt=""
              />
              <p>疯抢榜</p>
            </li>
            <li>
              <img
                src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01DtxH6Q2JJhzAYPz8y_!!2053469401.png"
                alt=""
              />
              <p>9.9包邮</p>
            </li>
            <li>
              <img
                src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Mbuo6R2JJhz0xpzJv_!!2053469401.png"
                alt=""
              />
              <p>优惠日历</p>
            </li>
            <li>
              <img
                src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Mbuo6R2JJhz0xpzJv_!!2053469401.png"
                alt=""
              />
              <p>优惠日历</p>
            </li>
          </ul>
        </div>
        <div class="home-cheap">
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN011wdOkj2JJhy7TkPFo_!!2053469401.png"
            alt=""
          />
          <p>满400减50,中老年人助眠好帮手！</p>
        </div>
      </div>

      <div class="home-aside">
        <img
          :src="img.address?img.address:''"
          alt=""
        />
      </div>
      <div class="home-article">
        <img
          v-for="(item,index) in imgs"
          :key="index"
          :src="item.address"
          alt=""
        />
      </div>
      <div>
        <div class="home-sell">
          <p>
            <span>品牌特卖</span><span>520+品牌</span><span>更多品牌></span>
          </p>
          <div class="home-main">
            <img
              v-for="(item,index) in pics"
              :key="index"
              :src="item.address"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="home-hh">
        <p>发现好货</p>
      </div>
      <div class="home-product">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <img
              :src="item.pic"
              alt=""
            />
            <p>{{item.dtitle}}</p>
            <span v-for="(child,ind) in item.fashionTag.split(',')" :key="ind">{{child}}</span>
            <p>券后￥<span></span></p>
            <p><span>活动价￥<span></span></span><span>已抢<span></span></span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {homeList,brandPic,brandImg,shopList} from "@api/homepage"
export default {
  name: "homePage",
  data() {
    return {
      labels: [],
      pics:[],
      img:[],
      imgs:[],
      list:[]
    };
  },
  created(){
    this.getHomeList();
    this.getBrandPic();
    this.getBrandImg();
    this.getShopList();
  },
  methods:{
    async getHomeList(){
      let data=await homeList();
      this.labels=data.data
    },
    async getBrandPic(){
      let data=await brandPic();
      this.pics=data.data.config;
    },
    async getBrandImg(){
      let data=await brandImg();
      this.img=data.data.config[0];
      this.imgs=data.data.config.splice(1,4)
    },
    async getShopList(){
      let data=await shopList();
      this.list=data.data.list;
      console.log(this.list)
    }
  }
};
</script>

<style>

.index {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  background: #a60300;
  height: 100%;
}

.home-header {
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  font-size: 0.1rem;
  color: #fff;
}

.home-header input {
  width: 90%;
  border-radius: 20px;
  background: #fff;
  height: 0.25rem;
}
.home-nav{
  overflow: scroll;
}
.home-nav ul {
  display: flex;
  justify-content: space-around;
  font-size: 0.12rem;
  color: #fff;
  padding: 0.05rem;
  flex-wrap: nowrap;
  width: 200%
}
.home-nav ul li {
  display: flex;
  flex-wrap: nowrap;
}
.home-big {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  margin-top: 0.7rem;
  overflow: scroll;
  margin-bottom: 0.5rem;
}

.home-pic img {
  width: 94%;
  margin-left: 3%;
}

.home-aside img {
  width: 94%;
  margin-left: 3%;
}

.home-aside {
  margin: 0.05rem 0;
}

.home-article img {
  width: 46%;
  margin-left: 3%;
  margin-bottom: .03rem
}
.home-article img:nth-of-type(2n){
  margin-left: 2%
}

.home-center ul {
  display: flex;
  width: 94%;
  margin-left: 3%;
  background-color: #fff;
  height: 0.7rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 0.1rem;
  border-bottom: 1px solid #ddd;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.home-center ul img {
  width: 0.35rem;
}

.home-center ul p {
  font-size: 0.1rem;
}

.home-cheap {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  width: 94%;
  margin-left: 3%;
  font-size: 0.1rem;
  align-items: center;
  height: 0.3rem;
}

.home-cheap img {
  height: 0.12rem;
}

.home-sell {
  width: 94%;
  background: #fff;
  margin-left: 3%;
  height: 2.5rem;
  display: flex;
  margin-top: 0.05rem;
  flex-direction: column;
}

.home-sell p {
  font-size: 0.12rem;
  margin: 0.1rem 0.1rem;
  display: flex;
  justify-content: space-between;
  height: 0.16rem;
  width: 90%;
}

.home-sell p span:nth-of-type(2) {
  background: linear-gradient(168deg, #4d4d4d 0, #202020 100%);
  color: #ffb91d;
  font-size: 0.1rem;
  padding: 0.01rem 0.03rem;
  display: block;
  text-align: center;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-right: 1rem;
}

.home-sell p span:nth-of-type(3) {
  font-size: 0.1rem;
}

.home-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.home-main img {
  width: 22%;
  height: 1rem;
}

.home-hh {
  font-size: 0.12rem;
  color: #fff;
  text-align: center;
  margin-top: 0.1rem;
}

.home-product ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 1.5%;
  font-size: 0.1rem;
}

.home-product ul li {
  width: 47%;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0.1rem;
  height: 2.5rem;
}

.home-product img {
  width: 100%;
}

.home-product p {
  padding: 0 0.1rem;
  margin-bottom: 0.05rem;
}

.home-product li > span:nth-of-type(1) {
  border: 0;
  background: linear-gradient(90deg, #ff8873 0, #ff4f4f 100%);
  color: #fff;
  border-radius: 0.03rem;
  margin-left: 0.1rem;
  font-size: 0.09rem;
  padding: 0 0.03rem;
}

.home-product li > span:nth-of-type(2) {
  border-radius: 0.03rem;
  border: 0.01rem solid #ff9793;
  font-size: 0.1rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #ff3b32;
  font-size: 0.09rem;
  padding: 0 0.05rem;
}

.home-product li > span:nth-of-type(3) {
  border-radius: 0.03rem;
  border: 0.01rem solid #ff9793;
  font-size: 0.1rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #ff3b32;
  font-size: 0.09rem;
  padding: 0 0.05rem;
}

.home-product li > span:nth-of-type(4) {
  margin-left: 0.1rem;
  margin-right: 0.4rem;
  color: #999;
}

.home-product li > span:nth-of-type(5) {
  color: #999;
}

.home-product li > p:nth-of-type(2) {
  margin-top: 0.05rem;
  color: #ff3b32;
}

.home-product li > p:nth-of-type(2) span {
  font-size: 0.14rem;
}
</style>