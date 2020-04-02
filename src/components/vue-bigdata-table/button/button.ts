import {Vue, Prop, Emit} from "vue-property-decorator"


export default class SortButton extends Vue {
    name: string = "Button";

    @Prop(String)
    type?: string;

    @Emit('click')
    click(e: any) {
        alert(123)
    }

    handleClick(e) {
        this.click(e);
    }

}
