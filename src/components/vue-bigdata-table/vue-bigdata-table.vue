<template>
    <div class="vue-bigdata-table-outer" ref="outer" @DOMMouseScroll="handleScroll" @scroll="handleScroll">
        <div :class="wrapperClasses" :style="tableWidthStyles">
            <div class="vue-bigdata-table-wrapper" ref="outWrapper">
                <div :class="['vue-bigdata-table-header-wrapper', fixed ? 'header-wrapper-fixed' : '']"
                     :style="headerStyle">
                    <slot name="top" :colWidthArr="widthArr"></slot>
                    <table v-if="fixedCol >= 0"
                           :class="['vue-bigdata-table-fixed-header', showFixedBoxShadow ? 'box-shadow' : '']"
                           cellspacing="0"
                           cellpadding="0" border="0">
                        <colgroup>
                            <col v-if="i <= fixedCol" :width="width" v-for="(width, i) in widthArr"
                                 :key="'header-key-fixed-' + i"/>
                        </colgroup>
                        <tr
                                :style="{cursor: cursorOnHeader}"
                                :data-update="updateID"
                                @mousemove.capture.prevent="handleMousemove"
                                @mousedown="handleMousedown"
                                @mouseup="canNotMove"
                                @mouseleave="canNotMove">
                            <th v-if="i <= fixedCol" v-for="(col, i) in columnsHandled" :data-index="i"
                                :key="`table-title-${i}`"
                                style="border-right: 1px solid #e9eaec;">
                <span v-if="!col.render">{{ col.title }}<common-sort-button v-if="showSortBtn(i)" :col-index="i"
                                                                     @on-sort="handleSort"
                                                                     @on-cancel-sort="handleCancelSort"
                                                                     :current-sort-col-index="sortedByColIndex"
                                                                     :current-sort-type="sortedType"></common-sort-button></span>
                                <render-dom v-else :render="col.render"
                                            :back-value="getComputedTableDataIndex(i)"></render-dom>
                            </th>
                        </tr>
                    </table>
                    <table ref="headerTable" style="position: absolute;left: 0;top: 0;" cellspacing="0" cellpadding="0"
                           border="0"
                           width="100%">
                        <colgroup>
                            <col :width="width" v-for="(width, i) in widthArr" :key="'header-key-' + i"/>
                        </colgroup>
                        <tr
                                :style="{cursor: cursorOnHeader}"
                                :data-update="updateID"
                                @mousemove.capture.prevent="handleMousemove"
                                @mousedown="handleMousedown"
                                @mouseup="canNotMove"
                                @mouseleave="canNotMove">
                            <th v-for="(col, i) in columnsHandled" :data-index="i" :key="`table-title-${i}`">
                                <span v-if="!col.render && (i > fixedCol)">{{ col.title }}</span>

                                <render-dom v-else-if="(i > fixedCol)" :render="col.render"
                                            :back-value="getComputedTableDataIndex(i)"></render-dom>
                            </th>
                        </tr>
                    </table>
                </div>
                <div class="vue-bigdata-table-content" @mousedown="handleMousedownOnTable">
                    <div :style="{height: `${topPlaceholderHeight}px`}"></div>
                    <render-dom :render="renderTable"></render-dom>
                    <div :style="{height: `${bottomPlaceholderHeight}px`}"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./vue-bigdata-table.ts"></script>
<style lang="less">
    @import './vue-bigdata-table.less';
</style>
