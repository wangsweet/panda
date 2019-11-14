<template>
  <div>
    <Loginhd></Loginhd>
    <section>
      <div class="ov"></div>
      <form>
        <div>账号：<input type="text" id="username" placeholder="请输入账号" /></div>
        <div>密码：<input type="password" id="pwd" placeholder="请输入密码" /></div>
        <div><input type="button" value="注册" id="btn" /></div>
        <div class="regi">
          点击“注册”表示您已同意
          <a href="/index.php?r=user/agreement" class="col-link">《熊猫购物用户协议》</a>
        </div>
      </form>
    </section>
    <div class="footer">
      <div>
        已有账号，立即
        <span class="link">登录</span>
      </div>
    </div>
  </div>
</template>
<script>
import Loginhd from "@components/loginhd";
export default {
  name: "Registe",
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
form > div {
  font-size: 0.14rem;
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
.regi {
  color: #888;
  font-size: 0.1rem;
}
.regi > a {
  font-size: 0.1rem;
  color: #1991eb;
}
.link {
  color: #1991eb;
}

.footer > div {
  font-size: 0.14rem;
  color: #aaa;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 1.5rem;
  text-align: center;
  width: 100%;
  z-index: 150;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>