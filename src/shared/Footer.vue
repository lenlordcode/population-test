<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__info">
                <div class="__little">(C) 1998-2023 МГУ им. Н.П. ОГАРЕВА</div>
                <div class="__little">При использование материалов сайта ссылка на источник обязательна</div>
            </div>
            <div class="footer__social">
                <a href="https://vk.com/" class="footer__link">
                    <img src="@/assets/footer/icon_vk.png">
                </a>
                <a href="https://youtube.com/" class="footer__link">
                    <img src="@/assets/footer/icon_youtube.png">
                </a>
                <a href="https://web.telegram.org" class="footer__link">
                    <img src="@/assets/footer/icon_telegram.png">
                </a>
                <a href="https://ok.ru/" class="footer__link">
                    <img src="@/assets/footer/icon_ondoklassniki.png">
                </a>
                <a href="https://dzen.ru/" class="footer__link">
                    <img src="@/assets/footer/icon_dzen.png">
                </a>
            </div>
        </div>
    </footer>

</template>

<style scoped>

  .footer{
      background: #C0C0C0;
      border-top: solid 1px #8082fb;
      position: fixed;
      bottom: 0;
      width: 100%;
      z-index: 100;
      height: auto;
  }

  .footer__container{
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      max-width: 1800px;
      padding: 20px;
  }

  .footer__link{
      margin-right: 8px;
  }

  .footer__container img{
      width: 36px;
      height: 36px;
  }

  .footer__container img:hover {
      opacity: 0.85;
  }

  .footer__social{
      margin-top: 10px;
      display: flex;
  }

</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Footer"
})
</script>