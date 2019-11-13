<template>
  <div class="parcel-body">
    <div class="parcel-header">
      <span></span>
      <img
        src="https://cmsstatic.ffquan.cn//web/nine_special/images/nine_title.svg?v=201911081848"
        alt=""
      />
      <span>...</span>
    </div>
    <div class="parcel-center">
      <div class="parcel-pic">
        <div>
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01UZfhB42JJhz1pOtjS_!!2053469401.jpg"
            alt=""
          />
          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN015NqWTV2JJhz0EHSWK_!!2053469401.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01NeHdLt2JJhz7C6WVE_!!2053469401.png"
            alt=""
          />
          <img
            src="https://img.alicdn.com/imgextra/i2/2053469401/O1CN01S4Q95E2JJhz0U2gF3_!!2053469401.png"
            alt=""
          />

          <img
            src="https://img.alicdn.com/imgextra/i3/2053469401/O1CN01K4Ru8t2JJhyx5uckX_!!2053469401.png"
            alt=""
          />
          <img
            src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01RMjV3I2JJhyzg9WUt_!!2053469401.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="parcel-nav">
        <ul>
          <li>
            精选
          </li>
          <li>
            精选
          </li>
          <li>
            精选
          </li>
          <li>
            精选
          </li>
          <li>
            精选
          </li>
        </ul>
      </div>
      <div class="parcel-aside">
        精选推荐
      </div>
      <div class="parcel-article">
        <div>
          <div class="parcel-big">
            <img
              src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp"
              alt=""
            />
            <p>【拍6件】网红日本海盐饼干600g</p>
            <h2>券后<span>￥18.88</span></h2>
            <h3><span>爆款</span></h3>
            <h4>已售353.9万|评论18.5万</h4>
          </div>
          <div class="parcel-big">
            <img
              src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp"
              alt=""
            />
            <p>【拍6件】网红日本海盐饼干600g</p>
            <h2>券后<span>￥18.88</span></h2>
            <h3><span>爆款</span></h3>
            <h4>已售353.9万|评论18.5万</h4>
          </div>
          <div class="parcel-big">
            <img
              src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp"
              alt=""
            />
            <p>【拍6件】网红日本海盐饼干600g</p>
            <h2>券后<span>￥18.88</span></h2>
            <h3><span>爆款</span></h3>
            <h4>已售353.9万|评论18.5万</h4>
          </div>
          <div class="parcel-big">
            <img
              src="https://img.alicdn.com/imgextra/i1/2201195930685/O1CN01c9EkUU1Gvlrd6J7sG_!!2201195930685.jpg_310x310.jpg_.webp"
              alt=""
            />
            <p>【拍6件】网红日本海盐饼干600g</p>
            <h2>券后<span>￥18.88</span></h2>
            <h3><span>爆款</span></h3>
            <h4>已售353.9万|评论18.5万</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"parcel"
};
</script>

<style>

.parcel-body {
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
  background: #eee;
  height: 100%;
}


.parcel-header {
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.4rem;
  color: #fff;
  padding: 0 0.1rem;
}
.parcel-center {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  margin-top: .4rem;
  overflow: scroll;
  margin-bottom: .5rem;
  width: 100%
}
.parcel-pic {
  display: flex;
  flex-direction: row;
  height: 3.4rem;
}

.parcel-pic div:first-of-type img {
  width: 100%;
}
.parcel-pic div:last-of-type img {
  width: 50%;
  float: left;
}

.parcel-nav {
  display: flex;
  flex-wrap: nowrap;
  height: 0.8rem;
  margin: 0.05rem 0;
  overflow: hidden;
}

.parcel-nav ul {
  background: #fff;
  font-size: 0.12rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.parcel-nav ul li {
  margin: 0.05rem 0.17rem;
  width: 0.5rem;
  text-align: center;
}

.parcel-aside {
  height: 0.8rem;
  color: #c043fc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.14rem;
  background: #fff
}

.parcel-big {
  width: 48%;
  background: #fff;
  margin: 1%;
  height: 2.5rem;
}

.parcel-big img {
  width: 100%;
  height: 65%;
}

.parcel-article {
  display: flex;
  height: 100%;
  width: 100%;
}

.parcel-article >div {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.parcel-big p {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.12rem;
  margin: 0.05rem 0;
  padding: 0 0.05rem;
}
.parcel-big h2 {
  font-size: 0.12rem;
  padding: 0 0.05rem;
  font-weight: normal;
  margin-bottom: 0.05rem;
}

.parcel-big h2 span {
  color: #ff2b22;
  font-size: 0.16rem;
}

.parcel-big h3 {
  font-size: 0.1rem;
  padding: 0 0.05rem;
  font-weight: normal;
  margin-bottom: 0.05rem;
}

.parcel-big h3 span {
  border-color: #f57223;
  color: #f57223;
  border: 1px solid #f57223;
  padding: 0.01rem;
  border-radius: 5px;
}

.parcel-big h4 {
  font-size: 0.08rem;
  padding: 0 0.05rem;
  font-weight: normal;
  color: #999;
}
</style>