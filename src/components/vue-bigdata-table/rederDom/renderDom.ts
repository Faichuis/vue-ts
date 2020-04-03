import {Component, Vue, Prop} from "vue-property-decorator"

@Component
export default class RenderDom extends Vue {
    name: string = 'RenderCell';
    functional: boolean = true;

    @Prop({
        type: Function, default: (h, ctx) => {
            return ctx.props.render(h, ctx.props.backValue, ctx.parent);
        }
    })
    render!: (h, ctx) => {};

    @Prop([Number, Object])
    backValue?: object;
};
