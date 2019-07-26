<template>
  <el-aside
    class="hidden-md-and-down"
    :width="`${$store.state.asideOpen ? '300px' : '65px'}`"
  >
    <div class="aside-menu-style">
      <el-menu default-active="/" router :collapse="!$store.state.asideOpen">
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span>主页</span>
        </el-menu-item>
        <el-menu-item index="/map">
          <i class="el-icon-s-home"></i>
          <span>地图</span>
        </el-menu-item>
      </el-menu>
    </div>
  </el-aside>
</template>
<script>
export default {
  name: "aside-main"
};
</script>
<style type="text/css">
.aside-menu-style {
  margin-top: 64px;
}
.aside-menu-style .el-menu-item.is-active {
  background-color: lightskyblue;
  color: #ffffff;
}
</style>
