import {Component, Vue} from "vue-property-decorator"

@Component
export default class Header extends Vue {
    selectData: any [] = ['登录', '退出', '注册'];

}
