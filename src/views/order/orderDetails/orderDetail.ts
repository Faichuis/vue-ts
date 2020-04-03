import {Component, Vue} from "vue-property-decorator"
import {OrderDetailData} from '@/types/views/orderdetail.interface'
import {OrderDetailTableData} from '@/core'
import {CommonVueBigDataTable} from "@/components";

@Component({
    components: {
        CommonVueBigDataTable
    }
})
export default class OrderDetail extends Vue {
    data: OrderDetailData = {
        tableData: Array(10).fill(new OrderDetailTableData(1, "123", "臭臭", "太原")),
    };

    public getOrders(meg: string) {
        alert(meg)
    }
}