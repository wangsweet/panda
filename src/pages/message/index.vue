<template>
  <div>
    <header>
      <span class="iconfont" @click="handleback()">&#xe608;</span>
      <span>消息</span>
      <span>&nbsp;</span>
    </header>
    <section>
      <div class="layout">
        <ul class="news-lists" ui-dragload callback="getNewsLists" isload="true">
          <li v-for="(item,index) in messagelist" :key="index">
            <div class="title">
              <h3 class="text-ellipsis">{{item.title}}</h3>
              <span class="time">{{new Date(item.createTimeStamp).getMonth()+1+'-'+new Date(item.createTimeStamp).getDate()}}</span>
            </div>
            <p class="msg text-ellipsis">{{item.typeDescribe}}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import {messageApi} from "@api/message";
export default {
  name: "Message",
  data(){
    return{
      messagelist:[]
    }
  },
  methods:{
    handleback(){
      this.$router.back();
    }
  },
  async created(){
    let data=await messageApi();
    this.messagelist=data.data.lists;
    // console.log(this.messagelist);
  }
};
</script>
<style scoped>
body {
  background: #f5f5f5;
}
header {
  width: 100%;
  height: 0.45rem;
  line-height: 0.45rem;
  position: relative;
  z-index: 5;
  zoom: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}

header> span:first-child {
  padding-left: 0.1rem;
}

header > span:nth-child(2) {
  text-align: center;
  font-size: 0.16rem;
  color: #333;
}

.layout {
  max-width: 7.5rem;
  text-align: left;
  margin: auto;
  height:5rem;
  overflow: auto;
}

.news-lists {
  margin-top: 0.1rem;
}

.news-lists li {
  height: 0.75rem;
  background: #fff;
  margin-bottom: 1px;
  box-sizing: border-box;
  padding: 0.13rem 0.14rem 0.16rem;
  cursor: pointer;
}

.news-lists li .title {
  display: flex;
  font-family: PingFangSC;
  align-items: center;
  margin-bottom: 0.06rem;
}

.news-lists li .title h3 {
  flex: 1;
  height: 0.2rem;
  font-size: 0.14rem;
  line-height: 0.2rem;
  font-weight: 500;
  color: #4a4a4a;
}

.news-lists li .title .time {
  height: 0.16rem;
  font-size: 0.12rem;
  font-weight: 400;
  display: block;
  color: #b3b3b3;
  line-height: 0.16rem;
}

.news-lists li .msg {
  height: 0.2rem;
  font-size: 0.12rem;
  line-height: 0.16rem;
  font-weight: 400;
  color: #999;
  font-family: PingFangSC;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>