<template>
    <input class="el-input"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)">
</template>

<style scoped>
  .el-input{
      width: 100%;
      background-color: #e3e3e3;
      height: 46px;
      border-radius: 10px;
      border: 0;
  }

  .el-input:hover {
      outline: 2px solid #660677;
  }

  .el-input:focus {
      outline: 2px solid #660677;
  }

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Input",
    props:{
        modelValue: {
            type: String,
            default: '',
        },
    }
})
</script>