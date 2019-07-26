<template>
  <el-aside
      class="hidden-md-and-down"
      :width="`${$store.state.asideOpen ? '400px' : '40px'}`"
  >
  </el-aside>
</template>
<script>
  export default {
    name: 'aside-main'
  }
</script>
