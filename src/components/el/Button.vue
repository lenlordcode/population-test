<template>
    <button class='el-button'
            :background="background"
            @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<style scoped>
    .el-button{
        display: block;
        min-width: 180px;
        background-color: v-bind(setBackground);
        border-radius: 10px;
        padding: 8px;
        color: white;
        border: none;
    }


    .el-button:hover{
        opacity: 0.85;
    }

    .el-button:active {
        opacity: 0.25;
    }


</style>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Button",
    props:{
        background:{
            type: String,
            default: ''
        }
    },
    computed:{
        setBackground(){
            let backgroundColor = '#6a1779'
            if (this.background === 'cancel'){
                backgroundColor = '#941010';
            }
            return backgroundColor;
        }
    }
})
</script>
