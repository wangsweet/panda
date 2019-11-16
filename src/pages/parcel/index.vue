<template>
  <div class="parcel-body">
    <div class="parcel-header">
      <v-touch class="iconfont" @tap="back()">&#xe608;</v-touch>
      <img
        src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_title.svg?v=201911081848"
        alt=""
      />
      <span>...</span>
    </div>
    <div class="parcel-center">
      <div class="parcel-pic">
        <div class="parcel-pic-left">
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01UZfhB42JJhz1pOtjS_!!2053469401.jpg"
            alt=""
            @click="push('9块9每日精选', 2)"
          />
          <p>9块9每日精选</p>
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN015NqWTV2JJhz0EHSWK_!!2053469401.jpg"
            alt=""
            @click="push('19.9元专区', 23)"
          />
          <p>19.9元专区</p>
        </div>

        <div class="parcel-pic-right">
          <img
            src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01NeHdLt2JJhz7C6WVE_!!2053469401.png"
            alt=""
            @click="push('3.9元专区', 9)"
          />
          <p>3.9元区</p>
          <img
            src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01S4Q95E2JJhz0U2gF3_!!2053469401.png"
            alt=""
            @click="push('5.9元专区', 16)"
          />
          <p>5.9元区</p>

          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01K4Ru8t2JJhyx5uckX_!!2053469401.png"
            alt=""
            @click="push('8.9元专区', 30)"
          />
          <p>8.9元区</p>

          <img
            src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01RMjV3I2JJhyzg9WUt_!!2053469401.jpg"
            alt=""
            @click="push('新品元区', 37)"
          />
          <p>新品元区</p>
        </div>
      </div>
      <div class="parcel-nav">
        <ul>
          <li
            v-for="(item, index) in list"
            :key="index"
            @click="pushNew(index, item.num)"
            :class="idn == index ? 'activess' : ''"
          >
            {{ item.name }}
          </li>
        </ul>
        <!-- <van-tabs>
          <van-tab  :title="'标签 ' + index" v-for="(item, index) in list"
            :key="index"
            @click="pushNew(index, item.num)">
            内容 {{ item.name}}
          </van-tab>
        </van-tabs> -->
      </div>
      <div class="parcel-aside">
        精选推荐
      </div>
      <div class="parcel-article">
        <div>
          <div
            class="parcel-big"
            v-for="(item, index) in parcelList"
            :key="index"
          >
            <img :src="item.pic" alt="" />
            <p>{{ item.d_title }}</p>
            <h2>
              券后<span>￥{{ item.jiage }}</span>
            </h2>
            <h3>
              <span v-if="item.label[0]">{{ item.label[0].title }}</span
              ><span>券3元</span>
            </h3>
            <h4>
              已售{{ (Number(item.xiaoliang) / 10000).toFixed(1) }}万|评论{{
                item.comment
              }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parcelList } from "@api/parcel";
export default {
  name: "parcel",
  data() {
    return {
      list: [
        { name: "居家百货", num: 65 },
        { name: "美食", num: 296 },
        { name: "服装", num: 597 },
        { name: "配饰", num: 604 },
        { name: "美妆", num: 611 },
        { name: "内衣", num: 618 },
        { name: "母婴", num: 625 },
        { name: "箱包", num: 8703 },
        { name: "数码配件", num: 632 },
        { name: "文娱车品", num: 639 }
      ],
      parcelList: [],
      idn: 0
    };
  },
  created() {
    if (sessionStorage.getItem("parcelList")) {
      this.labels = JSON.parse(sessionStorage.getItem("parcelList"));
    } else {
      this.getParcelList(58);
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    async getParcelList(i) {
      let data = await parcelList(i);
      this.parcelList = data.data.data;
      sessionStorage.setItem("parceList" + i, JSON.stringify(this.parcelList));
    },
    pushNew(index, num) {
      this.idn = index;
      if (sessionStorage.getItem("parceList" + num)) {
        this.parcelList = JSON.parse(sessionStorage.getItem("parceList" + num));
      } else {
        this.getParcelList(num);
      }
    },
    push(title, id) {
      this.$router.push("/selects/" + title + "/" + id);
    }
  }
};
</script>

<style>
.activess {
  border-bottom: 2px solid #ff2b22;
  color: #ff2b22;
  font-weight: bold;
}
.parcel-body {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  background: #eee;
  height: 100%;
}

.parcel-header {
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.4rem;
  color: #fff;
  padding: 0 0.1rem;
}
.parcel-center {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  margin-top: 0.4rem;
  overflow: scroll;
  margin-bottom: 0.5rem;
  width: 100%;
}
.parcel-pic {
  display: flex;
  flex-direction: row;
  height: 3.4rem;
  position: relative;
}
.parcel-pic-left p:first-of-type {
  position: absolute;
  color: #fc4073;
  font-size: 0.12rem;
  left: 0.1rem;
  top: 0.1rem;
}
.parcel-pic-left p:nth-of-type(2) {
  position: absolute;
  color: rgb(253, 87, 92);
  font-size: 0.12rem;
  left: 0.1rem;
  top: 0.9rem;
}
.parcel-pic-right p:nth-of-type(1) {
  position: absolute;
  color: #1889ff;
  font-size: 0.12rem;
  left: 1.7rem;
  top: 0.1rem;
}
.parcel-pic-right p:nth-of-type(2) {
  position: absolute;
  color: rgb(114, 11, 252);
  font-size: 0.12rem;
  left: 2.5rem;
  top: 0.1rem;
}
.parcel-pic-right p:nth-of-type(3) {
  position: absolute;
  color: #07c6b3;
  font-size: 0.12rem;
  left: 1.7rem;
  top: 0.9rem;
}
.parcel-pic-right p:nth-of-type(4) {
  position: absolute;
  color: #ff3e90;
  font-size: 0.12rem;
  left: 2.5rem;
  top: 0.9rem;
}
.parcel-pic div:first-of-type img {
  width: 100%;
}
.parcel-pic div:last-of-type img {
  width: 50%;
  float: left;
}

.parcel-nav {
  display: flex;
  flex-wrap: nowrap;
  height: 0.8rem;
  margin-bottom: 0.05rem;
  overflow: scroll;
}
.parcel-nav::-webkit-scrollbar {
  display: none;
}

.parcel-nav ul {
  background: #fff;
  font-size: 0.12rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.parcel-nav li {
  margin: 0.05rem 0.17rem;
  width: 0.5rem;
  justify-content: center;
  height: 100%;
  display: flex;
  align-items: center;
}

.parcel-aside {
  height: 0.8rem;
  color: #c043fc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.14rem;
  background: #fff;
}

.parcel-big {
  width: 48%;
  background: #fff;
  margin: 1%;
  height: 2.5rem;
}

.parcel-big img {
  width: 100%;
  height: 65%;
}

.parcel-article {
  display: flex;
  height: 100%;
  width: 100%;
}

.parcel-article > div {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.parcel-big p {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.11rem;
  margin: 0.05rem 0;
  padding: 0 0.05rem;
}
.parcel-big h2 {
  font-size: 0.1rem;
  padding: 0 0.05rem;
  font-weight: normal;
  margin-bottom: 0.05rem;
}

.parcel-big h2 span {
  color: #ff2b22;
  font-size: 0.16rem;
}

.parcel-big h3 {
  font-size: 0.1rem;
  padding: 0 0.05rem;
  font-weight: normal;
  margin-bottom: 0.05rem;
}

.parcel-big h3 span {
  border-color: #f57223;
  color: #f57223;
  border: 1px solid #f57223;
  padding: 0 0.01rem;
  font-size: 0.08rem;
  margin-right: 0.1rem;
}

.parcel-big h4 {
  font-size: 0.08rem;
  padding: 0 0.05rem;
  font-weight: normal;
  color: #999;
}
</style>