<template>
  <div class="mine-body">
    <div class="mine-header">
      <div>
        <img
          src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/user.png?v=201801221043"
          alt=""
        />
        <div @click="login">登录/注册</div>
      </div>
      <img
        src="https://cmsstatic.ffquan.cn//wap_new/user/images/icon/user_icon_set.svg?v=201801221043"
        alt=""
      />
    </div>
    <div class="mine-big">
      <div class="mine-nav">
        <ul>
          <li>
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/list.png?v=201801221043"
              alt=""
            />
            <p>我的订单</p>
          </li>
          <li>
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/love.png?v=201801221043"
              alt=""
            />
            <p>我的收藏</p>
          </li>
          <li>
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/foot.png?v=201801221043"
              alt=""
            />
            <p>我的足迹</p>
          </li>
        </ul>
      </div>
      <div class="mine-aside">
        <div>
          <p>贴心服务<span>为您提供1对1个性化管家服务</span></p>
        </div>
        <img
          src="https://cmsstatic.ffquan.cn//wap_new/user/images/sptj.png?v=201801221043"
          alt=""
        />
      </div>
      <div class="mine-article">
        <div>
          <p>常用工具</p>
        </div>
        <ul>
          <li>
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/tools1.png?v=201801221043"
              alt=""
            />
            <p>领券帮助</p>
          </li>
          <li>
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/tools2.png?v=201801221043"
              alt=""
            />
            <p>领券帮助</p>
          </li>
          <li>
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/tools4.png?v=201801221043"
              alt=""
            />
            <p>领券帮助</p>
          </li>
          <li>
            <img
              src="https://cmsstatic.ffquan.cn//wap_new/user/images/integral/tools7.png?v=201801221043"
              alt=""
            />
            <p>领券帮助</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  methods:{
    login(){
      this.$router.push('/login')
    }
  }
};
</script>

<style>


.mine-body {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  background: url(https://cmsstatic.ffquan.cn/wap_new/user/images/user_bg.png?v=2019-11-10)
    no-repeat #f6f6f6;
  background-size: 100%;
  height: 100%;
}



.mine-header {
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}

.mine-header div img {
  width: 0.5rem;
  margin-right: 0.1rem;
}

.mine-header div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.mine-header img {
  width: 0.2rem;
}

.mine-nav {
  width: 94%;
  height: 0.8rem;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  margin-left: 3%;
}

.mine-nav ul {
  display: flex;
  justify-content: space-around;
  color: #666;
  font-size: 0.11rem;
  width: 100%;
}

.mine-nav img {
  width: 0.26rem;
}

.mine-nav li {
  text-align: center;
}

.mine-aside {
  height: 1.2rem;
  background-color: #fff;
  width: 94%;
  margin-left: 3%;
  margin-top: 0.14rem;
  border-radius: 15px;
}

.mine-aside div {
  height: 0.3rem;
  border-bottom: 1px solid #eee;
  font-size: 0.13rem;
  line-height: 0.3rem;
  padding: 0 0.1rem;
}

.mine-aside div span {
  font-size: 0.1rem;
  color: #999;
  margin-left: 0.1rem;
}

.mine-article {
  height: 1rem;
  background-color: #fff;
  width: 94%;
  margin-left: 3%;
  margin-top: 0.14rem;
  border-radius: 15px;
}

.mine-aside img {
  width: 50%;
  margin-top: 0.05rem;
}

.mine-article div {
  height: 0.3rem;
  border-bottom: 1px solid #eee;
  font-size: 0.13rem;
  line-height: 0.3rem;
  padding: 0 0.1rem;
}

.mine-article div span {
  font-size: 0.1rem;
  color: #999;
  margin-left: 0.1rem;
}

.mine-article ul {
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 0.11rem;
  align-items: center;
  height: 0.7rem;
  text-align: center;
  color: #999;
}

.mine-article img {
  width: 0.24rem;
  margin-bottom: 0.05rem;
}
.mine-big {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  margin-top: .8rem;
  overflow: scroll;
  margin-bottom: .5rem;
  width: 100%
}
</style>