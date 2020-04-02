import {Component, Vue, Prop, Watch} from "vue-property-decorator"
import {CommonRenderDom, CommonSortButton, InputRender, mixins} from "@/components";


@Component
class VueBigDataTable extends Vue {
    name: string = "vue-big-data-table";

    @Prop(Boolean)
    showIndex?: boolean; // 是否显示序列号列
    @Prop(Number)
    rowNum?: number;
    @Prop(Number)
    colNum?: number;
    @Prop(Array)
    value!: []; // 表格数据二维数组
    @Prop({type: Number, default: 48})
    rowHeight?: number; // 表格行高
    @Prop({type: Boolean, default: false})
    fixed?: boolean; // 是否固定表头
    @Prop({type: Boolean, default: false})
    fixedWrapperWidth?: boolean; // 设为true后表格列宽总是平分容器宽度减去indexWidth后的宽度
    @Prop({type: Boolean, default: true})
    disabledHover?: boolean; // 是否取消鼠标悬浮高亮效果
    @Prop({type: Boolean, default: false})
    highlightRow?: boolean; // 点击一行是否高亮
    @Prop(Array)
    columns?: []; // 表头数组，元素为单个表头的对象，【{ title: 'xxx', render: (h) => {} }】
    @Prop({type: Number, default: 100})
    colWidth?: number; // 列宽，如果单独列中指定了宽度则按单独列，如果所有宽度加起来比容器宽度小，则平分宽度，否则用colWidth
    @Prop({type: Number, default: 52})
    headerHeight?: number; // 表头高度
    @Prop({
        type: Object, default: () => {
            return {}
        }
    })
    headerTrStyle?: object; // 表头tr行的样式
    @Prop(Number) indexWidth?: number; // 序列号列宽，如果没有设置，则会根据数据行数自动计算适合的宽度
    @Prop({
        type: Function, default: (h, params) => {
            return h('span', params.index + 1)
        }
    })
    indexRender?: () => void; // 序列号渲染render
    @Prop({
        type: Object, default: () => {
            return {}
        }
    })
    indexRenderParams?: object; // indexRender的第三个参数
    @Prop(Boolean)
    stripe?: boolean; // 是否显示斑马线
    @Prop({type: Number, default: 80})
    atLeftCellPosi?: number; // 当前鼠标在表头单元格左侧atLeftCellPosi像素处
    @Prop({type: Number, default: 80})
    atRightCellPosi?: number; // 当前鼠标在表头单元格右侧atRightCellPosi像素处
    @Prop({type: Number, default: 1})
    fixedCol?: number; // 固定的列的范围，[0, fixedCol]，设为2即固定0，1，2列，这三列横向不滚动
    @Prop({type: Number, default: 15})
    appendNum?: number; // 根据表格容器高度计算内置单个表格（1/3）渲染的行数基础上额外渲染的行数，行数越多表格接替渲染效果越好，但越耗性能
    @Prop({type: Boolean, default: false})
    canEdit?: boolean; // 当前是否可编辑
    @Prop({type: String, default: 'dblclick'})
    startEditType?: string; // 触发编辑单元格的方式，enum:['dblclick' => 双击单元格]
    @Prop({type: Function, default: InputRender})
    editCellRender?: () => void; // 编辑单元格所渲染元素的render函数，如果不传则使用内置元素
    @Prop({
        type: Function, default: () => {
            return true
        }
    })
    beforeSave?: () => void; // 保存修改的单元格内容之前的钩子，如果该函数返回false，则阻止保存
    @Prop({type: Boolean, default: false})
    selectable?: boolean; // 是否可选择单元格
    @Prop({type: Boolean, default: false})
    paste?: boolean; // 是否可粘贴，如果设为true，则selectable效果为true
    @Prop({type: Boolean, default: false})
    sortable?: boolean; // 是否可排序
    @Prop([Array, Number])
    sortIndex?: any; // 开启排序的列序号数组或序号
    @Prop(Object)
    defaultSort?: object;

    mixins = [...mixins];
    prefix: string = 'vue-bigdata-table';
    insideTableData: [] = [];


    mounted() {
        // this.$nextTick(() => {
        //     this.insideTableData = this.setInitIndex(this.value);
        //     this._initMountedHandle();
        //     this.resize();
        // });
    }

    @Watch('value')
    onValueChange() {
        // this.$nextTick(() => {
        //     this.insideTableData = this.setInitIndex(this.value);
        //     this.initSort();
        //     this._initMountedHandle();
        // });
    }

    @Watch('insideTableData')
    onInsideTableDataChange() {
        // this._tableResize();
    }

    @Watch('defaultSort')
    onDefaultSortChange() {
        // this.insideTableData = this.setInitIndex(this.value);
        // this._initMountedHandle();
        // this.resize();
    }

    // methods: any = {
    // 涉及到表格容器尺寸变化或数据变化的情况调用此方法重新计算相关值
    resize(changeInitIndex) {
        // this.insideTableData = [...this.value]
        // this.$nextTick(() => {
        //     if (changeInitIndex) {
        //         this.insideTableData = this.setInitIndex(this.value)
        //     } else {
        //         this.insideTableData = [...this.value];
        //     }
        //     this.initSort();
        //     // this._initMountedHandle();
        // });
        // this._tableResize();
    }

    // 获取表格横向滚动的距离
    getScrollLeft() {
        // return this.$refs.outer.scrollLeft;
    }

    // 调用此方法跳转到某条数据
    scrollToRow(row) {
        // this._scrollToIndexRow(row);
    }

    // canEdit为true时调用此方法使第row+1行第col+1列变为编辑状态，这里的行列指的是表格显示的行和除序列号列的列
    editCell(row, col, scrollToView) {
        // this._editCell(row, col, scrollToView);
    }

    // canEdit为true时调用此方法使指定单元格被选中
    selectCell(row, col) {
        // this._selectCell(row, col);
    }

    // 手动设置高亮行
    setHighlightRow(row) {
        // this._setHighlightRow(row);
    }

    /**
     * @argument {Number} col 要按哪一列筛选的列号
     * @argument {Array} queryArr 筛选关键字数组
     * @description 按照某一列的指定关键词进行筛选
     */
    filter(col, queryArr) {
        // this._filter(col, queryArr);
    }

    /**
     * @description 取消筛选
     */
    cancelFilter() {
        // this._cancelFilter();
    }

    undo() {
        // this._undo();
    }

    /**
     * @description 清除高亮项目
     */
    clearCurrentRow() {
        // this._clearCurrentRow();
    }

    /**
     * @description 获取指定行的初始行号
     */
    getInitRowIndexByIndex(row) {
        // return this._getInitRowIndexByIndex(row);
    }

    /**
     * @description 获取指定初始行号的当前行号
     */
    getIndexByInitRowIndex(initRow) {
        // return this._getIndexByInitRowIndex(initRow);
    }

    // }

}
