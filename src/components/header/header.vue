<template>
    <div class="head">
        <!--<ul class="pp-head-menu">-->
        <!--<li v-if="isLogin" class="pp-head-item" style="color: #fff">-->
        <!--123-->
        <!--<div><router-link to='' style="color: #fff">{{UserInfo.UserName}}</router-link></div>-->

        <!--</li>-->
        <!--<li v-else class="pp-head-item">-->
        <!--<router-link to='/login' style="color: #fff">登录</router-link>-->
        <!--</li>-->
        <!--<li class="pp-head-item" v-show="isLogin">-->
        <router-link to='' v-for="(item,index) in selectData" :key="index">{{item}}</router-link>
        <!--</li>-->
        <!--<li v-if="isLogin" class="pp-head-item" @click="logout" style="margin:0">-->
        <!--<router-link to="" style="color: #fff">注销</router-link>-->
        <!--</li>-->
        <!--<li v-else class="pp-head-item">-->
        <!--<router-link to="">注册</router-link>-->
        <!--</li>-->
        <!--</ul>-->
    </div>
</template>
<script lang="ts" src="./header.ts"></script>
<style scoped>@import "header.scss";</style>
