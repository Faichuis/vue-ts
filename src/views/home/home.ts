import {Component, Vue} from "vue-property-decorator"
import {IndexData} from '@/types/views/index.interface'
import {HomeData} from "@/core"
import {CommonFooter, CommonHeader, CommonBigDataTable} from "@/components"

@Component({
    components: {
        CommonFooter, CommonHeader, CommonBigDataTable
    }
})
export default class Home extends Vue {

    tableData: any[] = Array(20).fill(new HomeData('2016-05-02', '阿木木', '上海市普陀区金沙江路 1518 弄'));

    created() {

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
