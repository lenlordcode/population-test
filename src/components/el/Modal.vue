<template>
    <div class="el-modal" v-if="modelValue">
        <div class="el-modal__container">
            <div class="el-modal__cancel" @click="$emit('update:modelValue', false)">X</div>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
  .el-modal{
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
  }
  .el-modal__container{
      background: white;
      padding: 20px;
      border-radius: 10px;
  }

  .el-modal__cancel{
      display: flex;
      cursor: default;
      width: 20px;
      height: 26px;
  }

  .el-modal__cancel:hover{
      opacity: 0.85;
  }

  .el-modal__cancel:active{
      opacity: 0.25;
  }
</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Modal",
    props:{
        modelValue:{
            type: Boolean,
            default: false,
        },
    },
    data(){
        return{
            showModal: true,
        }
    },
    methods:{
        closeModal (){
            console.log (this.visibility);
        }
    }
})
</script>