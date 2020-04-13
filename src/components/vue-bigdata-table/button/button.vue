<template>
    <button class="vue-bigdata-table-button" @click="handleClick">
        <span v-if="type === 'confirm'" class="icon confirm-icon"><i class="line confirm-icon-line1 line1"></i><i
                class="line confirm-icon-line2 line2"></i></span>
        <span v-else class="icon cancel-icon"><i class="line cancel-icon-line1 line1"></i><i
                class="line cancel-icon-line2 line2"></i></span>
    </button>
</template>
<script lang="ts" src="./button.ts"></script>
<style lang="scss">
    @import "./button.scss";
</style>
