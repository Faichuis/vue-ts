import {Component, Vue, Prop} from "vue-property-decorator"

@Component
export default class RenderDom extends Vue {
    name: string = 'RenderCell';
    functional: boolean = true;

    @Prop(Function)
    render?: () => void;

    @Prop([Number, Object])
    backValue?: object;

    render1 = (h, ctx) => {
        return ctx.props.render(h, ctx.props.backValue, ctx.parent);
    }
};
