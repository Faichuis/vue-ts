import {Component, Vue} from "vue-property-decorator"
import {HomeData} from "@/core"
import {CommonFooter, CommonHeader} from "@/components"
import mixins from '@/components/vue-bigdata-table/mixins'

@Component({
    components: {
        CommonFooter, CommonHeader
    }
})
export default class Home extends Vue {

    tableData: any[] = Array(20).fill(new HomeData('2016-05-02', '阿木木', '上海市普陀区金沙江路 1518 弄'));

    private created(){
        console.log(mixins);
        
    }
}
