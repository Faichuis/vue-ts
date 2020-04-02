import {Vue, Prop, Emit} from "vue-property-decorator"

export default class SortButton extends Vue {
    name: string = "Input";

    @Prop() value!: [number, string];

    @Emit('input')
    input(value: [number, string]) {}

    methods: any = {
        handleInput(e) {
            this.input(e.target.value);
        }
    };


    mounted() {
        this.input(this.value);
    }
}
