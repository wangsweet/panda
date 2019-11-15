<template>
  <div>
    <Beautyhd></Beautyhd>
    <section>
      <div class="ov"></div>
      <div class="beauty-box">
        <div class="tag">
          <ul>
            <li>
              <a href="http://localhost:8080">精选</a>
            </li>
            <li
              v-for="(item,index) in beauty"
              :key="index"
              :class="activeIndex==index?'active':''"
              @click="handleclick(index)"
            >
              <a href="http://localhost:8080/#/beauty">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <keep-alive>
          <router-view :searchVal="searchVal"></router-view>
        </keep-alive>
        <div class="beauty-order">
          <ul>
            <li>人气</li>
            <li>最新</li>
            <li>销量</li>
            <li>价格</li>
          </ul>
        </div>
        <div class="beauty-products">
          <router-link tag="li" :to="{name:'detail',query:{index:index,id:item.id,goodsid:item.goodsid,cid:cid,cateid:item.category_id}}" class="row-s" v-for="(item,index) in beautyorderlist" :key="index">
            <img
              ui-lazyload
              :src="item.pic"
              alt
              style="background: rgb(245, 245, 245); display: block;"
            />
            <div class="cent">
              <h3 class="product_title">
                <span class="labelTop">天猫</span>
                <span class="title_text">{{item.d_title}}</span>
              </h3>
              <div class="product_info">
                <div class="price">
                  <span>券后&nbsp;</span>
                  <span class="RMB">¥</span>
                  <span class="price_num">{{Number(item.yuanjia-item.quan_jine).toFixed(0)}}</span>
                </div>
                <div class="label_box">
                  <span style="display:inline;">
                    <span class="juan">
                      <span>劵</span>
                      {{item.quan_jine}}元
                    </span>
                  </span>
                </div>
                <div class="salse">
                  <span>已售{{item.xiaoliang>10000?((item.xiaoliang)/10000).toFixed(1)+'万':item.xiaoliang}}</span>
                  <span>评论{{item.comment>10000?((item.comment)/10000).toFixed(1)+'万':item.comment}}</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Beautyhd from "@components/beautyhd";
import Beautyorder from "@components/beautyorder";
import { beautyApi, beautyorderApi } from "@api/beauty";
export default {
  name: "Beauty",
  components: {
    Beautyhd,
    Beautyorder
  },
  data() {
    return {
      beauty: [],
      activeIndex: 0,
      searchVal: 0,
      beautyorderlist: [],
      cid: 3
    };
  },
  async created() {
    let data = await beautyApi();
    // console.log(data)
    this.beauty = data.data;
    // console.log(this.beauty);
    sessionStorage.setItem("beauty", JSON.stringify(this.beauty));
    this.handlebeautyorder(this.cid);
  },
  methods: {
    async handlebeautyorder(cid) {
      let beautydata = await beautyorderApi(cid);
      this.beautyorderlist = beautydata.data.content;
      // console.log(this.beautyorderlist);
       sessionStorage.setItem(
        "beautyorderlist"+cid,
        JSON.stringify(this.beautyorderlist)
      );
    },
    async handleclick(index) {
      this.activeIndex = index;
      this.searchVal = index;
      switch (index) {
        case 0:
          this.cid = 3;
          break;
        case 1:
          this.cid = 6;
          break;
        case 2:
          this.cid = 1;
          break;
        case 3:
          this.cid = 4;
          break;
        case 4:
          this.cid = 9;
          break;
        case 5:
          this.cid = 5;
          break;
        case 6:
          this.cid = 8;
          break;
        case 7:
          this.cid = 2;
          break;
        case 8:
          this.cid = 7;
          break;
        case 9:
          this.cid = 10;
          break;
        case 10:
          this.cid = 11;
          break;
        case 11:
          this.cid = 12;
          break;
        case 12:
          this.cid = 14;
          break;
        case 13:
          this.cid = 13;
          break;
      }
      if(sessionStorage.getItem("beautyorderlist"+this.cid)){
        this.beautyorderlist=JSON.parse(sessionStorage.getItem("beautyorderlist"+this.cid));
      }else{
        this.handlebeautyorder(this.cid);
      }
    }
  }
};
</script>
<style>
body {
  background: #faf5f6;
}
.tag {
  height: 0.44rem;
  background: #fff;
  overflow: scroll;
  display: flex;
  flex-wrap: nowrap;
}

.tag ul {
  display: flex;
  /* flex-wrap: nowrap; */
  flex-direction: row;
}

.tag ul li a {
  list-style: none;
  float: left;
  padding: 0 0.03rem;
  font-size: 0.14rem;
  text-align: center;
  height: 0.38rem;
  line-height: 0.4rem;
  border-bottom: solid 0.02rem transparent;
  color: rgb(0, 0, 0);
  width: 0.6rem;
  font-weight: 500;
}
.active {
  color: #fc3f78 !important;
  border-bottom: 2px solid #c33;
}

.ov {
  height: 0.44rem;
  width: 100%;
}

.ov_h {
  overflow: hidden;
  height: 0;
  clear: both;
}

.cat-item {
  width: 25%;
  float: left;
  text-align: center;
  padding-top: 10px;
  background: #fff;
}

.cat-item > img {
  width: 60%;
  margin: auto;
}

.cat-item > span {
  color: #333;
  font-size: 0.12rem;
  display: block;
  line-height: 0.3rem;
}

.beauty-order {
  margin-bottom: 0.07rem;
  margin-top: 0.07rem;
  background: #fff;
  height: 0.4rem;
}

.beauty-order > ul > li {
  height: 0.4rem;
  line-height: 0.4rem;
  box-sizing: border-box;
  float: left;
  width: 25%;
  text-align: center;
  font-size: 0.12rem;
  color: #333;
  background: #fff;
}
.row-s {
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  height: 1.2rem;
}

.row-s > img {
  width: 1.12rem;
  height: 1.12rem;
  float: left;
}

.labelTop {
  min-width: 0.23rem;
  height: 0.13rem;
  background-color: #fe0036;
  border-radius: 0.02rem;
  display: inline-block;
  margin-right: 0.03rem;
  top: 0.02rem;
  color: #fff;
  line-height: 0.13rem;
  font-size: 0.1rem;
  text-align: center;
  font-weight: 400;
}

.title_text {
  font-size: 0.14rem;
  font-weight: 400;
  color: #333;
}

.price {
  font-size: 0.1rem;
  font-weight: 400;
  color: #666;
  margin-bottom: 0.02rem;
  display: flex;
  align-items: baseline;
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
section {
  overflow: scroll;
  width: 100%;
}
.beauty-box {
  height: 5rem;
  overflow-y: scroll;
}
</style>