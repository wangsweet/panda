<template>
  <div>
    <Loginhd :name="'注册'"></Loginhd>
    <section>
      <form>
        <div>账号：<input type="text" id="username" placeholder="请输入账号" v-model="username"/></div>
        <div>密码：<input type="password" id="pwd" placeholder="请输入密码" v-model="password"/></div>
        <div><input type="button" value="注册" id="btn" :class="is?'blue':''" @click="register"/></div>
        <div class="regi">
          点击“注册”表示您已同意
          <a href="/index.php?r=user/agreement" class="col-link">《熊猫购物用户协议》</a>
        </div>
      </form>
    </section>
    <div class="bottom">
      <div>
        已有账号，立即
        <span class="link" @click="link">登录</span>
      </div>
    </div>
  </div>
</template>
<script>
import Loginhd from "@components/loginhd";
import {registe} from "@api/registe"
export default {
  name: "Registe",
  data(){
    return{
      username:'',
      password:'',
      is:0,
    }
  },
  components: {
    Loginhd
  },
  methods:{
    link(){
      this.$router.push('/login')
    },
    async register(){
      let data=await registe(this.username,this.password);
      if(data.data.status==1){
        alert(data.data.info)
        this.$router.push("/login")
      }else if(data.data.status==2){
        alert(data.data.info)
      }
    }
  },
  updated(){
    if(this.username!=''&&this.password!=''){
      this.is=1
    }else{
      this.is=0
    }
  }
};
</script>
<style scoped>
.blue{
  background: #1991eb !important;
}
section{
  margin-top:1rem
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

.bottom > div {
  font-size: 0.14rem;
  color: #aaa;
}

.bottom {
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
  margin-bottom: .5rem
}
</style>