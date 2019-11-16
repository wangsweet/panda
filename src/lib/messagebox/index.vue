<template>
  <div class="messageboxContainer">
    <div class="messagebox_title">
      <div>{{title}}</div>
      <v-touch tag="div" @tap="handleClose()">x</v-touch>
    </div>
    <div class="messagebox_contain">{{content}}</div>
    <v-touch tag="div" @tap="handleOk()" class="messagebox_btn">确认</v-touch>
  </div>
</template>

<script>
export default {};
</script>

<style>
.messageboxContainer {
  width: 2.5rem;
  height: 1.68rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 110;
  background: linear-gradient(to left, #fb85f7 0, #fe9f69 100%);
  padding: 0.07rem;
  color: #fff;
}
.messagebox_title {
  width: 100%;
  height: 0.36rem;
  line-height: 0.36rem;
  display: flex;
  justify-content: space-between;
}
.messagebox_contain {
  padding: 0.4rem 0.05rem;
  text-align: center;
}
.messagebox_btn {
  height: 0.3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>