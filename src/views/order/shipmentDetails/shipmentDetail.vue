<template>
    <div>
        <el-table :data="data.tableData">
            <el-table-column prop="id" label="orderId" width="140"></el-table-column>
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <el-button type="primary" @click="getOrders(111)">点击</el-button>
    </div>
</template>

<script lang="ts" src="./shipmentDetail.ts"></script>