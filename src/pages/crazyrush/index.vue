<template>
  <div class="crazy-body">
    <div class="crazy-header">
      <v-touch class="iconfont" @tap="back()">&#xe608;</v-touch>
      <p>实时疯抢榜</p>
      <span></span>
    </div>
    <div class="crazy-nav">
      <ul>
        <v-touch
          v-for="(item, index) in list"
          :key="index"
          @tap="getcrazyProducts(index)"
          tag="li"
        >
          {{ item.title }}
        </v-touch>
      </ul>
    </div>
    <div class="crazy-tip"></div>
    <div class="crazy-article">
      <div v-for="(item, index) in product" :key="index">
        <div class="crazy-big">
          <img :src="item.pic" alt="" />
          <div class="crazy-small">
            <h4>{{ item.dtitle }}</h4>
            <p>
              近2小时预定<span>{{ item.salesNum }}</span
              >件
            </p>
            <p>预售价: ¥{{ item.yuanjia }}</p>
            <h3>
              到手价 ¥<span>{{ item.jiage }}</span
              ><span>立即抢</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { crazyList, crazyProduct } from "@api/crazyrush";
export default {
  name: "crazyRush",
  data() {
    return {
      list: [],
      product: []
    };
  },
  created() {
    if (sessionStorage.getItem("crazyList")) {
      this.list = JSON.parse(sessionStorage.getItem("crazyList"));
    } else {
      this.getcrazyList();
    }
    if (sessionStorage.getItem("crazyProduct")) {
      this.product = JSON.parse(sessionStorage.getItem("crazyProduct"));
    } else {
      this.getcrazyProduct(0);
    }
  },
  methods: {
    async getcrazyList() {
      let data = await crazyList();
      this.list = data.data;
      sessionStorage.setItem("crazyList", JSON.stringify(this.list));
    },
    async getcrazyProduct(i) {
      let data = await crazyProduct(i);
      this.product = data.data.splice(0, 5);
      sessionStorage.setItem("crazyProduct" + i, JSON.stringify(this.product));
    },
    getcrazyProducts(index) {
      switch (index) {
        case 0:
          index = 4;
          break;
        case 1:
          index = 6;
          break;
        case 4:
          index = 1;
          break;
        case 4:
          index = 1;
          break;
        case 4:
          index = 1;
          break;
        case 5:
          index = 8;
          break;
        case 6:
          index = 7;
          break;
        case 7:
          index = 10;
          break;
        case 8:
          index = 14;
          break;
        case 9:
          index = 5;
          break;
        case 10:
          index = 9;
          break;
        case 11:
          index = 12;
          break;
        case 12:
          index = 13;
          break;
        case 13:
          index = 11;
          break;
      }
      if (sessionStorage.getItem("crazyProduct" + index)) {
        this.product = JSON.parse(
          sessionStorage.getItem("crazyProduct" + index)
        );
      } else {
        this.getcrazyProduct(index);
      }
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style>
.crazy-body {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  height: 100%;
}

.crazy-html {
  font-size: 31.25vw;
}

.crazy-header {
  height: 0.4rem;
  background: linear-gradient(to left, #cc32ff 0, #ff38ce 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif, "Microsoft YaHei";
  border-bottom: 1px solid #fff;
  padding-left: 0.1rem;
}
.crazy-nav {
  overflow: scroll;
  height: 0.4rem;
  color: #fff;
  background: linear-gradient(to left, #cc32ff 0, #ff38ce 100%);
}
.crazy-nav ul {
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
  flex-wrap: nowrap;
  width: 300%;
  height: .4rem;
  line-height: .4rem
}
.crazy-nav ul li {
  display: flex;
  flex-wrap: nowrap;
  margin-left: .2rem
}

.crazy-tip {
  background: #ffebe1;
  height: 0.3rem;
}

.crazy-article {
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
  width: 100%;
}

.crazy-big {
  background: #fff;
  width: 100%;
  margin-bottom: 0.1rem;
  padding: 0.1rem 0;
  display: flex;
  flex-direction: row;
  height: 1.2rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}

.crazy-big img {
  width: 1rem;
  height: 1rem;
  margin-right: 0.1rem;
}

.crazy-small h4 {
  font-size: 0.12rem;
  font-weight: normal;
  margin-bottom: 0.1rem;
  width: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.crazy-small p:first-of-type {
  font-size: 0.12rem;
  color: #999;
}
.crazy-small p:first-of-type span {
  color: #ff2b22;
  padding: 0 0.03rem;
}
.crazy-small p:last-of-type {
  font-size: 0.1rem;
  color: #ff2b22;
  margin-top: 0.05rem;
  color: #999;
}

.crazy-small h5 {
  font-weight: normal;
  font-size: 0.1rem;
  color: #999;
  padding-left: 1.2rem;
}

.crazy-small h3 {
  color: #ff2b22;
  font-size: 0.1rem;
  margin-top: 0.1rem;
  font-weight: normal;
}
.crazy-small h3 span {
  font-size: 0.14rem;
}

.crazy-small h3 span:last-of-type {
  background: linear-gradient(
    90deg,
    rgba(255, 56, 206, 1) 0%,
    rgba(204, 50, 255, 1) 100%
  );
  color: #fff;
  position: absolute;
  right: 0.1rem;
  font-weight: normal;
  border-radius: 100px;
  padding: 0.03rem 0.1rem;
  line-height: 0.23rem;
  font-size: 0.12rem;
}
</style>