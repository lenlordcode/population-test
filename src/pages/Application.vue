<template>
  <div class="application__container">
<!--      <div class="application__form_title __color_purple __h1 __bold">-->
<!--          <div>Заселение в общежития</div>-->
<!--          <div>(Форма заявление о заселение)</div>-->
<!--      </div>-->
      <div class="application__info">
          <div>
              <div class="application__info_title __bold">Для заселения в общежитие необходимо</div>
              <ul>
                  <li>Заявление (Поданное в электронном виде)</li>
                  <li>Медицинская справка (Загружается вместе с заявлением)</li>
                  <li>Флюорография (Загружается вместе с заявлением)</li>
              </ul>
          </div>
          <div class="__margin_top_40">
              <div class="application__info_title __bold">Пример заполнения заявления</div>
              <div class="__italic">
                  Прошу Вас заключить договор найма специализированного жилого помещения и предоставить
              мне во владение и пользования для временного проживания место в общежитие на период обучения в
              ФГБОУ ВО "МГУ им. Н.П. Огарева" с "____"&nbsp;&nbsp;___________&nbsp;&nbsp;20___ г. на ______________ основе.</div>
          </div>
      </div>



    <div class="application__form __color_purple">
        <div class="application__form_container">
            <div class="application__form_list">
                <div class="__margin_top_10">ФИО</div>
                <el-input v-model="fio"></el-input>
                <div class="__margin_top_10">E-MAIL</div>
                <el-input v-model="email"></el-input>
                <div class="__margin_top_10">Институт или факультет</div>
                <el-input v-model="institute"></el-input>
                <div class="__margin_top_10">Заявление о заселение</div>
                <el-textarea v-model="application"></el-textarea>
                <el-checkbox class="__margin_top_10" v-model="pdn">Согласие на обработку ПДН</el-checkbox>
                <el-button class="__margin_top_10 __width_p_100">Отправить запрос</el-button>
            </div>
        </div>
    </div>

  </div>
</template>

<style scoped>
  .application__container{
      display: flex;
      justify-content: center;
  }
  .application__info{
      margin: auto 0;
      align-items: center;
      max-width: 700px;
  }

  .application__info ul{
      padding: 0;
      list-style-type: none;
      margin: 0;
  }

  .application__form{
      margin: auto 100px;
  }

  .application__form_list{
      padding: 20px;
  }

  .application__form_container{
      margin: 0 auto;
      width: 650px;
      border-radius: 10px;
      box-shadow: 1px 1px 5px #000000;
  }

  .application__form_title{
      text-align: center;
      margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
      .application__container{
          display: block;
          max-width: 768px;
      }
  }

</style>



<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Application",
    data (){
        return{
            fio: '',
            institute: '',
            email: '',
            application: '',
            pdn: false,
        }
    }

})
</script>