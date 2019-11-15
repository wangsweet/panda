<template>
  <Panda-scroll ref="scroll" class="classify_content">
    <div class="center">
      <div class="ov_h" style="height:0.44rem"></div>
      <ul class="main-cat2" v-for="(item,index) in classifyrcdList" :key="index">
        <h3>{{item.name}}</h3>
        <router-link
          tag="li"
          :to="{name:'beautylist',query:{cid:item.original_id,goodscid:item.original_id,el:item.name}}"
          class="cat-item"
          v-for="(child) in item.list"
          :key="child.id"
        >
          <img class :src="child.img" alt />
          {{child.name}}
        </router-link>
      </ul>
      <div class="ov_h" style="height:0.5rem;"></div>
    </div>
  </Panda-scroll>
</template>
<script>
import { classifyApi } from "@api/classify";
export default {
  name: "Classifyrcd",
  props: ["searchVal"],
  data() {
    return {
      classifyrcdList: []
    };
  },
  async created() {
    this.handlegetclassifyrcd();
  },
  methods: {
    async handlegetclassifyrcd() {
      let data = await classifyApi();
      this.classifyrcdList = data.data.data[0].floors;
    }
  },
  mounted() {
    this.$refs.scroll.handleScroll();
    this.$refs.scroll.handlepullingDown(() => {
      this.handlegetclassifyrcd();
    });
    this.$refs.scroll.handlepullingUp(()=>{
      // console.log(211)
    })
  },
  watch: {
    searchVal: function(val) {
      // 接收父组件的值
      if (val) {
        this.classifyrcdList = JSON.parse(
          sessionStorage.getItem("classifyList")
        )[val].floors;
      } else {
        this.classifyrcdList = JSON.parse(
          sessionStorage.getItem("classifyList")
        )[0].floors;
        // console.log(this.classifyrcdList);
      }
    },
    classifyrcdList(){
      this.$refs.scroll.handleRefreshDown();
    }
  }
};
</script>
<style  scoped>
.classify_content {
  /* height: 100%; */
  margin-left: 23%;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  z-index: 0;
}

.img {
  margin: 0 10px;
  overflow: hidden;
  padding-top: 10px;
}

.img img {
  width: 100%;
}

.title-nav {
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  clear: both;
}

h3 {
  padding: 0 4%;
  font-size: 0.14rem;
  font-weight: 400;
  color: #333;
  line-height: 0.5rem;
  margin-bottom: 0.15rem;
  clear: both;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  float: none;
}

.cat-item {
  width: 33%;
  float: left;
  text-align: center;
  opacity: 1;
  font-size: 0.12rem;
  color: #333;
  line-height: 0.25rem;
  overflow: hidden;
  padding-bottom: 0.2rem;
}

.cat-item img {
  display: block;
  margin: auto;
  width: 60%;
  height: 0.4rem;
}
</style>