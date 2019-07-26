<template>
  <el-container style="width: 100%;height: 100%;" class="main-container-style">
    <el-main class="main-style">
      <header-main />
      <el-container style="width: 100%;height: 100%;">
        <aside-main/>
        <el-main class="main-style">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
  import HeaderMain from "@/views/Header/HeaderMain";
  import AsideMain from "@/views/Aside/AsideMain";

  export default {
  name: "Structure",
  components: {AsideMain, HeaderMain }
};
</script>

<style scoped>
.main-container-style .el-main {
  padding: unset;
  width: 100%;
  height: 100%;
}
</style>
