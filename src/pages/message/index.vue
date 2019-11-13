<template>
  <div>
    <header>
      <span class="iconfont">&#xe608;</span>
      <span>消息</span>
      <span>&nbsp;</span>
    </header>
    <section>
      <div class="layout">
        <ul class="news-lists" ui-dragload callback="getNewsLists" isload="true">
          <li>
            <div class="title">
              <h3 class="text-ellipsis">决战双11最后2小时！！</h3>
              <span class="time">21:41</span>
            </div>
            <p class="msg text-ellipsis">终极疯抢! 大牌好货低至3折! 今年不囤必亏！</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">上发条定闹钟!双11最后的百万红包！！</h3>
              <span class="time">18:47</span>
            </div>
            <p class="msg text-ellipsis">19点整,最后的超级红包！1111超大额先抢先得！</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">双11品牌狂欢价！大牌优惠多多</h3>
              <span class="time">17:53</span>
            </div>
            <p class="msg text-ellipsis">松下电视赠空净+饭煲，DW定制好礼…速来！</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">重要通知！16点红包加码倒计时</h3>
              <span class="time">15:45</span>
            </div>
            <p class="msg text-ellipsis">准点抢百万现金红包，面额最低6元！速度开抢》》</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">叮！双11礼物到了！</h3>
              <span class="time">15:29</span>
            </div>
            <p class="msg text-ellipsis">暖冬必囤清单！领劵直降 200元，速度加购&gt;&gt;</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">双11狂热嗨购ing！</h3>
              <span class="time">12:00</span>
            </div>
            <p class="msg text-ellipsis">千万尖货持续上新！新降3折起想买不要停！</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">超级大红包真的来了!11点准点抢!</h3>
              <span class="time">10:59</span>
            </div>
            <p class="msg text-ellipsis">前30w个大面额红包18元...1111幸运红包等你抢！</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">尾款准点付!优惠更超值</h3>
              <span class="time">00:30</span>
            </div>
            <p class="msg text-ellipsis">全民狂欢双11!定金翻倍及时付,加赠豪礼抢先得！</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">速点！双11开抢啦！拼你 手速！</h3>
              <span class="time">00:08</span>
            </div>
            <p class="msg text-ellipsis">0点全民半价疯抢！9.9元 剁手好货，神价不等待!</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">年度超级狂欢倒计时5分钟！！！！</h3>
              <span class="time">11-10</span>
            </div>
            <p class="msg text-ellipsis">双11千跨尖货上新，新降3折起！火箭手速立即抢</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">蹲守双11即将开抢！准备0点特价限时剁手</h3>
              <span class="time">11-10</span>
            </div>
            <p class="msg text-ellipsis">红包津贴统统拿下，坚守0点超值低价限时秒杀</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">倒计时2小时</h3>
              <span class="time">11-10</span>
            </div>
            <p class="msg text-ellipsis">稳住你的购物车!蹲点提速带上你的优惠券津贴!火速下单</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">今日最后一波红包雨</h3>
              <span class="time">11-10</span>
            </div>
            <p class="msg text-ellipsis">21点准时开启！5000万红包雨蹲点赶紧抢！</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">蹲点红包1111元！现在狂戳啊！</h3>
              <span class="time">11-10</span>
            </div>
            <p class="msg text-ellipsis">20点千万红包雨!狂戳收现金红包!双11省钱无套路</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">狂欢前最后一波!你还不抢?</h3>
              <span class="time">11-10</span>
            </div>
            <p class="msg text-ellipsis">大牌抄底~全球好货！ 不能错过的双11福利！</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">超级省钱榜单,赶紧瞧瞧</h3>
              <span class="time">11-09</span>
            </div>
            <p class="msg text-ellipsis">预售倒计时2天，预售实时榜单为你放送！快付定金！</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">红包雨提醒！慢一秒就抢光</h3>
              <span class="time">11-09</span>
            </div>
            <p class="msg text-ellipsis">14点准时开抢千万红包雨，蹲点儿抢</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">省钱无套路只有领红包</h3>
              <span class="time">11-08</span>
            </div>
            <p class="msg text-ellipsis">100%中奖 5千万红包雨，狂戳红包疯赚飙升</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">超级红包雨，快来拼手速！</h3>
              <span class="time">11-08</span>
            </div>
            <p class="msg text-ellipsis">现金11111疯抢不停! 点击越多赚得越多！</p>
          </li>
          <li>
            <div class="title">
              <h3 class="text-ellipsis">5千万红包雨0点来袭</h3>
              <span class="time">11-07</span>
            </div>
            <p class="msg text-ellipsis">快抢千万现金红包！购物抵现！更有盖世神券！</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Message"
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