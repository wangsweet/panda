<template>
  <div>
    <Loginhd></Loginhd>
    <section>
      <div class="ov"></div>
      <form>
        <div >账号：<input type="text" id="username" placeholder="请输入账号" /></div>
        <div >密码： <input type="password" id="pwd" placeholder="请输入密码" /></div>
        <div><input type="button" value="登录" id="btn" /></div>
        <div>
          还没有账号，立即
          <span class="link">注册</span>
        </div>
      </form>
    </section>
    <div class="footer">
      <div>
        <a href="#">验证码登录</a>
        <a href="#">找回密码</a>
      </div>
    </div>
  </div>
</template>
<script>
import Loginhd from "@components/loginhd";
export default {
  name: "Login",
  components: {
    Loginhd
  }
};
</script>
<style scoped>
.ov {
  height: 1rem;
}

form {
  padding: 0 0.2rem;
}
#username,
#pwd {
  border: 0;
  height: 0.28rem;
  border-bottom: solid 1px #eee;
  padding: 0.1rem 0;
  color: #333;
  outline: none;
}

#btn {
  width: 100%;
  padding: 0.05rem 0.143rem;
  font-size: 0.14rem;
  background: #eee;
  color: #666;
  outline: none;
  border: none;
  margin: 0.1rem 0;
}

.link {
  color: #1991eb;
}

form > div {
  font-size: 0.14rem;
}

.footer {
  position: fixed;
  left: 0;
  bottom:.5rem;
  height: 1.5rem;
  text-align: center;
  width: 100%;
  z-index: 150;
}
.footer > div > a {
  font-size: 0.15rem;
  color: #aaa;
}
</style>