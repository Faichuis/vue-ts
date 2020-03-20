<template>
    <div class="index-wrap">
        <common-header></common-header>
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px">
                <el-menu router :default-active="$route.path" background-color="#fff" text-color="black"
                         active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <template slot="title">
                            <i class="el-icon-s-data"></i>明细
                        </template>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-s-order"></i>订单
                        </template>
                        <el-menu-item index="/orderdetails">订单明细</el-menu-item>
                        <el-menu-item index="shipmentdetails">出货明细</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-goods"></i>商品
                        </template>
                        <el-menu-item index="2-1">规格</el-menu-item>
                        <el-menu-item index="2-2">详情</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-setting"></i>库存
                        </template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-setting"></i>设置
                        </template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
        </el-container>
        <common-footer></common-footer>
    </div>
</template>

<script lang="ts" src="./home.ts">
</script>

<style lang="scss">
    @import "home";
</style>
