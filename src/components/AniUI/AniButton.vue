<template>
  <button @click="handleClick"></button>
</template>

<script>
  export default {
    name: "AniButton",
    methods: {
      handleClick(evt) {
        this.$emit("click",evt)
      }
    }
  }
</script>

<style scoped>

</style>
