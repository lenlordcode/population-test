import ELInput from "./el/Input.vue";
import ELTextArea from "./el/TextArea.vue"
import ElCheckBox from "./el/Checkbox.vue"
import ElButton from "./el/Button.vue"
import ELModal from "./el/Modal.vue"
import ELMenu from "./el/Menu.vue"


const components ={
    'el-input': ELInput,
    'el-textarea': ELTextArea,
    'el-checkbox': ElCheckBox,
    'el-button': ElButton,
    'el-modal': ELModal,
    'el-menu': ELMenu,
}

function install(app) {
    Object.keys(components).forEach((name) => {
        app.component(name, components[name]);
    });
}

export default {install};