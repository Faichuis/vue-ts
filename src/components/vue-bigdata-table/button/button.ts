import {Vue, Prop, Emit} from "vue-property-decorator"


export default class SortButton extends Vue {
    name: string = "Button";

    @Prop(String)
    type?: string;

    @Emit('click')
    click(e) {}

    handleClick(e) {
        this.click(e);
    }

}
