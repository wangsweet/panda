<template>
  <div class="scroll_container">
    <div class="scroll_loading" v-if="flag">
      <i class="fa fa-circle-o-notch fa-spin"></i>
    </div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  name: "Panda-scroll",
  data() {
    return {
      flag: false,
      pullingDownflag: false
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //滚动
      probeType: 1,
      //下拉刷新
      pullDownRefresh: {
        threshold:50
      },
      //上拉加载更多
      pullUpLoad:true,
      click:true,
    });
  },
  methods: {
    handleScroll() {
      this.scroll.on("scroll", pro => {
        if (pro.y > 50) {
          this.flag = true;
        }
      });
    },
    //下拉刷新
    handlepullingDown(callback) {
      this.scroll.on("pullingDown", () => {
        this.pullingDownflag = true;
        callback();
      });
    },
    //当数据请求成功后执行的方法
    handleRefreshDown() {
      //重新计算better-scroll
      this.scroll.refresh();
      //防止用户多次下拉做的防抖
      this.scroll.finishPullDown();
      setTimeout(() => {
        this.flag = false;
      }, 200);
    },
    //上拉加载更多
    handlepullingUp(callback){
      this.scroll.on("pullingUp",()=>{
        callback();
      })
    },
    //当上拉加载更多请求数据完毕后
    handlefinishPullUp(){
      //当上拉加载更多数据获取到以后通过better-scroll可以进行下次加载了
      this.scroll.finishPullUp();
       //重新计算better-scroll
      this.scroll.refresh();
    }
  }
};
</script>


<style>
.wrapper,
.scroll_container {
  height: 5.5rem;
  overflow: hidden;
}
.scroll_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
  color: hotpink;
  margin-top: 0.44rem;
}
</style>
