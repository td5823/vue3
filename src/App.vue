<template>
  <div>
    <h1>App组件</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// const str = '我爱你祖国'

console.log('123123')

export default defineComponent({
  setup() {
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
