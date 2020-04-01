import {Vue, Prop} from "vue-property-decorator"
import {SortButtonData} from "@/types/components/components.interface";


export default class SortButton extends Vue {
    name: string = "sortButton";


    @Prop() colIndex!: number;
    @Prop() currentSortColIndex!: number;
    @Prop() currentSortType!: string;

    data: SortButtonData = {
        sortingType: '',
    };

    methods: any = {
        handleSort(e) {
            const sortType = e.target.getAttribute('data-sort-btn');
            if (this.sortingType === sortType) {
                this.sortingType = '';
                this.$emit('on-cancel-sort');
            } else {
                this.sortingType = sortType;
                this.$emit('on-sort', this.colIndex, sortType);
            }
        }
    };

    computed: any = {
        currentActiveColSort() {
            return this.colIndex === this.currentSortColIndex;
        }
    };
    watch: any = {
        currentSortType(type) {
            if (this.currentSortColIndex === this.colIndex) this.sortingType = type;
        }
    };
}
