import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { orderDetalData } from '@/types/views/orderdetail.interface'
import { OrderDetalTableData } from '@/types/constents/contents'


@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  @Action GET_DATA_ASYN

  // data
  data: orderDetalData = {
    tableData: Array(20).fill(new OrderDetalTableData(1,"123","臭臭","太原")),
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

  // 初始化函数
  init() {
    //
  }

}