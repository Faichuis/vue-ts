import {Component, Vue, Prop} from "vue-property-decorator"
import {SortButtonData} from "@/types/components/components.interface";
import {CommonRenderDom} from "@/components";


@Component({
    components: {
        CommonRenderDom
    }
})
export default class SortButton extends Vue {
    name: string = "ItemTable";


    @Prop() times!: number;
    @Prop() tableIndex!: number;
    @Prop() itemData!: string;
    @Prop() rowStyles!: string;
    @Prop() widthArr!: string;
    @Prop() columns!: string;
    @Prop() itemNum!: string;
    @Prop() showIndex!: string;
    @Prop() indexRender!: string;
    @Prop() stripe!: string;
    @Prop() fixedCol!: string;
    @Prop() currentScrollToRowIndex!: number;
    @Prop() canEdit!: boolean;
    @Prop() edittingTd!: string;
    @Prop() startEditType!: string;
    @Prop() showFixedBoxShadow!: boolean;
    @Prop() editCellRender!: Function;
    @Prop() beforeSave!: Function;
    @Prop() canSelectText!: boolean;
    @Prop() startSelect!: object;
    @Prop() endSelect!: object;
    @Prop() disabledHover!: boolean;
    @Prop() highlightRow!: boolean;
    @Prop() highlightRowIndex!: number;
    @Prop() indexRenderParams!: object;

    data: any = {
        prefix: 'vue-bigdata-table-data-table',
        tableWidth: 0,
        currentMouseEnterIndex: -1,
        editInputValue: ''
    };

    methods: any = {
        setAlign(i) {
            let columns = this.columns[i + this.baseIndex];
            if (!columns) return;
            let col = columns;
            return this.prefix + '-' + col.align;
        },
        backValue(row, col) {
            return {
                row: row,
                col: col
            };
        },
        handleMouseIn(index) {
            if (!this.disabledHover) return;
            this.currentMouseEnterIndex = index;
        },
        handleMouseLeave() {
            this.currentMouseEnterIndex = -1;
        },
        handleClickTr(row, initRowIndex) {
            this.$emit('on-click-tr', row, initRowIndex);
        },
        handleClickTd(row, col, initRowIndex) {
            this.$emit('on-click-td', {row, col, edittingTd: this.edittingTd, initRowIndex});
        },
        editCell(row, col) {
            this.$emit('on-edit-cell', row, col);
        },
        handleDblclickTd(row, col, value) {
            this.editInputValue = value;
            if (this.canEdit && this.startEditType === 'dblclick') this.editCell(row, col);
        },
        getSelectCellClasses(row, col) {
            let startSelect = this.startSelect;
            let endSelect = this.endSelect;
            let startRow = parseInt(startSelect['row']);
            let endRow = parseInt(endSelect['row']);
            let startCol = parseInt(startSelect['col']);
            return [
                ((startRow === row) && startCol === col) ? 'start-select-cell' : '',
                ((endRow === row) && endSelect['col'] === col) ? 'end-select-cell' : '',
                ((startRow === row) && endSelect['col'] === col) ? 'right-top-select-cell' : '',
                ((endRow === row) && startCol === col) ? 'left-bottom-select-cell' : '',
                ((startRow === row) && col > startCol && col < endSelect['col']) ? 'top-center-select-cell' : '',
                ((endRow === row) && col > startCol && col < endSelect['col']) ? 'bottom-center-select-cell' : '',
                (startCol === col && row > startRow && row < endRow) ? 'left-center-select-cell' : '',
                (endSelect['col'] === col && row > startRow && row < endRow) ? 'right-center-select-cell' : ''
            ];
        },
        handlePaste(e) {
            const data = e.clipboardData.getData('text/plain');
            const rowsData = data.split((/[\n\u0085\u2028\u2029]|\r\n?/g)).map((row) => {
                return row.split('\t');
            });
            this.$emit('on-paste', rowsData);
        }
    };

    computed: any = {
        showTable() {
            return this.itemData.length > 0;
        },
        indexBase() {
            return this.times * this.itemNum * 3 + this.itemNum * (this.tableIndex - 1);
        },
        showCellRender() {
            return this.columns.map(item => {
                return item.cellRender ? item.cellRender : undefined;
            });
        },
        baseIndex() {
            return this.showIndex ? 1 : 0;
        },
        fixedColCom() {
            return this.showIndex ? (this.fixedCol - 1) : this.fixedCol;
        }
    };

}
