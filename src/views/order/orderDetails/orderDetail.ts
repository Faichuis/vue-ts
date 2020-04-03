import {Component, Vue} from "vue-property-decorator"
import {Getter, Action} from "vuex-class"
import {OrderDetailData} from '@/types/views/orderdetail.interface'
import {OrderDetailTableData} from '@/core'
import _ from 'lodash'

@Component
export default class OrderDetail extends Vue {
    data: OrderDetailData = {
        tableData: Array(10).fill(new OrderDetailTableData(1, "123", "臭臭", "太原")),
    };

    public getOrders(meg: string) {
        alert(meg)
    }
}