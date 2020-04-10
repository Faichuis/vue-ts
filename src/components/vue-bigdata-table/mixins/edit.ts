import {findNodeUpper} from '../util';
import {Component, Mixins, Vue, Watch} from "vue-property-decorator"
import VueBigDataTableClass from "@/components/vue-bigdata-table/vue-bigdata-table";
import ItemTableClass from "@/components/vue-bigdata-table/itemTable/item-table";
import DataHandleClass from "@/components/vue-bigdata-table/mixins/data-handle";
import StyleComputeClass from "@/components/vue-bigdata-table/mixins/style-compute";

@Component
export default class EditClass extends Vue {

    // edittingTd: string = ''; // 正在编辑的单元格的行号和列号拼接的字符串 `${row}-${col}`
    editContent: string = ''; // 用来保存编辑的内容
    selectCellsStart: any = {}; // 编辑模式下可选中多行多列，此用来保存其实单元格行列号
    selectCellsEnd: any = {};
    selectTotalColStartIndex: number = -1; // 选取整列起始序列号
    selectTotalColEndIndex: number = -1;

    get startSelect() {
        return {
            row: Math.min(this.selectCellsStart.row, this.selectCellsEnd.row),
            col: Math.min(this.selectCellsStart.col, this.selectCellsEnd.col)
        };
    };

    get endSelect() {
        return {
            row: Math.max(this.selectCellsStart.row, this.selectCellsEnd.row),
            col: Math.max(this.selectCellsStart.col, this.selectCellsEnd.col)
        };
    }

    @Watch('selectable')
    onSelectableChange() {
        this.selectCellsStart = {
            row: -1,
            col: -1
        };
        this.selectCellsEnd = {
            row: -1,
            col: -1
        };
    }

    _editCell(row, col, scrollToView = true) {
        if (!this.canEdit || row < 0 || row > this.insideTableData.length || col < 0 || col > this.columns.length || this.edittingTd === `${row}-${col}`) {
            return
        }
        if (scrollToView && parseInt(this.edittingTd.split('-')[0], 36) !== row) {
            this.scrollToRow(row)
        }
        this.edittingTd = `${row}-${col}`;
    };

    handleMousedownOnTable(e) {
        if (e.button !== 0 || (!this.paste && !this.selectable)) {
            return
        }
        let currentTd = e.target.tagName === 'TD' ? e.target : findNodeUpper(e.target, 'td');
        this.selectCellsStart = {
            row: currentTd.getAttribute('data-row'),
            col: currentTd.getAttribute('data-col')
        };
        this.selectCellsEnd = {
            row: currentTd.getAttribute('data-row'),
            col: currentTd.getAttribute('data-col')
        };
        this.canSelectText = false;
        document.addEventListener('mousemove', this.handleMoveOnTable);
        document.addEventListener('mouseup', this.handleUpOnTable);
    };

    handleMoveOnTable(e) {
        if (!(e.target.tagName === 'TD' || findNodeUpper(e.target, 'td'))) {
            return
        }
        let currentTd = e.target.tagName === 'TD' ? e.target : findNodeUpper(e.target, 'td');
        this.selectCellsEnd = {
            row: currentTd.getAttribute('data-row'),
            col: currentTd.getAttribute('data-col')
        };
    };

    handleUpOnTable(e) {
        if (!this.paste && !this.selectable) {
            return
        }
        this.canSelectText = true;
        this.handleMoveOnTable(e);
        document.removeEventListener('mousemove', this.handleMoveOnTable);
        document.removeEventListener('mouseup', this.handleUpOnTable);
        this.$emit('on-select-cells', {
            start: {
                row: this.startSelect.row,
                col: this.startSelect.col
            },
            end: {
                row: this.endSelect.row,
                col: this.endSelect.col
            }
        });
    };

    _selectCell(row, col) {
        this.selectCellsStart = {row, col};
        this.selectCellsEnd = {row, col};
    }
};
