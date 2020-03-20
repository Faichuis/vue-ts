import {Component, Vue} from "vue-property-decorator"
import {Getter, Action} from "vuex-class"

@Component({
})
export default class About extends Vue {
    // Getter
    // @Getter author

    // Action
    @Action GET_DATA_ASYN

    // data

    created() {
        this.GET_DATA_ASYN()
    }

    activated() {
        //
    }

    mounted() {
        //

    }

    // 初始化函数
    init() {
        //
    }

}
