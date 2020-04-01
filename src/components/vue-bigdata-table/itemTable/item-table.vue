<template>
	<div class="vue-bigdata-table-item-table">
		<table v-show="showTable && fixedCol >= 0" @paste="handlePaste" :class="['vue-bigdata-table-data-table', 'vue-bigdata-table-fixed-table', showFixedBoxShadow ? 'box-shadow' : '']" cellspacing="0" cellpadding="0" border="0">
			<colgroup>
				<col
					v-if="i <= fixedCol"
					:width="width" v-for="(width, i) in widthArr"
					:key="'colgroup-fixed-' + i"
				>
			</colgroup>
			<tbody>
				<tr
					v-for="(tr, index) in itemData"
					:key="index"
					:style="{background: currentMouseEnterIndex === index && canSelectText ? '#ebf7ff' : ''}"
					:class="[stripe && (indexBase + index) % 2 !== 0 ? 'stripe-gray' : '', tr.className, currentScrollToRowIndex === indexBase + index ? 'scroll-to-row-tip' : '', indexBase + index === highlightRowIndex ? 'highlight-row' : '']"
					@click="handleClickTr(indexBase + index, tr.initRowIndex)"
					@mouseenter.stop="handleMouseIn(index)"
					@mouseleave.stop="handleMouseLeave">
					<td v-if="showIndex" :class="['vue-bigdata-table-cell', 'vue-bigdata-table-data-table-center']">
						<render-dom :render="indexRender" :back-value="{index: (indexBase + index), params: indexRenderParams}"></render-dom>
					</td>
					<td
						v-if="i <= fixedColCom"
						:data-row="indexBase + index"
						:data-col="i"
						@click="handleClickTd(indexBase + index, i, tr.initRowIndex)"
						@dblclick="handleDblclickTd(indexBase + index, i, (typeof td === 'object' && td !== null) ? td.value : td)"
						v-for="(td, i) in tr"
						:class="['vue-bigdata-table-cell',
								setAlign(i),
								(typeof td === 'object' && td !== null) ? td.className : '',
								getSelectCellClasses(indexBase + index, i)
							]"
						:style="rowStyles" :key="i">
						<template v-if="!canEdit || (canEdit && `${indexBase + index}-${i}` !== edittingTd)">
							<div v-if="!showCellRender[showIndex ? (i + 1) : i]" class="vue-bigdata-table-cell">{{ (typeof td === 'object' && td !== null) ? td.value : td }}</div>
							<template v-else>
								<render-dom :render="showCellRender[showIndex ? (i + 1) : i]" :back-value="{row: indexBase + index, col: i, value: (typeof td === 'object' && td !== null) ? td.value : td}"></render-dom>
							</template>
						</template>
						<render-dom v-else :render="editCellRender" :back-value="{row: indexBase + index, col: i, value: (typeof td === 'object' && td !== null) ? td.value : td, beforeSave}"></render-dom>
					</td>
				</tr>
			</tbody>
		</table>
		<table v-show="showTable" @paste="handlePaste" ref="itemTable" class="vue-bigdata-table-data-table vue-bigdata-table-content-table" :style="{position: fixedCol < 0 ? '' : 'absolute'}" cellspacing="0" cellpadding="0" border="0" width="100%">
			<colgroup>
				<col
					:width="width" v-for="(width, i) in widthArr"
					:key="'colgroup-' + i"
				>
			</colgroup>
			<tbody>
				<tr
					v-for="(tr, index) in itemData"
					:key="index"
					@click="handleClickTr(indexBase + index, tr.initRowIndex)"
					@mouseenter.stop="handleMouseIn(index)"
					@mouseleave.stop="handleMouseLeave"
					:style="{background: currentMouseEnterIndex === index && canSelectText ? '#ebf7ff' : ''}"
					:class="[stripe && (indexBase + index) % 2 !== 0 ? 'stripe-gray' : '', tr.className, currentScrollToRowIndex === indexBase + index ? 'scroll-to-row-tip' : '', indexBase + index === highlightRowIndex ? 'highlight-row' : '']">
					<td v-if="showIndex" :class="['vue-bigdata-table-cell', 'vue-bigdata-table-data-table-center']">
						<render-dom v-if="fixedCol < 0" :render="indexRender" :back-value="(indexBase + index)"></render-dom>
					</td>
					<td
						v-for="(td, i) in tr"
						:data-row="indexBase + index"
						:data-col="i"
						@click="handleClickTd(indexBase + index, i, tr.initRowIndex)"
						@dblclick="handleDblclickTd(indexBase + index, i, (typeof td === 'object' && td !== null) ? td.value : td)"
						:class="['vue-bigdata-table-cell',
								setAlign(i),
								(typeof td === 'object' && td !== null) ? td.className : '',
								getSelectCellClasses(indexBase + index, i)
							]"
						:style="rowStyles"
						:key="i">
						<template v-if="!canEdit || (canEdit && `${indexBase + index}-${i}` !== edittingTd)">
							<div v-if="(!showCellRender[showIndex ? (i + 1) : i]) && (i >= fixedCol)" class="vue-bigdata-table-cell">{{ (typeof td === 'object' && td !== null) ? td.value : td }}</div>
							<template v-else-if="i >= fixedCol">
								<render-dom :render="showCellRender[showIndex ? (i + 1) : i]" :back-value="{row: indexBase + index, col: i, value: (typeof td === 'object' && td !== null) ? td.value : td}"></render-dom>
							</template>
						</template>
						<render-dom v-else :render="editCellRender" :back-value="{row: indexBase + index, col: i, value: (typeof td === 'object' && td !== null) ? td.value : td, beforeSave, initRowIndex: tr.initRowIndex}"></render-dom>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script lang="ts" src="item-table.ts"></script>
