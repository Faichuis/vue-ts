// test.Data 参数类型
export interface TestData {
    componentName: string
}

export interface StyleComputeData {
    wrapperHeight: number,
    scrollTop: number,
    moduleHeight: number, // 三个tr块中的一块的高度
    topPlaceholderHeight: number, // 顶部占位容器高度
    tableWidth: number,
    widthArr: number[], // 用于给数据表格传递列宽
    totalRowHeight: number, // 如果全量渲染应该是多高，用于计算占位
    currentScrollToRowIndex: number, // 当前跳转到的行号，用于做闪烁提示
    canSelectText: boolean, // 用于控制是否可选中表格文字
    indexWidthInside: number,
    outerWidth: number, // 外面容器宽度
    oldTableWidth: number, // 旧的表格宽度，用于重新计算列宽
    highlightRowIndex: number, // 高亮行号
    updateID: number
}

