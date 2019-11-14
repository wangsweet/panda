<template>
  <div class="select-body">
    <div class="select-header">
      <span class="iconfont" @click="back">&#xe608;</span> <span>9块9每日精选 </span>
      <span>...</span>
    </div>
    <div class="select-nav">
      大家都在买
    </div>
    <div class="select-cont">
      <div>
        <div class="select-main">
          <div>
            <div class="select-small" v-for="(item,index) in list1" :key="index">
              <img
                :src="item.pic"
                alt=""
              />
              <span>{{(Number(item.xiaoliang)/10000).toFixed(1)}}万人已买</span>
              <p>{{item.d_title}}</p>
              <h5>
                ￥{{item.jiage}}
                <p>券后</p>
              </h5>
            </div>
            
          </div>
        </div>
        <div class="select-aside">
          精选推荐
        </div>
        <div class="select-article">
          <div>
            <div class="select-big" v-for="(item,index) in list2" :key="index">
              <img
                :src="item.pic"
                alt=""
              />
              <p>{{item.d_title}}</p>
              <h2>券后<span>￥{{item.jiage}}</span></h2>
              <h3><span v-if="item.label[0]">{{item.label[0].title}}</span><span>券3元</span></h3>
              <h4>已售{{(item.xiaoliang/10000).toFixed(1)}}万 | 评论{{item.comment}}</h4>
            </div>                                  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {selectList} from '@api/selects'
export default {
  name: "selects",
  data(){
    return{
      list1:[],
      list2:[]
    }
  },
  created(){
    this.getSelectList()
  },
  methods:{
    async getSelectList(){
      let data=await selectList();
      this.list1=data.data.data.splice(0,3)
      this.list2=data.data.data.splice(3,17)
    },
    back(){
      this.$router.back()
    }
  }
};
</script>

<style>

.select-body {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  height: 100%;
}


.select-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  height: 0.4rem;
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  color: #fff;
  font-size: 0.14rem;
}

.select-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c043fc;
  height: 0.35rem;
  font-size: 0.14rem;
  border-bottom: 1px solid #ddd;
}

.select-article {
  display: flex;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
}

.select-article >div {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.select-big p {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.12rem;
  margin: 0.05rem 0;
  padding: 0 0.05rem;
}

.select-big h2 {
  font-size: 0.12rem;
  padding: 0 0.05rem;
  font-weight: normal;
  margin-bottom: 0.05rem;
}

.select-big h2 span {
  color: #ff2b22;
  font-size: 0.16rem;
}

.select-big h3 {
  font-size: 0.1rem;
  padding: 0 0.05rem;
  font-weight: normal;
  margin-bottom: 0.05rem;
}

.select-big h3 span {
  border-color: #f57223;
  color: #f57223;
  border: 1px solid #f57223;
  border-radius: 5px;
  font-size: .08rem;
  margin-right: .1rem
}

.select-big h4 {
  font-size: 0.08rem;
  padding: 0 0.05rem;
  font-weight: normal;
  color: #999;
}

.select-aside {
  height: 0.4rem;
  color: #c043fc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.14rem;
}
.select-big {
  width: 48%;
  background: #fff;
  margin: 1%;
  height: 2.5rem;
}

.select-big img {
  width: 100%;
  height: 65%;
}

.select-main {
  display: flex;
  height: 1.7rem;
  margin-top: 0.1rem;
}

.select-main > div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.select-small {
  display: flex;
  width: 30%;
  flex-direction: column;
}

.select-small img {
  width: 100%;
}

.select-cont {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  margin-top: 0.8rem;
  overflow: scroll;
  margin-bottom: 0.5rem;
}

.select-small span {
  border-radius: 0 0 2px 2px;
  text-align: center;
  background: #fff3f3;
  border: 1px solid #ffbdbf;
  color: #fc4d52;
  font-size: 0.1rem;
}
.select-small p {
  font-size: 0.1rem;
}
.select-small h5 {
  font-size: 0.14rem;
  color: #fc4d52;
  font-weight: normal;
}
.select-small h5 p {
  display: inline;
  color: #999;
}
</style>