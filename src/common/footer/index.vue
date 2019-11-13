<template>
  <footer>
    <ul>
      <li>
        <img
          src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01VrW0OV2JJhy7udA7A_!!2053469401.png"
          alt=""
        />
        <p>首页</p>
      </li>
      <li>
        <img
          src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01VrW0OV2JJhy7udA7A_!!2053469401.png"
          alt=""
        />
        <p>9.9包邮</p>
      </li>
      <li>
        <img
          src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01VrW0OV2JJhy7udA7A_!!2053469401.png"
          alt=""
        />
        <p>分类</p>
      </li>
      <li>
        <img
          src="https://img.alicdn.com/imgextra/i4/2053469401/O1CN01VrW0OV2JJhy7udA7A_!!2053469401.png"
          alt=""
        />
        <p>我的</p>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  height: 0.45rem;
  width: 100%;
  background-color: #fff;
  color: #000
}
footer ul {
  display: flex;
  justify-content: space-around;
  font-size: 0.1rem;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
}

footer img {
  width: 0.2rem;
}
</style>