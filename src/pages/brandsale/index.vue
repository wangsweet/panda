<template>
  <div class="brand-body">
    <div class="brand-header">
      <v-touch class="iconfont" @tap="back()">&#xe608;</v-touch>
      <p>品牌蓄力</p>
      <span></span>
    </div>

    <div class="brand-list">
      <ul>
        <v-touch v-for="(item, index) in list" :key="index" tag="li" @tap="handleae(item.typeId)">{{ item.title }}</v-touch>
      </ul>
    </div>
    <div class="brand-ex">
      <h3>品牌「尖」货</h3>
      <p>大牌好货，历史低价团</p>
    </div>
    <div class="brand-center">
      <div v-for="(item, index) in product" :key="index">
        <div class="brand-top">
          <img :src="item.brandLogo" alt="" />
          <div>
            <p>{{ item.brandName }}</p>
            <p>{{item.brandLabelOne.val}}|{{item.brandLabelTwo.val}}</p>
          </div>
          <span>已售{{(Number(item.recentSale)/10000).toFixed(1)}}万件</span>
        </div>
        <div class="brand-bottom">
          <div v-for="(child,ind) in item.hotPush" :key="ind">
            <img :src="child.pic" alt="">
            <p><span>￥{{child.jiage}}</span><span>￥{{child.yuanjia}}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { brandList, brandProductList } from "@api/brandsale";
export default {
  name: "brandSale",
  data() {
    return {
      list: [],
      product: []
    };
  },
  created() {
    if (sessionStorage.getItem("brandList")) {
      this.list = JSON.parse(sessionStorage.getItem("brandList"));
    } else {
      this.getBrandList();
    }
    if (sessionStorage.getItem("brandProductList")) {
      this.list = JSON.parse(sessionStorage.getItem("brandProductList"));
    } else {
      this.getbrandProductList(3);
    }
  },
  methods: {
    async getBrandList() {
      let data = await brandList();
      this.list = data.data;
      sessionStorage.setItem("brandList", JSON.stringify(this.list));
    },
    async getbrandProductList(i) {
      let data = await brandProductList(i);
      this.product = data.data.splice(0, 3);
      sessionStorage.setItem(
        "brandProductList" + i,
        JSON.stringify(this.product)
      );
    },
    back() {
      this.$router.back();
    },
    handleae(index){
      this.getbrandProductList(index)
    }
  }
};
</script>

<style>
.brand-body {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  background: url("https://img.alicdn.com/imgextra/i2/2053469401/O1CN01KPhXYD2JJhz1RXZHW_!!2053469401.png")
    no-repeat;
  background-size: 100%;
  background-color: #eee;
  color: #fff;
  height: 100%;
}

html {
  font-size: 31.25vw;
}

.brand-header {
  height: 0.34rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.1rem;
}

.brand-list {
  overflow: scroll;
  height: 0.4rem;
  color: #ddd;
}
.brand-list ul {
  display: flex;
  justify-content: space-around;
  font-size: 0.12rem;
  padding: 0.05rem;
  flex-wrap: nowrap;
  width: 300%;
}
.brand-list ul li {
  display: flex;
  flex-wrap: nowrap;
}

.brand-ex {
  text-align: center;
}

.brand-ex h3 {
  font-weight: bold;
}

.brand-ex p {
  font-size: 0.1rem;
}

.brand-center {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  width: 94%;
  margin-left: 3%;
  overflow: scroll;
  margin-bottom: .4rem;
}

.brand-center div div:nth-of-type(1) span span {
  background-color: #f44;
  border-radius: 4px;
  padding: 0 6px 0 2px;
  color: #fff;
  font-size: 0.1rem;
  margin-left: 0.1rem;
}
.brand-center > div{
  margin-bottom: .1rem
}
.brand-top {
  display: flex;
  flex-direction: row;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #000;
  font-size: 0.12rem;
  height: 0.8rem;
  justify-content: space-between;
  align-items: center;
}

.brand-top img {
  width: 0.4rem;
  height: 0.4rem;
  margin:0 .1rem
}

.brand-top p:first-of-type{
  font-size: .14rem;
  margin-bottom: .1rem
}
.brand-top p:nth-of-type(2){
  font-size: .1rem;
  color: #f44;
}
.brand-top>span{
  font-size: .1rem;
  color: #999;
  margin-right: .1rem;
}

.brand-bottom{
  display: flex;
  justify-content: space-around;
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-bottom: .1rem
}

.brand-bottom img{
  width: .9rem;
  height: 0.9rem;
}
.brand-bottom p span:first-of-type{
  font-size: .14rem;
  color: #f44;
}
.brand-bottom p span:last-of-type{
  font-size: .1rem;
  color:#999;
  margin-left: .1rem;
  text-decoration: line-through;
}
</style>