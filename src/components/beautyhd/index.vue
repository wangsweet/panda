<template>
  <header>
    <span class="iconfont" @click="handleback()">&#xe608;</span>
    <span v-text="title"></span>
    <span>
      <img src="../../../public/image/somuch.png" />
    </span>
  </header>
</template>
<script>
export default {
  name: "Beautyhd",
  data(){
    return{
      title:"美妆"
    }
  },
  methods:{
    handleback(){
      this.$router.back();
    },
    showinfo:function(){
     this.title=this.$route.query.el
    }
  },
  mounted(){
    this.showinfo();
  }
};
</script>
<style scoped>
header {
  height: 0.28rem;
  position: fixed;
  top: 0px;
  padding: 0.08rem 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  width: 100%;
  z-index: 1000;
}

header > span:first-child {
  font-size: 0.26rem;
  font-weight: 400;
  color: #fff;
}

header > span:nth-child(2) {
  font-size: 0.16rem;
  color: #fff;
}
header > span:nth-child(3){
  height: 100%;
}
header > span:nth-child(3) > img {
  width: 0.25rem;
  height: 0.25rem;
  margin-right: 0.1rem;
}
</style>