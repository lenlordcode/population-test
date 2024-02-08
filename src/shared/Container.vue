<template>
  <div class="container">
      <slot></slot>
  </div>
</template>

<style scoped>
  .container{
      display: block;
      padding: 20px 40px;
      max-width: 1920px;
      margin: 0 auto;
      min-height:100%;
  }
</style>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Container"
})
</script>