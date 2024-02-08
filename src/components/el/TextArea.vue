<template>
  <textarea class="el-textarea" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<style scoped>
  .el-textarea{
      background-color: #e3e3e3;
      height: 170px;
      width: 100%;
      border-radius: 10px;
      border: 0;
      resize: none;
      outline: 0;
      outline-offset: 0;
  }

  .el-textarea:hover {
      outline: 2px solid #660677;
  }

  .el-textarea:focus {
      outline: 2px solid #660677;
  }
</style>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "TextArea",
    props:{
        modelValue:{
            type: String,
            default: '',
        }
    }

})
</script>