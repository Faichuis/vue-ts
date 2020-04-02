import {Vue, Prop, Watch} from "vue-property-decorator"

export default class SortButton extends Vue {
    name: string = "Input";

    @Prop() value!: [number, string];

    methods: any = {
        handleInput(e) {
            this.$emit('input', e.target.value);
        }
    };

    mounted() {
        this.$emit('input', this.value);
    }
}
