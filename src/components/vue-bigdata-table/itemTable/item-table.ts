import {Component, Vue, Prop} from "vue-property-decorator"
import {CommonRenderDom} from "@/components";
import VueBigDataTableClass from "@/components/vue-bigdata-table/vue-bigdata-table";


@Component({
    components: {
        CommonRenderDom
    }
})
export default class ItemTableClass extends VueBigDataTableClass {
    name: string = "ItemTable";

    @Prop(Number) times!: number;
    @Prop(Number) tableIndex!: number;
    @Prop(String) itemData!: string;
    @Prop(String) rowStyles?: string;
    @Prop(String) widthArr!: any;
    // @Prop(Object) columns!: any;
    @Prop(Number) itemNum!: number;
    // @Prop(String) showIndex?: any;
    // @Prop(String) indexRender?: any;
    // @Prop(String) stripe?: any;
    // @Prop(Number) fixedCol!: number;
    @Prop(Number) currentScrollToRowIndex?: number;
    // @Prop(Boolean) canEdit?: boolean;
    @Prop(String) edittingTd!: string;
    // @Prop(String) startEditType?: string;
    @Prop(Boolean) showFixedBoxShadow?: boolean;
    // @Prop(Function) editCellRender?: () => void;
    // @Prop(Function) beforeSave?: () => void;
    @Prop(Boolean) canSelectText?: boolean;
    @Prop({
        type: Object, default: () => {
            return {}
        }
    }) startSelect!: any;
    @Prop({
        type: Object, default: () => {
            return {}
        }
    }) endSelect!: any;
    // @Prop(Object) disabledHover?: boolean;
    // @Prop(Boolean) highlightRow?: boolean;
    @Prop(Number) highlightRowIndex?: number;
    // @Prop(Object) indexRenderParams?: object;

    // prefix: string = 'vue-bigdata-table-data-table';
    tableWidth: number = 0;
    currentMouseEnterIndex: number = -1;
    editInputValue: string = '';

    setAlign(i) {
        let columns = this.columns[i + this.baseIndex];
        if (!columns) {
            return
        }
        return this.prefix + '-' + columns.align;
    };

    static backValue(row, col) {
        return {
            '{row}': row,
            '{col}': col
        };
    };

    handleMouseIn(index) {
        if (!this.disabledHover) {
            return
        }
        this.currentMouseEnterIndex = index;
    };

    handleMouseLeave() {
        this.currentMouseEnterIndex = -1;
    };

    handleClickTr(row, initRowIndex) {
        this.$emit('on-click-tr', row, initRowIndex);
    };

    handleClickTd(row, col, initRowIndex) {
        this.$emit('on-click-td', {row, col, edittingTd: this.edittingTd, initRowIndex});
    };

    editCell(row, col) {
        this.$emit('on-edit-cell', row, col);
    };

    handleDblclickTd(row, col, value) {
        this.editInputValue = value;
        if (this.canEdit && this.startEditType === 'dblclick') {
            this.editCell(row, col)
        }
    };

    getSelectCellClasses(row, col) {
        let clomRow: string = 'row';
        let clomCol: string = 'col';
        let startSelect = this.startSelect;
        let endSelect = this.endSelect;
        let startRow = parseInt(startSelect[clomRow]);
        let endRow = parseInt(endSelect[clomRow]);
        let startCol = parseInt(startSelect[clomCol]);
        return [
            ((startRow === row) && startCol === col) ? 'start-select-cell' : '',
            ((endRow === row) && endSelect[clomCol] === col) ? 'end-select-cell' : '',
            ((startRow === row) && endSelect[clomCol] === col) ? 'right-top-select-cell' : '',
            ((endRow === row) && startCol === col) ? 'left-bottom-select-cell' : '',
            ((startRow === row) && col > startCol && col < endSelect[clomCol]) ? 'top-center-select-cell' : '',
            ((endRow === row) && col > startCol && col < endSelect[clomCol]) ? 'bottom-center-select-cell' : '',
            (startCol === col && row > startRow && row < endRow) ? 'left-center-select-cell' : '',
            (endSelect[clomCol] === col && row > startRow && row < endRow) ? 'right-center-select-cell' : ''
        ];
    };

    handlePaste(e) {
        const data = e.clipboardData.getData('text/plain');
        const rowsData = data.split((/[\n\u0085\u2028\u2029]|\r\n?/g)).map((row) => {
            return row.split('\t');
        });
        this.$emit('on-paste', rowsData);
    }

    get showTable() {
        return this.itemData.length > 0;
    };

    get indexBase() {
        return this.times * this.itemNum * 3 + this.itemNum * (this.tableIndex - 1);
    };

    get showCellRender() {
        return this.columns.map(item => {
            return item.cellRender ? item.cellRender : undefined;
        });
    };

    get baseIndex() {
        return this.showIndex ? 1 : 0;
    };

    get fixedColCom() {
        return this.showIndex ? (this.fixedCol - 1) : this.fixedCol;
    };

}
