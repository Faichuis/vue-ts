import {Component, Vue, Prop} from "vue-property-decorator"
import {CommonRenderDom, CommonSortButton, mixins} from "@/components";


@Component({
    components: {
        CommonRenderDom,
        CommonSortButton,
    }
})
export default class VueBigdataTable extends Vue {

    @Prop() showIndex: boolean = false;
    @Prop() rowNum!: number;
    @Prop() colNum!: number;
    @Prop() value!: [];
    @Prop() rowHeight!: number;
    @Prop() fixed!: boolean;
    @Prop() fixedWrapperWidth!: boolean;
    @Prop() disabledHover!: boolean;
    @Prop() highlightRow!: boolean;
    @Prop() columns!: [];
    @Prop() colWidth!: number;
    @Prop() headerHeight!: number;
    @Prop() headerTrStyle!: object;
    @Prop() indexWidth!: number;
    @Prop() indexRender!: () => void;
    @Prop() indexRenderParams!: object;
    @Prop() stripe!: boolean;
    @Prop() atLeftCellPosi!: number;
    @Prop() atRightCellPosi!: number;
    @Prop() fixedCol!: number;
    @Prop() appendNum!: number;
    @Prop() canEdit!: boolean;
    @Prop() startEditType!: string;
    @Prop() editCellRender!: () => void;
    @Prop() beforeSave!: () => void;
    @Prop() selectable!: boolean;
    @Prop() paste!: boolean;
    @Prop() sortable!: boolean;
    @Prop() sortIndex!: any;
    @Prop() defaultSort!: object;

    name: string = "bigdataTable";
    mixins = [...mixins];

    data: any = {
        prefix: 'vue-bigdata-table',
        insideTableData: [],
    };

    mounted() {
        // this.$nextTick(() => {
        //     this.insideTableData = this.setInitIndex(this.value);
        //     this._initMountedHandle();
        //     this.resize();
        // });
    }

    watch: any = {
        value() {
            this.$nextTick(() => {
                this.insideTableData = this.setInitIndex(this.value);
                this.initSort();
                this._initMountedHandle();
            });
        },
        insideTableData() {
            this._tableResize();
        },
        defaultSort() {
            this.insideTableData = this.setInitIndex(this.value);
            this._initMountedHandle();
            this.resize();
        }
    };
    methods: any = {
        // 涉及到表格容器尺寸变化或数据变化的情况调用此方法重新计算相关值
        resize(changeInitIndex) {
            // this.insideTableData = [...this.value]
            this.$nextTick(() => {
                if (changeInitIndex) {
                    this.insideTableData = this.setInitIndex(this.value)
                } else {
                    this.insideTableData = [...this.value];
                }
                this.initSort();
                // this._initMountedHandle();
            });
            // this._tableResize();
        },
        // 获取表格横向滚动的距离
        getScrollLeft() {
            return this.$refs.outer.scrollLeft;
        },
        // 调用此方法跳转到某条数据
        scrollToRow(row) {
            this._scrollToIndexRow(row);
        },
        // canEdit为true时调用此方法使第row+1行第col+1列变为编辑状态，这里的行列指的是表格显示的行和除序列号列的列
        editCell(row, col, scrollToView) {
            this._editCell(row, col, scrollToView);
        },
        // canEdit为true时调用此方法使指定单元格被选中
        selectCell(row, col) {
            this._selectCell(row, col);
        },
        // 手动设置高亮行
        setHighlightRow(row) {
            this._setHighlightRow(row);
        },
        /**
         * @argument {Number} col 要按哪一列筛选的列号
         * @argument {Array} queryArr 筛选关键字数组
         * @description 按照某一列的指定关键词进行筛选
         */
        filter(col, queryArr) {
            this._filter(col, queryArr);
        },
        /**
         * @description 取消筛选
         */
        cancelFilter() {
            this._cancelFilter();
        },
        undo() {
            this._undo();
        },
        /**
         * @description 清除高亮项目
         */
        clearCurrentRow() {
            this._clearCurrentRow();
        },
        /**
         * @description 获取指定行的初始行号
         */
        getInitRowIndexByIndex(row) {
            return this._getInitRowIndexByIndex(row);
        },
        /**
         * @description 获取指定初始行号的当前行号
         */
        getIndexByInitRowIndex(initRow) {
            return this._getIndexByInitRowIndex(initRow);
        }
    }

}
