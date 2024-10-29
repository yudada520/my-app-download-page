<template>
	<div class="gameInfo-content">
		<div class="top">
			<div class="lf">Tentang game ini</div>
			<div class="rg"><svg-icon iconClass="rg" width="22" height="22" /></div>
		</div>
		<div class="infoBox">{{ gameInfo }}</div>

		<div class="itemInfoBox" v-for="(item, index) in infoList" :key="index">
			<div class="item-header">{{ item.name }}</div>
			<div v-for="(ele, index1) in item.list" :key="index1" class="item-list">
				{{ ele }}
			</div>
		</div>

		<div class="downBtn" @click="jump">Santai</div>

		<div class="top">
			<div class="lf">Keamanan Data</div>
			<div class="rg"><svg-icon iconClass="rg" width="22" height="22" /></div>
		</div>
		<div class="infoBox">{{ baseInfo }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			infoList: window.infoList,
			gameInfo: window.gameInfo,
			baseInfo: window.baseInfo,
		}
	},
	methods: {
		jump() {
			window.location.href = 'https://play.google.com/store/apps/category/GAME_CASINO'
		},
	},
}
</script>

<style lang="scss" scoped>
.gameInfo-content {
	width: 100%;
	height: 100%;
	.top {
		display: flex;
		justify-content: space-between;
		margin: 20px 0;
		font-weight: 600;
		font-size: 15px;
		.lf {
			font-size: 18px;
		}
	}

	.infoBox {
		line-height: 25px;
		text-align: left;
		color: #5f6368;
		font-size: 15px;
	}

	.item-header {
		font-weight: bold;
		text-align: left;
		margin-bottom: 10px;
		font-size: 15px;
	}

	.item-list {
		line-height: 25px;
		text-align: left;
		color: #5f6368;
		font-size: 15px;
	}

	.itemInfoBox {
		margin-top: 30px;
	}

	.downBtn {
		width: 72px;
		height: 30px;
		line-height: 30px;
		border: 1px solid;
		border-radius: 16px;
		margin: 40px 0;
		border-color: #cccccc;
	}
}
</style>
