<template>
    <div id="app">

        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "@common/footer"
export default {
  components:{
      Footer,
  }
}
</script>
<style>
#app{
    height: 100%;
}
Footer{
    position: fixed;
    bottom: 0;
}
</style>
