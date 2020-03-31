import {Component, Vue, Prop} from "vue-property-decorator"
import {Getter, Action} from "vuex-class"

@Component({

})
export default class SortButton extends Vue {

    // Getter
    // @Getter author

    // Action
    @Action GET_DATA_ASYN

    // data
    @Prop() colIndex! : number;
    @Prop() currentSortColIndex! : number;
    @Prop() currentSortType! : string;

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
