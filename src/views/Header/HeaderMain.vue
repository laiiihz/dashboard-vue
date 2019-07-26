<template>
  <div class="header-main-style">
    <div class="header-title-button" style="left: 12px;">
      <el-button
          class="header-aside-button-style"
          circle
          plain
          type="primary"
          @click="handleClickFoldButton"
      >
        <i class="el-icon-menu"></i>
      </el-button>
    </div>
    <div class="header-title" style="left: 64px;">
      <span style="font-size: 32px">DashBoard</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "header-main",
  methods: {
    handleClickFoldButton() {
      this.$store.commit("changeAsideOpen")
    }
  }
};
</script>
<style>
.header-main-style {
  width: 100%;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 5;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid grey;
}

.header-title-button {
  position: absolute;
  top: 12px;
}
.header-title {
  position: absolute;
  top: 16px;
}

.header-aside-button-style {
}
</style>
