<template>
  <div class="half-body">
    <div class="half-header">
      <span> </span>
      <img
        src="https://cmsstatic.ffquan.cn//wap_new/ranking/images/halfday_title.svg?v=201911071728"
        alt=""
      />
      <span>...</span>
    </div>
    <div class="half-nav">
      <ul>
        <li>
          <p>00:00</p>
          <p>正在抢购</p>
        </li>
        <li>
          <p>00:00</p>
          <p>正在抢购</p>
        </li>
        <li>
          <p>00:00</p>
          <p>正在抢购</p>
        </li>
        <li>
          <p>00:00</p>
          <p>正在抢购</p>
        </li>
        <li>
          <p>00:00</p>
          <p>正在抢购</p>
        </li>
      </ul>
    </div>
    <div class="half-article"> 
      <div class="half-pic">
        <img
          src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01bxRFEY2JJhz5KNm0P_!!2053469401.png?v=752320"
          alt=""
        />
      </div>
      <div>
        <div class="half-big">
          <img
            src="https://gju4.alicdn.com/tps/i3/3300766192/O1CN011uD5Ip1vbyxmLVPS1_!!0-item_pic.jpg_310x310.jpg_.webp"
            alt=""
          />
          <div class="half-small">
            <h4>其妙蛋黄酥 雪媚娘夹心海鸭蛋</h4>
            <span>买二送一</span>
            <p>前十分钟</p>
            <h5>已购3493件</h5>
            <h3>￥9.9</h3>
            <img
              src="https://cmsstatic.ffquan.cn//web/ranking/images/btn.svg"
              alt=""
            />
          </div>
        </div>
        <div class="half-big">
          <img
            src="https://gju4.alicdn.com/tps/i3/3300766192/O1CN011uD5Ip1vbyxmLVPS1_!!0-item_pic.jpg_310x310.jpg_.webp"
            alt=""
          />
          <div class="half-small">
            <h4>其妙蛋黄酥 雪媚娘夹心海鸭蛋</h4>
            <span>买二送一</span>
            <p>前十分钟</p>
            <h5>已购3493件</h5>
            <h3>￥9.9</h3>
            <img
              src="https://cmsstatic.ffquan.cn//web/ranking/images/btn.svg"
              alt=""
            />
          </div>
        </div>
        <div class="half-big">
          <img
            src="https://gju4.alicdn.com/tps/i3/3300766192/O1CN011uD5Ip1vbyxmLVPS1_!!0-item_pic.jpg_310x310.jpg_.webp"
            alt=""
          />
          <div class="half-small">
            <h4>其妙蛋黄酥 雪媚娘夹心海鸭蛋</h4>
            <span>买二送一</span>
            <p>前十分钟</p>
            <h5>已购3493件</h5>
            <h3>￥9.9</h3>
            <img
              src="https://cmsstatic.ffquan.cn//web/ranking/images/btn.svg"
              alt=""
            />
          </div>
        </div>
        <div class="half-big">
          <img
            src="https://gju4.alicdn.com/tps/i3/3300766192/O1CN011uD5Ip1vbyxmLVPS1_!!0-item_pic.jpg_310x310.jpg_.webp"
            alt=""
          />
          <div class="half-small">
            <h4>其妙蛋黄酥 雪媚娘夹心海鸭蛋</h4>
            <span>买二送一</span>
            <p>前十分钟</p>
            <h5>已购3493件</h5>
            <h3>￥9.9</h3>
            <img
              src="https://cmsstatic.ffquan.cn//web/ranking/images/btn.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "halfPrice"
};
</script>

<style>


.half-body {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  background-color: #eee;
  height: 100%;

}

.half-header {
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  color: #fff;
  justify-content: space-between;
  display: flex;
  height: 0.4rem;
  align-items: center;
  padding: 0 0.1rem;
}

.half-header span {
  display: flex;
  justify-content: center;
  line-height: 100%;
}

.half-nav {
  display: flex;
  flex-wrap: nowrap;
  color: #fff;
}

.half-nav ul {
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  font-size: 0.12rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.half-nav ul li {
  margin: 0.05rem 0.17rem;
  width: 0.5rem;
  text-align: center;
}

.half-pic img {
  width: 100%;
  margin-bottom: 0.1rem;
}

.half-article {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  margin-top: .82rem;
  overflow: scroll;
  margin-bottom: 0.5rem;
}
.half-big {
  background: #fff;
  width: 100%;
  margin-bottom: 0.1rem;
  padding: 0.1rem 0;
  display: flex;
  flex-direction: row;
  height: 1.35rem;
  box-sizing: border-box;
}

.half-big img {
  width: 1.16rem;
  height: 1.16rem;
  margin-right: 0.1rem;
}

.half-small h4 {
  font-size: 0.12rem;
  font-weight: normal;
}

.half-small span:first-of-type {
  background: #ffeceb;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid #ffa5a1;
  color: #ff2b22;
  padding: 0 5px;
  font-size: 0.1rem;
  margin: 0.1rem 0;
}

.half-small p {
  font-size: 0.1rem;
  color: #ff2b22;
}

.half-small h5 {
  font-weight: normal;
  font-size: 0.1rem;
  color: #999;
  padding-left: 1.2rem;
}

.half-small h3 {
  color: #ff2b22;
}

.half-small img {
  width: 0.5rem;
  margin: 0;
  height: 0.2rem;
  margin-left: 1.2rem;
}
</style>