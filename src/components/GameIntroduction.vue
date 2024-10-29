<template>
	<div class="gameInfo-content">
		<div class="top">
			<div class="lf">Tentang game ini</div>
			<div class="rg"><svg-icon iconClass="rg" width="22" height="22" /></div>
		</div>
		<div class="infoBox">{{ gameInfo }}</div>

		<div class="itemInfoBox" v-for="(item, index) in infoList" :key="index" style="margin-top: 30px">
			<div class="item-header">{{ item.name }}</div>
			<div v-for="(ele, index1) in item.list" :key="index1" class="item-list">
				{{ ele }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			infoList: [
				{
					name: 'Slot Populer:',
					list: this.getPopularSlots(),
				},
				{
					name: 'Slot Populer:',
					list: this.getPopularSlots(),
				},
				{
					name: 'Slot Populer:',
					list: this.getPopularSlots(),
				},
			],
			gameInfo:
				'Starry 777 Slots terdiri dari game papan yang memiliki ciri khas lokal Indonesia, dan ada juga game khas lokal Indonesia seperti: DuoFuDuoCai, FaFaFa, Bandar QQ, Olympus, Sweet Bonanza, yang akan menemani Anda di waktu santai!',
		}
	},
	methods: {
		getPopularSlots() {
			return [
				'【FaFaFa】Dapatkan scatter untuk game gratis, simbol kakek merah dan lihat poin mega win siapa yang lebih tinggi!',
				'【DuoFuDuoCai】Dapatkan wild untuk game jackpot, uji coba keberuntunganmu untuk grand jackpot!',
				'【HuaKaiFuGui】Dapatkan hadiah berlipat ganda di Lucky wheel pada game gratis!',
			]
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
		margin: 10px 0;
		font-weight: 600;
	}

	.infoBox {
		text-align: left;
		color: #5f6368;
		font-size: 14px;
		letter-spacing: 0.5px;
	}

	.item-header {
		font-weight: bold;
		text-align: left;
		margin-bottom: 10px;
	}

	.item-list {
		line-height: 20px;
		text-align: left;
		color: #5f6368;
		font-size: 14px;
		letter-spacing: 0.5px;
	}
}
</style>
