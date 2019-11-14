<template>
  <div class="crazy-body">
    <div class="crazy-header">
      <span></span>
      <p>实时疯抢榜</p>
      <span></span>
    </div>
    <div class="crazy-nav">
      <ul>
        <li>实时榜</li>
        <li>实时榜</li>
        <li>实时榜</li>
        <li>实时榜</li>
        <li>实时榜</li>
      </ul>
    </div>
    <div class="crazy-tip"></div>
    <div class="crazy-article">
      <div>
        <div class="crazy-big">
          <img
            src="https://img.alicdn.com/imgextra/i4/2784739501/O1CN0100I0FG2K3VaCmPfqK_!!2784739501.jpg_310x310.jpg"
            alt=""
          />
          <div class="crazy-small">
            <h4>【麦斯威尔】原味特浓速溶咖啡粉</h4>
            <p>近2小时预定</p>
            <p>预售价: ¥89.9</p>
            <h3>到手价 ¥ 9.9<span>去预定</span></h3>
          </div>
        </div>
      </div>
      <div>
        <div class="crazy-big">
          <img
            src="https://img.alicdn.com/imgextra/i4/2784739501/O1CN0100I0FG2K3VaCmPfqK_!!2784739501.jpg_310x310.jpg"
            alt=""
          />
          <div class="crazy-small">
            <h4>【麦斯威尔】原味特浓速溶咖啡粉</h4>
            <p>近2小时预定</p>
            <p>预售价: ¥89.9</p>
            <h3>到手价 ¥ 9.9<span>去预定</span></h3>
          </div>
        </div>
      </div>
      <div>
        <div class="crazy-big">
          <img
            src="https://img.alicdn.com/imgextra/i4/2784739501/O1CN0100I0FG2K3VaCmPfqK_!!2784739501.jpg_310x310.jpg"
            alt=""
          />
          <div class="crazy-small">
            <h4>【麦斯威尔】原味特浓速溶咖啡粉</h4>
            <p>近2小时预定</p>
            <p>预售价: ¥89.9</p>
            <h3>到手价 ¥ 9.9<span>去预定</span></h3>
          </div>
        </div>
      </div>
      <div>
        <div class="crazy-big">
          <img
            src="https://img.alicdn.com/imgextra/i4/2784739501/O1CN0100I0FG2K3VaCmPfqK_!!2784739501.jpg_310x310.jpg"
            alt=""
          />
          <div class="crazy-small">
            <h4>【麦斯威尔】原味特浓速溶咖啡粉</h4>
            <p>近2小时预定</p>
            <p>预售价: ¥89.9</p>
            <h3>到手价 ¥ 9.9<span>去预定</span></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"crazyRush"
};
</script>

<style>

.crazy-body {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  height: 100%;
}

.crazy-html {
  font-size: 31.25vw;
}

.crazy-header {
  height: 0.4rem;
  background: linear-gradient(to left, #cc32ff 0, #ff38ce 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif, "Microsoft YaHei";
  border-bottom: 1px solid #fff;
}

.crazy-nav {
  display: flex;
  flex-wrap: nowrap;
  color: #fff;
  height: 0.4rem;
}

.crazy-nav ul {
  background: linear-gradient(to left, #cc32ff 0, #ff38ce 100%);
  font-size: 0.12rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.crazy-nav ul li {
  margin: 0.05rem 0.17rem;
  width: 0.5rem;
  text-align: center;
}

.crazy-tip {
  background: #ffebe1;
  height: 0.3rem;
}

.crazy-article {
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

.crazy-big {
  background: #fff;
  width: 100%;
  margin-bottom: 0.1rem;
  padding: 0.1rem 0;
  display: flex;
  flex-direction: row;
  height: 1.2rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}

.crazy-big img {
  width: 1rem;
  height: 1rem;
  margin-right: 0.1rem;
}

.crazy-small h4 {
  font-size: 0.12rem;
  font-weight: normal;
  margin-bottom: 0.1rem;
}

.crazy-small p:first-of-type {
  font-size: 0.12rem;
  color: #999;
}

.crazy-small p:last-of-type {
  font-size: 0.1rem;
  color: #ff2b22;
  margin-top: 0.05rem;
  color: #999;
}

.crazy-small h5 {
  font-weight: normal;
  font-size: 0.1rem;
  color: #999;
  padding-left: 1.2rem;
}

.crazy-small h3 {
  color: #ff2b22;
  font-size: 0.14rem;
  margin-top: 0.1rem;
  font-weight: normal;
}

.crazy-small h3 span {
  background: linear-gradient(
    90deg,
    rgba(255, 56, 206, 1) 0%,
    rgba(204, 50, 255, 1) 100%
  );
  color: #fff;
  margin-left: 0.5rem;
  font-weight: normal;
  border-radius: 100px;
  padding: 0.03rem 0.1rem;
  line-height: 0.23rem;
  font-size: 0.12rem;
}
</style>