import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { OrderDetailData } from '@/types/views/orderdetail.interface'
import { OrderDetailTableData } from '@/types/constents/contents'
import _ from 'lodash'

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  @Action GET_DATA_ASYN

  // data
  data: OrderDetailData = {
    tableData: Array(10).fill(new OrderDetailTableData(1, "123", "臭臭", "太原")),
  }

  created() {
    this.GET_DATA_ASYN()
  }

  activated() {
    //
  }

  mounted() {
    //
  }
   getOrders( id: number, name?: string): void {
     alert(id)
  }

}