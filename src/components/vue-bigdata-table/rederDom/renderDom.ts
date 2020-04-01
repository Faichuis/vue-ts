import {Vue, Prop} from "vue-property-decorator"

export default class RenderDom extends Vue {
    name: string = 'RenderCell';
    functional: boolean = true;
    props: any = {
        render: Function,
        backValue: [Number, Object]
    };
    render: any = (h, ctx) => {
        return ctx.props.render(h, ctx.props.backValue, ctx.parent);
    }
};
