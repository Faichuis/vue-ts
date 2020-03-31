import {hasOneOf} from '../util';
import {Vue} from "vue-property-decorator"

export default class Filter extends Vue {
    methods: any = {
        _filter(col, queryArr) {
            let value = [...this.value];
            this.insideTableData = value.filter(item => hasOneOf(item[col], queryArr));
            this._tableResize();
        },
        _cancelFilter() {
            this.insideTableData = [...this.value];
            this._tableResize();
        }
    }
};