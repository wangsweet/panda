<template>
  <div>
    <Loginhd :name="'登录'"></Loginhd>
    <section>
      <form>
        <div>
          账号：<input
            type="text"
            id="username"
            placeholder="请输入账号"
            v-model="username"
          />
        </div>
        <div>
          密码：
          <input
            type="password"
            id="pwd"
            placeholder="请输入密码"
            v-model="password"
          />
        </div>
        <div><input type="button" value="登录" id="btn" :class="is?'blues':''" @click="loging"/></div>
        <div>
          还没有账号，立即
          <span class="link" @click="jump">注册</span>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
import Loginhd from "@components/loginhd";
import {login} from "@api/login"
export default {
  name: "Login",
  components: {
    Loginhd
  },
  data(){
      return{
        username:'',
        password:'',
        is:0
      }
    },
  methods: {
    jump() {
      this.$router.push("/registe");
    },
    async loging(){
      let data=await login(this.username,this.password);
      if(data.data.status==1){
        alert(data.data.info)
        this.$router.push("/")
      }else if(data.data.status==2){
        alert(data.data.info)
      }
    }
  },
  updated() {
      if (this.username != "" && this.password != "") {
        this.is = 1;
      } else {
        this.is = 0;
      }
  }
};
</script>
<style scoped>
section{
  margin-top:1rem
}
.blues{
  background: #1991eb !important;
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

</style>