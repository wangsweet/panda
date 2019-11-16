<template>
  <div class="select-header">
    <span class="iconfont" @click="back">&#xe608;</span>
    <span>{{title}}</span>
    <span>...</span>
  </div>
</template>

<script>
export default {
  name: 'Selecthd',
  methods: {
    back() {
      this.$router.back();
    }
  },
 props:{
     title:{
         type:String,
         default:""
     }
 }
};
</script>

<style>
.select-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  height: 0.4rem;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  color: #fff;
  font-size: 0.14rem;
}
.select-header span {
  font-size: 0.15rem;
}
</style>