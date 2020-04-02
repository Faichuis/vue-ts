import {Component, Vue, Prop, Emit} from "vue-property-decorator"

@Component
class SortButton extends Vue {
    name: string = "Input";

    @Prop() value!: [number, string];

    @Emit('input')
    input(value: [number, string]) {
    }

    handleInput(e) {
        this.input(e.target.value);
    }


    mounted() {
        this.input(this.value);
    }
}
