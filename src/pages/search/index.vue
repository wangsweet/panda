<template>
  <div>
    <header>
      <span class="iconfont">&#xe608;</span>
      <div class="search">
        <button class="search_submit"></button>
        <input type="text" class="search_area" name="kw" value="输入商品名或粘贴宝贝标题搜索" />
        <input type="submit" class="sbumit" value="搜索" />
      </div>
    </header>
    <section>
      <dl class="search_hot_step">
        <dt class="col-mar">三步轻松获得优惠券</dt>
        <dd class="row-s">
          <div class="col-12-4">
            <p>1.进入淘宝</p>
          </div>
          <div class="col-12-4">
            <p>2.复制商品标题</p>
          </div>
          <div class="col-12-4">
            <p>3.点击搜索查询</p>
          </div>
        </dd>
      </dl>
      <dl class="search_hot_act col-mar">
        <dt>热门搜索</dt>
        <dd>
          <a>零食</a>
          <a>袜子</a>
          <a>面膜</a>
          <a>口红</a>
          <a>好吃点</a>
          <a>耳机</a>
          <a>充电宝</a>
          <a data-key="疯抢榜" href="/index.php?r=p&amp;hot=8">
            疯抢榜
            <span>栏目</span>
          </a>
          <a>
            品牌特卖
            <span>栏目</span>
          </a>
        </dd>
      </dl>
    </section>
  </div>
</template>
<script>
export default {
  name: "Search"
};
</script>
<style scoped>
header {
  height: 0.44rem;
  background: #fff;
  padding: 0.08rem 0.1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 120;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 0.24rem;
}

.search {
  margin-left: 0.2rem;
  background-color: #fff;
  border-radius: 0.05rem;
  width: 95%;
  line-height: 0.28rem;
  height: 0.28rem;
  position: relative;
}

.search_submit {
  position: absolute;
  width: 0.24rem;
  height: 0.24rem;
  top: 0.02rem;
  border: none;
  display: block;
  background: url(../../../public/image/search.png) center center no-repeat;
  background-size: 0.15rem 0.15rem;
  left: 0.06rem;
  overflow: hidden;
  outline: none;
}

.search_area {
  margin-left: 0.28rem;
  background: 0 0;
  color: #ccc;
  position: absolute;
  top: 0.02rem;
  font-size: 0.14rem;
  width: 65%;
  overflow: hidden;
  border: none;
  display: block;
  outline: none;
  height: 0.24rem;
}

.sbumit {
  width: 0.5rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #4a4a4a !important;
  border: 0;
  background: 0 0;
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
}

.search_hot_step {
  padding: 0.13rem 0 0.15rem;
  margin-top: 0.55rem;
}

.search_hot_step dt {
  width: 1.08rem;
  height: 0.17rem;
  font-size: 0.12rem;
  font-weight: 400;
  color: #999;
  line-height: 0.17rem;
  margin-bottom: 0.11rem;
}

.col-mar {
  margin: 0 0.1rem;
}

.search_hot_step dd {
  position: relative;
  z-index: 1;
  zoom: 1;
  text-align: center;
}

.search_hot_step dd.row-s > div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-s .col-12-4 {
  width: 33.33333333%;
  float: left;
  text-align: center;
}

.search_hot_step dd p {
  font-size: 0.13rem;
  margin: 0 0.1rem;
  color: #555;
}

.search_hot_act {
  width: 100%;
}

.search_hot_act dt {
  line-height: 0.45rem;
  position: relative;
  z-index: 1;
  zoom: 1;
  font-size: 0.1rem;
  color: #999;
}

.search_hot_act dd a {
  position: relative;
  z-index: 1;
  zoom: 1;
  margin: 0 1% 0.08rem;
  background: #f6f6f6;
  font-size: 0.12rem;
  padding: 0 0.15rem;
  max-width: 88%;
  color: #666;
  float: left;
  height: 0.26rem;
  line-height: 0.26rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>