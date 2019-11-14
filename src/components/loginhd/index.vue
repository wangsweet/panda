<template>
  <header>
    <span class="iconfont" @click="returns">&#xe608;</span>
    <span>{{name}}</span>
    <span>&nbsp;</span>
  </header>
</template>
<script>
export default {
    name:"Loginhd",
    props:{
      name:{
        type:String,
        default:''
      }
    },
    methods:{
      returns(){
        this.$router.push("/")
      }
    }
};
</script>
<style scoped>
header {
  height: 0.44rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

header > span:first-child {
  padding-left: 0.1rem;
  font-size: 0.26rem;
  color: #666;
}

header > span:nth-child(2) {
  font-size: 0.16rem;
  color: #333;
}
</style>