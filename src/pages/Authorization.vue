<template>
    <div class="authorization__container">
        <div class="authorization__title __color_purple __bold">АВТОРИЗАЦИЯ</div>
        <div class="__margin_top_20">Логин</div>
        <el-input v-model="login"></el-input>
        <div class="__margin_top_20">Пароль</div>
        <el-input v-model="password" class="__margin_top_20"></el-input>
        <el-button class="__margin_top_20 __width_p_100">Авторизироваться</el-button>
    </div>
</template>

<style scoped>
  .authorization__container{
      margin: 100px auto;
      width: 500px;
      padding: 20px;
      border: 2px solid #000000;
      border-radius: 8px;
  }

  .authorization__title{
      text-align: center;
  }
</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Authorization",
    data(){
        return{
            login: '',
            password: ''
        }
    }
})
</script>