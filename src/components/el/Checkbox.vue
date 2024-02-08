<template>
    <input class="el-checkbox"
           :type="type"
           :value="modelValue"
           @change="$emit('update:modelValue', $event.target.checked)">
    <label><slot></slot></label>
</template>

<style scoped>
  .el-checkbox{
      width: 20px;
      height: 20px;
  }
  .el-checkbox:before {
      border: 50px solid #0000FF;
  }
</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Checkbox",
    props:{
        modelValue:{
            type: Boolean,
            default: false,
        },
        type:{
            type: String,
            default: 'checkbox'
        }
    }
})
</script>