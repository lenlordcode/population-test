<template>
    <div class="el-menu">
        <div :class="'el-menu__'+type" @click="setCell()">
            <slot></slot>
        </div>
    </div>
</template>

<style>
  .el-menu{
      cursor: pointer;
      user-select: none;
  }

  .el-menu__vertical{
      display: flex;
      border-radius: 10px;
  }

  .el-menu__horizontal{
      display: block;
  }

  .el-menu__cell{
      display: block;
      padding: 10px;
      color: rgba(0,0,0,0.5);
  }

  .el-menu__cell_active{
      color: rgba(0,0,0,1);
  }

  .el-menu__cell:hover{
      color: rgba(0, 0, 0, 0.8);
  }
  .el-menu__cell:active{
      color: rgba(0, 0, 0, 0.25);
  }

</style>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Menu",
    props:{
        modelValue:{
            type: String, Number,
            default: '',
        },
        type:{
            type:String,
            default: 'vertical'
        },
        starterCell:{
            type:Boolean,
            default: false,
        },
    },
    data(){
        return{
            cellStart: 0,
            activeElement: '',
        }
    },
    mounted() {
        this.setStarterCell();
    },
    methods:{
        setStarterCell(){
            if (this.starterCell){
                const cell = this.$el?.getElementsByClassName('el-menu__cell')[this.cellStart];
                cell.classList.add('el-menu__cell_active');
                this.$emit('update:modelValue', cell.textContent);
                this.activeElement = cell;
            }
        },
        setCell (){
            const clickedElement = event.target;
            if (clickedElement === this.activeElement){
                return
            }
            if (this.activeElement){
                this.activeElement.classList.remove('el-menu__cell_active');
            }
            clickedElement.classList.add('el-menu__cell_active');
            this.$emit('update:modelValue', clickedElement.textContent);
            this.activeElement = clickedElement;
        }
    }

})
</script>