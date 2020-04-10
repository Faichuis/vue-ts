import {Vue, Prop, Emit, Component} from "vue-property-decorator"

@Component
export default class SortButton extends Vue {


    @Prop(String) type!: string;

    @Emit('click') click(event: any) {}

    private handleClick(event: any) {
        this.click(event);
    }

}
