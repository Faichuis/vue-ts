import {Component, Vue, Prop, Propsync} from "vue-property-decorator"

@Component
export default class RenderDom extends Vue {
    name: string = 'RenderCell';
    functional: boolean = true;

    @Prop({
        type: Function, default: () => {}
    })
    render?:()=>void;

    @Prop([Number,Object])
    backValue?: object;

    @Propsync
    render: any = (h, ctx) => {
        return ctx.props.render(h, ctx.props.backValue, ctx.parent);
    }
};
