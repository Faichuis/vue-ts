import {hasOneOf} from '../util';
import {Component, Mixins, Vue} from "vue-property-decorator"
import VueBigDataTableClass from "@/components/vue-bigdata-table/vue-bigdata-table";
import ItemTableClass from "@/components/vue-bigdata-table/itemTable/item-table";
import StyleComputeClass from "@/components/vue-bigdata-table/mixins/style-compute";
import DataHandleClass from "@/components/vue-bigdata-table/mixins/data-handle";

@Component
export default class FilterClass extends Vue {

    _filter(col, queryArr) {
        let value = [...this.value];
        this.insideTableData = value.filter(item => hasOneOf(item[col], queryArr));
        this._tableResize();
    };

    _cancelFilter() {
        this.insideTableData = [...this.value];
        this._tableResize();
    }
};