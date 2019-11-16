<template>
  <div class="index">
    <div>
      <div class="home-header">
        <router-link class="iconfont" id="input" to="/search"
          ><span>&#xe652;</span>输入商品名或粘贴宝贝标题搜索</router-link
        >
        <div>
          <router-link tag="p" :to="{ name: 'message' }"
            ><i class="iconfont">&#xe600;</i></router-link
          >
        </div>
      </div>
      <div class="home-nav">
        <ul>
          <router-link
            v-for="(item, index) in labels"
            :key="index"
            tag="li"
            :to="{ name: 'beautyorder', query: {el: item.name,index:index} }"
            >{{ item.name }}</router-link
          >
        </ul>
      </div>
    </div>
    <div class="home-big">
      <div class="home-pic">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in swipe" :key="index"><img :src="item.pic" alt=""></van-swipe-item>
        </van-swipe>
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
            <router-link
              v-for="(item, index) in titles"
              :key="index"
              tag="li"
              :to="item.to"
            >
              <img :src="item.address" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
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
        <img :src="img.address ? img.address : ''" alt="" />
      </div>
      <div class="home-article">
        <img
          v-for="(item, index) in imgs"
          :key="index"
          :src="item.address"
          alt=""
        />
      </div>
      <div>
        <div class="home-sell">
          <p>
            <span>品牌特卖</span><span>520+品牌</span
            ><span @click="jump">更多品牌></span>
          </p>
          <div class="home-main">
            <img
              v-for="(item, index) in pics"
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
          <li v-for="(item, index) in list" :key="index">
            <img :src="item.pic" alt="" />
            <p>{{ item.dtitle }}</p>
            <p class="home-tip">
              <span
                v-for="(child, ind) in item.fashionTag.split(',')"
                :key="ind"
                v-show="child"
                >{{ child }}</span
              >
            </p>
            <p>
              券后￥<span>{{ item.jiage }}</span>
            </p>
            <p class="home-price">
              <span
                >活动价￥<span>{{ item.yuanjia }}</span></span
              ><span
                >已抢<span>{{ item.salesNum }}件</span></span
              >
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  homeList,
  brandPic,
  brandImg,
  shopList,
  titleList,
  swipePic
} from "@api/homepage";
export default {
  name: "homePage",
  data() {
    return {
      labels: [],
      pics: [],
      img: [],
      imgs: [],
      list: [],
      titles: [],
      to: ["/crazyrush", "/parcel", "brandsale", "halfprice", "#"],
      swipe:[]
    };
  },
  created() {
    if (sessionStorage.getItem("homeList")) {
      this.labels = JSON.parse(sessionStorage.getItem("homeList"));
    } else {
      this.getHomeList();
    }
    if (sessionStorage.getItem("brandPic")) {
      this.pics = JSON.parse(sessionStorage.getItem("brandPic"));
    } else {
      this.getBrandPic();
    }
    if (sessionStorage.getItem("brandImg")) {
      this.img = JSON.parse(sessionStorage.getItem("brandImg"));
      this.imgs = JSON.parse(sessionStorage.getItem("brandImgs"));
    } else {
      this.getBrandImg();
    }
    this.getShopList();
    if (sessionStorage.getItem("titleList")) {
      this.titles = JSON.parse(sessionStorage.getItem("titleList"));
    } else {
      this.getTitleList();
    }
    this.getSwipePic()
  },
  methods: {
    async getHomeList() {
      let data = await homeList();
      this.labels = data.data;
      sessionStorage.setItem("homeList", JSON.stringify(this.labels));
    },
    async getBrandPic() {
      let data = await brandPic();
      this.pics = data.data.config;
      sessionStorage.setItem("brandPic", JSON.stringify(this.pics));
    },
    async getBrandImg() {
      let data = await brandImg();
      this.img = data.data.config[0];
      this.imgs = data.data.config.splice(1, 4);
      sessionStorage.setItem("brandImg", JSON.stringify(this.img));
      sessionStorage.setItem("brandImgs", JSON.stringify(this.imgs));
    },
    async getShopList() {
      let data = await shopList();
      this.list = data.data.list;
    },
    async getTitleList() {
      let data = await titleList();
      this.titles = data.data.config.data;
      for (let i = 0; i < this.titles.length; i++) {
        this.titles[i].to = this.to[i];
      }
      sessionStorage.setItem("titleList", JSON.stringify(this.titles));
    },
    async getSwipePic() {
      let data = await swipePic();
      this.swipe = data.data.config;
      sessionStorage.setItem("swipePic", JSON.stringify(this.swipe));
    },
    jump() {
      this.$router.push("/brandsale");
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

#input {
  width: 85%;
  border-radius: 20px;
  background: #fff;
  height: 0.25rem;
  color: #202020;
  font-size: 0.11rem;
  line-height: 0.25rem;
  padding: 0 0.1rem;
  color: #999;
}
#input span {
  font-size: 0.12rem;
  margin-right: 0.1rem;
}
.home-nav {
  overflow: scroll;
  height: 0.28rem;
}
.home-nav::-webkit-scrollbar {
  display: none;
}
.home-nav ul {
  display: flex;
  justify-content: space-around;
  font-size: 0.12rem;
  color: #fff;
  padding: 0.05rem;
  flex-wrap: nowrap;
  width: 250%;
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

.home-pic {
  width: 3rem;
  height: 1.4rem;
  margin-left: 3%;
}

.home-pic img{
  width: 100%;
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
  margin-bottom: 0.03rem;
}
.home-article img:nth-of-type(2n) {
  margin-left: 2%;
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
  margin-bottom: 0.1rem;
}

.home-product p {
  padding: 0 0.1rem;
  margin-bottom: 0.05rem;
  font-size: 0.12rem;
  line-height: 0.16rem;
}

.home-tip span:nth-of-type(1) {
  border: 0;
  background: linear-gradient(90deg, #ff8873 0, #ff4f4f 100%);
  color: #fff;
  border-radius: 0.03rem;
  font-size: 0.09rem;
  padding: 0 0.03rem;
  margin-right: 0.03rem;
}

.home-tip span:nth-of-type(2) {
  border-radius: 0.03rem;
  border: 0.01rem solid #ff9793;
  font-size: 0.1rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #ff3b32;
  font-size: 0.09rem;
  padding: 0 0.05rem;
}

.home-tip span:nth-of-type(3) {
  border-radius: 0.03rem;
  border: 0.01rem solid #ff9793;
  font-size: 0.1rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #ff3b32;
  font-size: 0.09rem;
  padding: 0 0.05rem;
}

.home-price span:nth-of-type(1) {
  margin-right: 0.1rem;
  color: #999;
  font-size: 0.09rem;
}

.home-price span:nth-of-type(2) {
  color: #999;
  font-size: 0.09rem;
}

.home-product li > p:nth-of-type(3) {
  margin-top: 0.05rem;
  color: #ff3b32;
}

.home-product li > p:nth-of-type(3) span {
  font-size: 0.14rem;
  color: #ff3b32;
}
.home-tip {
  height: 0.1rem;
}
</style>