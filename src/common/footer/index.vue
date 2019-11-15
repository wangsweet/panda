<template>
  <footer>
    <ul>
      <router-link
        v-for="(item, index) in list"
        :key="index"
        :to="item.to"
        :class="idn==index?'actice':''"
      >
        <p class="iconfont" v-html="item.icon" @click="handleClick(index)"></p>
        <p @click="handleClick(index)">{{ item.name }}</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      list: [
        { name: "首页", icon: "&#xe685;", to: "/" },
        { name: "9.9包邮", icon: "&#xe78f;", to: "/parcel" },
        { name: "分类", icon: "&#xe680;", to: "/classify" },
        { name: "我的", icon: "&#xe601;", to: "/mine" }
      ],
      idn:0,
    };
  },
  methods: {
    handleClick(index) {
      this.idn = index;
    }
  }
};
</script>

<style>
a {
  color: #000;
}
.actice {
  color: rgb(253, 87, 92);
}
footer {
  height: 0.45rem;
  width: 100%;
  background-color: #fff;
  color: #000;
}
footer ul {
  display: flex;
  justify-content: space-around;
  font-size: 0.1rem;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
}
</style>