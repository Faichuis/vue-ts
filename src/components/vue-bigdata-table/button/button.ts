import {Vue, Prop} from "vue-property-decorator"


export default class SortButton extends Vue {
    name: string = "Button";

    @Prop() type!: string;


    methods: any = {
        handleClick (e) {
            this.$emit('click', e);
        }
    };

}
