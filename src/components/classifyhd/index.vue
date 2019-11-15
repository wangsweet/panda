<template>
  <header>
    <span class="iconfont" @click="handleback()">&#xe608;</span>
    <div class="search">
      <button class="search_submit"></button>
      <router-link tag="div" :to="{name:'search'}" class="search_area">输入商品名或粘贴宝贝标题搜索</router-link>
    </div>
  </header>
</template>
<script>
export default {
  name: "classifyhd",
  methods:{
    handleback(){
      this.$router.back();
    }
  }
}
</script>
<style scoped>
header {
  height: 0.44rem;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  padding: 0.08rem 0.1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 120;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.24rem;
}

.search {
  margin-left: 0.2rem;
  background-color: #fff;
  border-radius: 0.05rem;
  width: 90%;
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
}

.search_area {
  margin-left: 0.28rem;
  background: 0 0;
  color: #ccc;
  position: absolute;
  top: 0;
  font-size: 0.14rem;
}
</style>