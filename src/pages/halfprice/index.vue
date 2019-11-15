<template>
  <div class="half-body">
    <div class="half-header">
      <v-touch class="iconfont" @tap="back">&#xe608; </v-touch>
      <img
        src="https://cmsstatic.ffquan.cn//wap_new/ranking/images/halfday_title.svg?v=201911071728"
        alt=""
      />
      <span>...</span>
    </div>
    <div class="half-nav">
      <ul>
        <v-touch
          v-for="(item, index) in timeList"
          :key="index"
          :class="item.status == '正在抢购' ? 'act' : ''"
          tag="li"
          @tap="handleClick(item)"
        >
          <p>{{ item.time }}</p>
          <p>{{ item.status }}</p>
        </v-touch>
      </ul>
    </div>
    <div class="half-article">
      <div class="half-pic">
        <img
          src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01bxRFEY2JJhz5KNm0P_!!2053469401.png?v=752320"
          alt=""
        />
      </div>
      <div>
        <div class="half-big" v-for="(item, index) in productList" :key="index">
          <img :src="item.picUrl" alt="" />
          <div class="half-small">
            <h4>{{ item.name }}</h4>
            <span :class="status == '即将开始' ? 'mark' : ''">{{
              item.preferential
            }}</span>
            <p :class="status == '即将开始' ? 'markp' : ''">
              {{ item.yijuhua }}
            </p>
            <h5 :class="status == '即将开始' ? 'markh5' : ''">
              已购{{ item.itemSoldNum }}件
            </h5>
            <h3 :class="status == '即将开始' ? 'markh3' : ''">
              ￥{{ item.price }}
            </h3>
            <a href="" :class="status == '即将开始' ? 'first' : ''" v-if="status == '即将开始'">即将开始</a>
            <a href="" :class="status !== '即将开始' ? 'last' : ''" v-if="status !== '即将开始'">go></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { halfList, halfProduct } from "@api/halfprice";
export default {
  name: "halfPrice",
  data() {
    return {
      timeList: [],
      productList: [],
      status: ""
    };
  },
  created() {
    this.halfTimeList();
    this.halfProductList();
  },
  methods: {
    async halfTimeList() {
      let data = await halfList();
      this.timeList = data.data;
      for (let i = 0; i < this.timeList.length; i++) {
        this.timeList[i].time += ":00";
        if (this.timeList[i].status == "before") {
          this.timeList[i].status = "已开抢";
        } else if (this.timeList[i].status == "after") {
          this.timeList[i].status = "即将开始";
        } else {
          this.timeList[i].status = "正在抢购";
        }
      }
    },
    async halfProductList(i) {
      let data = await halfProduct(i);
      this.productList = data.data.list;
      sessionStorage.setItem(
        "halfProductList" + i,
        JSON.stringify(this.productList)
      );
    },
    handleClick(item) {
      let i = item.time.split(":")[0];
      this.status = item.status;
      if (sessionStorage.getItem("halfProductList" + i)) {
        this.productList = JSON.parse(
          sessionStorage.getItem("halfProductList" + i)
        );
      } else {
        this.halfProductList(i);
      }
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style>
.mark {
  color: #2ac064 !important;
  border: 1px solid #2ac064 !important;
  background: #effff5 !important;
}
.markp {
  color: #2ac064 !important;
  margin-bottom: 0.1rem;
}
.markh3 {
  color: #2ac064 !important;
}
.markh5 {
  display: none;
}

.first {
  padding: 0 10px;
  border-radius: 3px;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  background: #2ac064;
  color: #fff;
  border: 1px solid #2ac064;
  margin-left: 1.2rem;
  position: relative;
  bottom: .22rem;
}

.last {
  padding: 0 10px;
  border-radius: 3px;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  background: #ff2b22;
  color: #fff;
  border: 1px solid #ff2b22;
  margin-left: 1.3rem;
  position: relative;
  bottom: .22rem;
}


.half-body {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  background-color: #eee;
  height: 100%;
}

.half-header {
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  color: #fff;
  justify-content: space-between;
  display: flex;
  height: 0.4rem;
  align-items: center;
  padding: 0 0.1rem;
}

.half-header span {
  display: flex;
  justify-content: center;
  line-height: 100%;
}

.half-nav {
  display: flex;
  flex-wrap: nowrap;
  color: #fff;
  overflow: scroll;
}
.half-nav::-webkit-scrollbar {
  display: none;
}
.half-nav ul {
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  font-size: 0.12rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250%;
}

.half-nav ul li {
  margin: 0.05rem 0.17rem;
  width: 0.5rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
}

.half-nav ul li p:last-of-type {
  font-size: 0.1rem;
}
.half-pic img {
  width: 100%;
  margin-bottom: 0.1rem;
}

.half-article {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  margin-top: 0.8rem;
  overflow: scroll;
  margin-bottom: 0.5rem;
}
.half-big {
  background: #fff;
  width: 100%;
  margin-bottom: 0.1rem;
  padding: 0.1rem 0;
  display: flex;
  flex-direction: row;
  height: 1.35rem;
  box-sizing: border-box;
}
.act {
  color: #fff !important;
  font-size: .16rem !important;
}
.half-big img {
  width: 1.16rem;
  height: 1.16rem;
  margin-right: 0.1rem;
}

.half-small h4 {
  font-size: 0.12rem;
  font-weight: normal;
}

.half-small span:first-of-type {
  background: #ffeceb;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid #ffa5a1;
  color: #ff2b22;
  padding: 0 5px;
  font-size: 0.1rem;
  margin: 0.1rem 0;
}

.half-small p {
  font-size: 0.1rem;
  color: #ff2b22;
}

.half-small h5 {
  font-weight: normal;
  font-size: 0.1rem;
  color: #999;
  padding-left: 1.2rem;
}

.half-small h3 {
  color: #ff2b22;
}

.half-small img {
  width: 0.5rem;
  margin: 0;
  height: 0.2rem;
  margin-left: 1.2rem;
}
</style>