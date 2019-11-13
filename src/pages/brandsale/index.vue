<template>
  <div class="brand-body">
    <div class="brand-header">
      <span></span>
      <p>品牌蓄力</p>
      <span></span>
    </div>

    <div class="brand-list">
      <ul>
        <li>精选</li>
        <li>美妆</li>
        <li>美食</li>
        <li>女装</li>
        <li>母婴</li>
        <li>男装</li>
        <li>日常</li>
        <li>家电</li>
        <li>内衣</li>
        <li>鞋品</li>
        <li>文娱</li>
        <li>配饰</li>
        <li>箱包</li>
        <li>户外</li>
        <li>家装</li>
      </ul>
    </div>
    <div class="brand-ex">
      <h3>品牌「尖」货</h3>
      <p>大牌好货，历史低价团</p>
    </div>
    <div class="brand-center">
      <div class="brand-big">
        <div class="brand-top">
          <p>
            <img
              src="https://img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1bEIKwCzqK1RjSZFjXXblCFXa"
              alt=""
            />
            <span>佑天兰<span>双十一预售</span></span>
          </p>
        </div>
        <div class="brand-middle"></div>
        <div class="brand-small">
          <div>
            <img
              src="https://img.alicdn.com/imgextra/i4/376460581/O1CN01aAvuLE1GA8gNrx0n2_!!376460581.png_310x310.jpg_.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://img.alicdn.com/imgextra/i3/376460581/O1CN01MxNCzq1GA8drlYhzf_!!376460581.jpg_310x310.jpg_.webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://img.alicdn.com/imgextra/i4/376460581/O1CN01aAvuLE1GA8gNrx0n2_!!376460581.png_310x310.jpg_.webp"
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
  name: "brandSale"
};
</script>

<style>
.brand-body {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  background: url("https://img.alicdn.com/imgextra/i2/2053469401/O1CN01KPhXYD2JJhz1RXZHW_!!2053469401.png")
    no-repeat;
  background-size: 100%;
  background-color: #eee;
  color: #fff;
  height: 100%;
}

html {
  font-size: 31.25vw;
}

.brand-header {
  height: 0.34rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-list {
  display: flex;
  flex-wrap: nowrap;
  height: 0.4rem;
}

.brand-list ul {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.12rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.brand-list ul li {
  margin: 0.17rem;
  width: 0.3rem;
}

.brand-ex {
  text-align: center;
}

.brand-ex h3 {
  font-weight: bold;
}

.brand-ex p {
  font-size: 0.1rem;
}

.brand-center {
  margin-top: 0.1rem;
  display: flex;
  justify-content: center;
}

.brand-top {
  height: 0.4rem;
  line-height: 0.4rem;
}

.brand-top img {
  width: 0.35rem;
  height: 0.35rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}

.brand-center div div:nth-of-type(1) span span {
  background-color: #f44;
  border-radius: 4px;
  padding: 0 6px 0 2px;
  color: #fff;
  font-size: 0.1rem;
  margin-left: 0.1rem;
}

.brand-big {
  background-color: #fff;
  color: #000;
  width: 95%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.brand-middle {
  width: 93%;
  height: 1rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  background: url(https://img.alicdn.com/imgextra/i4/2053469401/O1CN01qDHRzg2JJhz8aFpKi_!!2053469401.png)
    no-repeat;
  background-size: 100% 100%;
  margin-bottom: 0.1rem;
  display: flex;
}
.brand-small {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 1.5rem;
}
.brand-small div img {
  width: 0.92rem;
  height: 0.92rem;
}
</style>