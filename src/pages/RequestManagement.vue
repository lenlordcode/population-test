<template>
    <div class="rm__container">
        <el-modal v-model="modalApplication">
            <div class="rm__modal_application_container">
                <div class="rm__title __h1 __color_purple">ЗАЯВКА</div>
                <div class="rm__title __italic __color_purple">ID: {{this.applicationData.id}}</div>
                <div class="__margin_top_20">ФИО</div>
                <el-input :value="this.applicationData.name" readonly/>
                <div class="__margin_top_20">Email</div>
                <el-input :value="this.applicationData.email" readonly/>
                <div class="__margin_top_20">Институт</div>
                <el-input :value="this.applicationData.institut" readonly/>
                <div class="__margin_top_20">Заявление</div>
                <el-textarea :value="this.applicationData.zayava" readonly/>
                <el-button class="__margin_top_20 __width_p_100" @click="modalSelectRoom=true">Выбрать комнату</el-button>
                <div class="__space_between __margin_top_20">
                    <el-button :background="'cancel'" @click="modalRefuse=true">Отказать</el-button>
                    <el-button>Подтвердить</el-button>
                </div>
            </div>
        </el-modal>


        <el-modal v-model="modalSelectRoom">
            <div class="rm__app">
                <div class="rm__app_select">
                    <div>Выберите общежитие</div>
                    <select v-model="active_hostel">
                        <option v-for="(hostelItems, index) in testHouse.hostel">{{index}}</option>
                    </select>
                    <div v-if="active_hostel">
                        <div>Этаж</div>
                        <select v-model="active_floor">
                            <option v-for="(hostelFloor, index) in testHouse.hostel[active_hostel].floor">{{index}}</option>
                        </select>
                    </div>
                    <el-menu v-if="active_floor" v-model="active_room" type="horizontal">
                        <div class="el-menu__cell"
                             v-for="(room,roomIndex) in testHouse.hostel[active_hostel].floor[active_floor].rooms"
                             :id="room.number + 'list' + room.bed"
                             @click="setActiveRoomScheme(room.number,room.bed,room.name, room.number + 'scheme' + room.bed)">
                        {{'Комната №' + room.number + '. Кровать: №'+ room.bed + '. Проживает: '+ (room.name? room.name: 'пусто')}}
                        </div>
                    </el-menu>
                </div>
                <div class="rm__schema" v-if="active_floor">
                    <div class="rm__schema_room" v-for="(rooms, roomsIndex) in uniqueRooms">
                        <div v-bind:class="room.name? 'rm__schema_section_close':'rm__schema_section'" v-for="(room, roomIndex) in roomBeds(rooms)"
                             :id="room.number + 'scheme' + room.bed"
                             @click="setActiveRoom(room.number,room.bed,room.name, room.number + 'list' + room.bed)">
                            <img src="@/assets/scheme/bed.png" alt="Bed Image">
                            <div>{{room.number + '/' + room.bed}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <el-button>Выбрать</el-button>
        </el-modal>
        <el-modal v-model="modalRefuse">
            <div class="rm__title __h1 __color_purple">Укажите причину отказа</div>
            <el-textarea placeholder='Введите причину'/>
            <div class="__space_between __margin_top_20">
                <el-button :background="'cancel'" @click="modalRefuse=false">Отменить</el-button>
                <el-button>Отправить</el-button>
            </div>
        </el-modal>


        <el-menu class="rm__menu" :starterCell="true" v-model="menuMain">
            <div class="el-menu__cell" v-for="(item,index) in menuMainList" :key="index">{{item}}</div>
        </el-menu>
        <el-menu v-if="menuMain === 'Действующий список'" class="rm__menu __italic" :starterCell="true" v-model="menuSub">
            <div class="el-menu__cell" v-for="(item,index) in menuSubList" :key="index">{{item}}</div>
        </el-menu>
        <div class="rm__table">
            <div class="rm__table_header">
                <div class="rm__table_row_title __background_royal_blue">
                    <div class="rm__table_cell">ИД</div>
                    <div class="rm__table_cell">ФИО</div>
                    <div class="rm__table_cell">Email</div>
                    <div class="rm__table_cell">Институт</div>
                    <div class="rm__table_cell">Заявление</div>
                </div>
            </div>
            <div class="rm__table_body">
                <div class="rm__table_row" v-for="(item, index) in testTable" @click="openModalApplication(item)">
                    <div class="rm__table_cell">{{ item.id }}</div>
                    <div class="rm__table_cell">{{ item.name }}</div>
                    <div class="rm__table_cell">{{ item.email }}</div>
                    <div class="rm__table_cell">{{ item.institut }}</div>
                    <div class="rm__table_cell">{{ item.zayava }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
  .rm__container{

  }

  .rm__modal_application_container{
      width: 600px;
  }

  .rm__schema{
      display: grid;
      min-height: auto;
      border: 1px solid #000000;
      grid-template-columns: 50% 50%;
  }

  .rm__schema_room{
      display: grid;
      grid-template-columns: 50% 50%;
      border: 1px solid #000000;
      width: 150px;
      user-select: none;
  }

  .rm__schema_room img{
      width: 50%;
      height: 70%;
  }

  .rm__schema_section{
      display: block;
      width: 100%;
      height: 100%;
      background-color: #C0C0C0;
  }

  .rm__schema_section:hover{
      background-color: rgba(213,210,34, 0.8);
  }

  .rm__schema_section:active{
      background-color: rgba(213,210,34, 0.25);
  }

  .rm__schema_section_close{
      display: block;
      width: 100%;
      height: 100%;
      background-color: #941010;
  }

  .rm__schema_section_selected{
      background-color: #d5d222;
  }


  .rm__app{
      display: flex;
  }

  .rm__app_select{
      gap: 10px;
  }

  .rm__title{
      display: flex;
      justify-content: center;
      text-align: center;
  }

  .rm__menu{
      display: flex;
      justify-content: center;
      gap: 10px;
  }

  .rm__table{
      display: grid;
      margin: 10px auto;
      text-align: center;
  }

  .rm__table_row_title{
      display: grid;
      align-items: center;
      grid-template-columns: 100px 1fr 1fr 1fr 2fr;
  }

  .rm__table_row {
      display: grid;
      grid-template-columns: 100px 1fr 1fr 1fr 2fr;
      align-items: center;
      cursor: cell;
  }

  .rm__table_cell{
      padding: 10px;
  }

  .rm__table_row:hover {
      background: #C0C0C0;
  }
</style>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "RequestManagement",
    data(){
        return{
            modalApplication: false,
            modalRefuse: false,
            modalSelectRoom: false,
            menuMain: '',
            menuMainList: ['Открытые заявки','Действующий список'],
            menuSub: 'Действующий список',
            menuSubList: ['Действующий список', 'Корзина заявлений'],
            active_hostel: '',
            active_floor: '',
            active_room:'',
            active_bed: '',
            active_name: '',
            testHouse: {
                'hostel':{
                    'Общежитие №1':{
                        'floor':{
                            1:{rooms:[{number:101, bed:1, name:'Герасимов Л.А.'}, {number:101, bed:2, name:'Фархатов Т.Н.'},
                                    {number:102, bed:1, name:'Денисов Д.Д.'}, {number:102, bed:2, name:''},
                                    {number:103, bed:1, name:''}, {number:103, bed:2, name:'Леонтьев Т.К.'},
                                    {number:104, bed:1, name:''}, {number:104, bed:2, name:''},
                                    {number:105, bed:1, name:'Сазонов Л.Ф.'}, {number:105, bed:2, name:'Кириешкин М.Р.'},
                                    {number:106, bed:1, name:'Валдис П.С.'}, {number:106, bed:2, name:''},
                                    {number:107, bed:1, name:'Семенов Е.К.'}, {number:107, bed:2, name:'Иванов И.И.'},
                                    {number:108, bed:1, name:''}, {number:108, bed:2, name:''},
                                ]},
                            2:{rooms:[{number:201, bed:1, name:'Hereas Fasdds'}, {number:201, bed:2, name:'Fasqwt Qasdds'},]},
                            3:{rooms:[{number:301, bed:1, name:''}, {number:301, bed:2, name:''}]},
                        }
                    }
                }},
            applicationData: {id: '', name: '', email: '', institut: '', zayava: ''},
            testTable:[
                {id: 0, name: 'Александр Самапалов Заваренко',email:'samapal@mail.ru',
                    institut: 'МГУ–ППИ',
                    zayava: 'Прошу Вас заключить договор найма специализированного жилого помещения и предоставить мне во владение и пользования для временного проживания место в общежитие на период обучения в ФГБОУ ВО "МГУ им. Н.П. Огарева" с "10"  Июня  2024 г. на бюджетное основе.'},
                {id: 1, name: 'Эльбрсуов Варвар Чахалов',email:'fdsfsdqweq@mail.ru', institut: 'МГУ–ППИ', zayava: 'Прошу Вас заключить договор найма специализированного жилого помещения и предоставить мне во владение и пользования для временного проживания место в общежитие на период обучения в ФГБОУ ВО "МГУ им. Н.П. Огарева" с "25"  Июля  2024 г. на бюджетное основе.'},
                {id: 2, name: 'Эльбрсуов Варвар Чахалов',email:'fdsfsdqweq@mail.ru', institut: 'МГУ–ППИ', zayava: 'Прошу Вас заключить договор найма специализированного жилого помещения и предоставить мне во владение и пользования для временного проживания место в общежитие на период обучения в ФГБОУ ВО "МГУ им. Н.П. Огарева" с "25"  Июля  2024 г. на бюджетное основе.'},
                {id: 3, name: 'Эльбрсуов Варвар Чахалов',email:'fdsfsdqweq@mail.ru', institut: 'МГУ–ППИ', zayava: 'Прошу Вас заключить договор найма специализированного жилого помещения и предоставить мне во владение и пользования для временного проживания место в общежитие на период обучения в ФГБОУ ВО "МГУ им. Н.П. Огарева" с "25"  Июля  2024 г. на бюджетное основе.'},
                {id: 4, name: 'Эльбрсуов Варвар Чахалов',email:'fdsfsdqweq@mail.ru', institut: 'МГУ–ППИ', zayava: 'Прошу Вас заключить договор найма специализированного жилого помещения и предоставить мне во владение и пользования для временного проживания место в общежитие на период обучения в ФГБОУ ВО "МГУ им. Н.П. Огарева" с "25"  Июля  2024 г. на бюджетное основе.'},
                {id: 5, name: 'Эльбрсуов Варвар Чахалов',email:'fdsfsdqweq@mail.ru', institut: 'МГУ–ППИ', zayava: 'Прошу Вас заключить договор найма специализированного жилого помещения и предоставить мне во владение и пользования для временного проживания место в общежитие на период обучения в ФГБОУ ВО "МГУ им. Н.П. Огарева" с "25"  Июля  2024 г. на бюджетное основе.'},
                {id: 6, name: 'Эльбрсуов Варвар Чахалов',email:'fdsfsdqweq@mail.ru', institut: 'МГУ–ППИ', zayava: 'Прошу Вас заключить договор найма специализированного жилого помещения и предоставить мне во владение и пользования для временного проживания место в общежитие на период обучения в ФГБОУ ВО "МГУ им. Н.П. Огарева" с "25"  Июля  2024 г. на бюджетное основе.'},
            ],
        }
    },
    computed:{
        uniqueRooms() {
            const roomsSet = new Set(); // Используем Set для хранения уникальных номеров комнат
            const rooms = this.testHouse.hostel[this.active_hostel].floor[this.active_floor].rooms;
            for (const room of rooms) {
                roomsSet.add(room.number);
            }
            return Array.from(roomsSet); // Преобразуем Set обратно в массив
        },
    },
    methods:{
        roomBeds(roomNumber) {
            const rooms = this.testHouse.hostel[this.active_hostel].floor[this.active_floor].rooms;
            return rooms.filter(room => room.number === roomNumber);
        },

        setActiveRoom (number, bed, name, key){
            const clickedElement = event.target;
            console.log (key);
            if (!name){
                clickedElement.classList.add ('rm__schema_section_selected');
            }
            console.log ('test');
            document.getElementById(key).click()
            this.active_room = 'Комната №' + number + '. Кровать: №'+ bed + '. Проживает: '+ (name? name: 'пусто');
        },

        setActiveRoomScheme(number, bed, name, key){

            document.getElementById(key).click();
        },

        openModalApplication(items){
            const params = ['id', 'name', 'email', 'institut', 'zayava'];
            params.forEach(item => this.applicationData[item] = items[item]);
            this.modalApplication = true;
        },
        setCell (room, bed, name){
            this.active_room = room;
            this.active_bed = bed;
            this.active_name = name;
        }
    }
})
</script>
