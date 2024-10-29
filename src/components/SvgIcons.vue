<template>
	<svg :class="svgClass" :style="{ width: widthInVW, height: heightInVW }" aria-hidden="true">
		<use :xlink:href="iconName" />
	</svg>
</template>

<script>
export default {
	name: 'SvgIcon',
	props: {
		iconClass: {
			type: String,
			required: false,
		},
		className: {
			type: String,
			default: '',
		},
		width: {
			type: String,
			default: '16',
		},
		height: {
			type: String,
			default: '16',
		},
	},
	computed: {
		iconName() {
			return `#icon-${this.iconClass}`
		},
		svgClass() {
			return this.className ? `svg-icon ${this.className}` : 'svg-icon'
		},
		widthInVW() {
			return `${((this.width * 100) / 425).toFixed(2)}vw`
		},
		heightInVW() {
			return `${((this.height * 100) / 425).toFixed(2)}vw`
		},
	},
}
</script>

<style lang="scss" scoped>
.svg-icon {
	overflow: hidden;
}
</style>
