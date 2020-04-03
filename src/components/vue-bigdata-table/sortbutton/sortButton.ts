import {Component, Vue, Prop, Watch, Emit} from "vue-property-decorator"

@Component
export default class SortButton extends Vue {
    name: string = "sortButton";

    @Prop(Number) colIndex!: number;
    @Prop(Number) currentSortColIndex!: number;
    @Prop(String) currentSortType!: string;

    sortingType: string = '';

    @Emit('on-cancel-sort')
    onCancelSort() {
        alert(123)
    }

    @Emit('on-sort')
    onSort(colIndex: number, sortType: string) {
        alert(colIndex + sortType)
    }

    handleSort(e) {
        const sortType = e.target.getAttribute('data-sort-btn');
        if (this.sortingType === sortType) {
            this.sortingType = '';
            this.onCancelSort();
        } else {
            this.sortingType = sortType;
            this.onSort(this.colIndex, sortType);
        }
    }

    get currentActiveColSort() {
        return this.colIndex === this.currentSortColIndex;
    }

    @Watch('currentSortType')
    onCurrentSortTypeChange(type) {
        if (this.currentSortColIndex === this.colIndex) {
            this.sortingType = type
        }
    }
}
