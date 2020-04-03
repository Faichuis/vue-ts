import {hasOneOf} from '../util';
import {Component, Mixins} from "vue-property-decorator"
import VueBigDataTableClass from "@/components/vue-bigdata-table/vue-bigdata-table";
import ItemTableClass from "@/components/vue-bigdata-table/itemTable/item-table";
import StyleComputeClass from "@/components/vue-bigdata-table/mixins/style-compute";

@Component
export default class FilterClass extends Mixins(VueBigDataTableClass, ItemTableClass, StyleComputeClass) {

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