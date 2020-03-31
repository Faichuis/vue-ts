<template>
	<span class="sort-button-wrapper" @click="handleSort">
		<i data-sort-btn="up" :class="[currentActiveColSort && currentSortType === 'up' ? 'sort-button-item-up-active' : '']" class="sort-button-item sort-button-item-up"></i>
		<i data-sort-btn="down" :class="[currentActiveColSort && currentSortType === 'down' ? 'sort-button-item-down-active' : '']" class="sort-button-item sort-button-item-down"></i>
	</span>
</template>

<script lang="ts" src="sortButton.ts"></script>