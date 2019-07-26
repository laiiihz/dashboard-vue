<template>
  <div style="width: 100%;height: 100%;">
    <keep-alive>
      <baidu-map
          style="width: 100%;height: 100%;"
          center="杭州"
          :scroll-wheel-zoom="true"
          :map-style="{
                features: [],
                style: 'light'
              }"
      > </baidu-map>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "MapViewMain"
};
</script>

<style scoped></style>
