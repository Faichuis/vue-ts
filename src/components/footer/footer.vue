<template>
    <div class="footer">
        <div class="footer_w clearfix">
            <div class="footer_c">
                <ul class="flex-style">
                    <li class="footer-con footer-logo">
                        <div class="logo">
                            <router-link to="/home">
                                <el-image src="" alt="FeiCui的Logo" class="footer-img"></el-image>
                            </router-link>
                        </div>
                    </li>
                    <li class="footer-con">
                        <div class="marginB20">
                            <router-link to="" title="XXX服务条款">服务条款</router-link>
                        </div>
                        <div class="">
                            <router-link to="" title="XXX隐私政策">隐私政策</router-link>
                        </div>
                    </li>
                    <li class="footer-con">
                        <div class="marginB20">
                            <a href="" target="_blank" class="">关于我们</a>
                        </div>
                        <div class="">
                            <a href="" target="_blank" class="">联系我们</a>
                        </div>
                    </li>
                    <li class="footer-con">
                        <div class="marginB20">
                            <a href="" target="_blank">帮助</a>
                        </div>
                        <div class="">
                            <a href="">代理人</a>
                        </div>
                    </li>
                    <li class="footer-con">
                        <div class="footer-icons marginB20">
                            <a href="" target="_blank">
                                <div class="sprit_5"></div>
                            </a>
                            <a href="" target="_blank">
                                <div class="sprit_6"></div>
                            </a>
                            <a href="" target="_blank">
                                <div class="sprit_7"></div>
                            </a>
                        </div>
                        <div class="">
                            <a href="javascript:void(0);" onclick="Comm100API.open_chat_window(event, 342); "
                               class="live_chat btn_common">在线客服</a>
                        </div>
                    </li>
                    <li class="footer-con">
                    </li>
                </ul>
            </div>
        </div>
        <div class="copy"><a href="javascript:" class="copy_1">Faichuis</a></div>
        <div id="comm100-button-342"></div>
    </div>
</template>
<script lang="ts" src="./footer.ts"></script>
<style scoped>@import "footer.scss";</style>

