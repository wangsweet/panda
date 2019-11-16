<template>
  <div>
    <header>
      <span class="iconfont" @click="handleback()">&#xe608;</span>
      <div class="search">
        <button class="search_submit"></button>
        <input
          type="text"
          class="search_area"
          v-model="value"
          name="kw"
          placeholder="输入商品名或粘贴宝贝标题搜索"
        />
        <input type="submit" class="sbumit" value="搜索" />
      </div>
    </header>
    <section>
      <div class="beauty-products">
        <ul class="search_act_list">
          <li v-for="(item,index) in searchlist" :key="index">
            <div class="col-mar row-s">
              <div class="col-12-10 text-left">
                <span>{{item}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import { searchApi } from "@api/search";
import { throttle } from "@utils/panda";
export default {
  name: "Search",
  data() {
    return {
      searchlist: [],
      value: ""
    };
  },
  methods: {
    handleback() {
      this.$router.back();
    }
  },
  watch: {
    value(newVal) {
      throttle(async () => {
        let data = await searchApi(newVal);
        this.searchlist = data.data;
      });
      if (newVal.length == 0) {
        this.searchlist = [];
      }
    }
  }
};
</script>
<style scoped>
header {
  height: 0.44rem;
  background: #fff;
  padding: 0.08rem 0.1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 120;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 0.24rem;
}

.search {
  margin-left: 0.2rem;
  background-color: #fff;
  border-radius: 0.05rem;
  width: 95%;
  line-height: 0.28rem;
  height: 0.28rem;
  position: relative;
}

.search_submit {
  position: absolute;
  width: 0.24rem;
  height: 0.24rem;
  top: 0.02rem;
  border: none;
  display: block;
  background: url(../../../public/image/search.png) center center no-repeat;
  background-size: 0.15rem 0.15rem;
  left: 0.06rem;
  overflow: hidden;
  outline: none;
}

.search_area {
  margin-left: 0.28rem;
  background: 0 0;
  color: #333;
  position: absolute;
  top: 0.02rem;
  font-size: 0.14rem;
  width: 65%;
  overflow: hidden;
  border: none;
  display: block;
  outline: none;
  height: 0.24rem;
}

.sbumit {
  width: 0.5rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #4a4a4a !important;
  border: 0;
  background: 0 0;
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
}
.search_act_list {
  line-height: 0.4rem;
  margin-top:.44rem;
}
.search_act_list li {
  border-bottom: 1px solid #eee;
}
.col-mar {
  margin: 0 0.1rem;
}
</style>