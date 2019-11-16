<template>
  <div>
    <div class="beauty-sort">
      <ul>
        <router-link tag="li" :to="{name:'beautylist',query:{cid:item.original_id,goodscid:item.original_id,el:item.name}}" class="cat-item" v-for="(item,index) in beautyorder" :key="index">
          <img
            class="lazy"
            :src="item.icon"
            alt
            style="background: rgb(245, 245, 245); display: block;"
          />
          <span>{{item.name}}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { beautyApi } from "@api/beauty";
export default {
  name: "Beautyorder",
  props: ["searchVal"],
  data() {
    return {
      beautyorder: [],
      beautyorderindex:this.$route.query.index
    };
  },
  async created() {
    let data = await beautyApi();
    this.beautyorder = data.data[this.beautyorderindex].sub_class;
  },
  watch: {
    searchVal: function(val) {
      // 接收父组件的值
      if (val) {
        this.beautyorderindex=val;
        this.beautyorder = JSON.parse(sessionStorage.getItem("beauty"))[
          this.beautyorderindex
        ].sub_class;
      } else {
        this.beautyorder = JSON.parse(
          sessionStorage.getItem("beauty")
        )[this.beautyorderindex].sub_class;
      }
    }
  }
};
</script>
<style scoped>
</style>