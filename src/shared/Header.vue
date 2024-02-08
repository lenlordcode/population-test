<template>
    <div class="header__container">
        <div class="header__block">
            <img src="@/assets/header/header_logo.png">
        </div>
    </div>
</template>

<style scoped>
  .header__container{
      background-image: url("@/assets/header/backgorund(1).png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      padding: 20px 40px;
      position: relative;
      top: 0;
      z-index: 100;
  }

  .header__block{
      margin: 0 auto;
      justify-content: space-between;
      max-width: 1800px;
  }

  .header__container img {
      width: 100px;
      height: 70px;
  }
</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Header"
})
</script>