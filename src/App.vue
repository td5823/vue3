<template>
  <div>
    <h1>App组件</h1>
    <el-button :icon="Plus">anniu</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

console.log("123123123123123123")

export default defineComponent({
  setup() {
    const a = ''
    return {}
  },
})
</script>

<style scoped>
.box {
  width: 600px;
  height: 400px;
  background: black;

  h1 {
    color: white;
  }
}
</style>
