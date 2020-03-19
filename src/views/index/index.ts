import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { IndexData } from '@/types/views/index.interface'
import { HomeData } from "@/types/constents/contents"
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  @Action GET_DATA_ASYN

  // data
  data: IndexData = {
    tableData: Array(20).fill(new HomeData('2016-05-02','阿木木','上海市普陀区金沙江路 1518 弄'))
    
  }

  created() {
    this.GET_DATA_ASYN()
  }

  activated() {
    //
  }

  mounted() {
    //
    console.log(this.data.tableData);
    
  }

  // 初始化函数
  init() {
    //
  }

}
