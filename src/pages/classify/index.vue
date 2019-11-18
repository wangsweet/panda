<template>
  <div>
    <Classifyhd></Classifyhd>
    <section>
      <div class="menu-nav">
        <div class="ov_h"></div>
        <ul>
          <li
            v-for="(item,index) in classifyList"
            :key="index"
            @click="handleclick(index)"
            :class="activeIndex==index?'actives':''"
          >
            <router-link tag="a" :to="{name:'classifyrcd',query:{index:index}}">{{item.name}}</router-link>
          </li>
        </ul>
        <div class="ov_h" style="height:0.5rem;"></div>
      </div>
      <keep-alive>
        <router-view :searchVal="searchVal"></router-view>
      </keep-alive>
    </section>
  </div>
</template>
<script>
import Classifyhd from "@components/classifyhd";
import { classifyApi } from "@api/classify";
export default {
  name: "Classify",
  data() {
    return {
      classifyList: [],
      activeIndex: 0,
      searchVal: 0
    };
  },
  async created() {
    let data = await classifyApi();
    this.classifyList = data.data.data;
    sessionStorage.setItem("classifyList", JSON.stringify(this.classifyList));
  },
  methods: {
    handleclick(index) {
      this.activeIndex = index;
      this.searchVal = index;
    }
  },
  components: {
    Classifyhd
  }
};
</script>
<style >
section {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

.menu-nav {
  position: fixed;
  width: 23%;
  left: 0;
  top: 0;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  z-index: 5;
  background: #f4f4f4;
}

.ov_h {
  height: 0.44rem;
  overflow: hidden;
  clear: both;
}

.menu-nav ul li a {
  line-height: 0.45rem;
  display: block;
  height: 0.45rem;
  color: #333;
  z-index: 10;
  font-size: 0.14rem;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
}
.actives {
  color: #fc3f78 !important;
  border-left: 2px solid #c33;
}
</style>