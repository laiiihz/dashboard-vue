<template>
  <div id="app">
    <structure></structure>
  </div>
</template>
<script>
import Structure from "@/views/Structure";
export default {
  components: { Structure }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
