import {HomeData} from "@/types/constents/contents"

// index.Data 参数类型
export interface IndexData {
    tableData: HomeData[],
}

// VUEX index.State 参数类型
export interface IndexState {
    author?: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

