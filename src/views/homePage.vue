<template>
	<div class="content">
		<nav class="navBox">
			<div class="nav-left" @click="jump">
				<img src="@/assets/GooglePlay.png" alt="Google Play" />
				Google Play
			</div>
			<div class="nav-right">
				<svg-icon iconClass="sousuo" width="22" height="22" />
				<svg-icon iconClass="wh" width="22" height="22" />
			</div>
		</nav>

		<section class="appBrief">
			<div class="app-logo">
				<img src="/img/applogo022.png" alt="Starry 777 Slots" />
			</div>
			<div class="app-info">
				<span class="app-name">Starry 777 Slots</span>
				<span class="developer-name">Starry Game</span>
			</div>
		</section>

		<div class="detailsBox">
			<div class="itemBox" v-for="(item, index) in itemLists" :key="index">
				<div>
					<img :src="item.img" alt="" v-if="item.img" />
					<span v-else>{{ item.name }}</span>
					<svg-icon iconClass="xingxing" width="16" height="16" v-if="index === 0" />
				</div>
				<div class="item-remak">{{ item.remak }}</div>
			</div>
		</div>

		<div class="downBtn">Instal</div>

		<div class="shareBox">
			<div class="lf">
				<svg-icon iconClass="fenxiang" width="22" height="22" />
				Bagikan
			</div>
			<div class="rg">
				<svg-icon iconClass="biaoqian" width="22" height="22" />
				Tambahkan ke wishlist
			</div>
		</div>

		<Carousel />

		<GameIntroduction />
	</div>
</template>

<script>
import GameIntroduction from '@/components/GameIntroduction.vue'
import Carousel from '@/components/Carousel.vue'
export default {
	components: {
		Carousel,
		GameIntroduction,
	},
	data() {
		return {
			itemLists: [
				{ name: '4.9', remak: '19,3 rb ulasan' },
				{ name: '1 jt+', remak: 'Hasil download' },
				{ img: require('@/assets/18.png'), remak: 'Rating 18+' },
			],
		}
	},
	methods: {
		jump() {
			window.location.href = 'https://play.google.com/store/games'
		},
	},
}
</script>

<style lang="scss" scoped>
.content {
	padding: 10px 16px;
	box-sizing: border-box;

	.navBox {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 100;
		background: #ffffff;
		width: calc(100% - 32px);
		height: 60px;
		.nav-left {
			display: flex;
			align-items: center;
			font-size: 20px;
			font-weight: 600;
			color: #5f6368;

			img {
				margin-right: 8px;
				width: 40px;
				height: 40px;
			}
		}

		.nav-right {
			display: flex;
			gap: 22px;
		}
	}

	.appBrief {
		display: flex;
		margin-top: 88px;
		padding: 0 16px;
		box-sizing: border-box;
		.app-logo {
			width: 72px;
			height: 72px;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.app-info {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding-left: 24px;

			.app-name {
				font-size: 26px;
				font-weight: 600;
			}

			.developer-name {
				font-size: 18px;
				color: #01875f;
			}
		}
	}

	.detailsBox {
		margin: 26px 0 44px 0px;
		padding: 12px 0;
		display: flex;
		justify-content: space-between;
		padding: 0 16px;
		box-sizing: border-box;
		.itemBox {
			position: relative;
			> div {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 20px;
				margin-bottom: 6px;
				span {
					color: #000000;
					font-size: 14px;
				}
			}
			.item-remak {
				font-size: 13px;
			}
		}
		.itemBox:not(:last-child)::after {
			content: '';
			display: block;
			height: 30px;
			background-color: #ccc;
			margin: 6px 0;
			width: 1px;
			position: absolute;
			top: 0;
			right: -20px;
		}
	}

	.downBtn {
		width: 100%;
		height: 36px;
		background-color: #01875f;
		border-radius: 12px;
		color: #ffffff;
		line-height: 36px;
	}

	.shareBox {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;
		margin-bottom: 60px;
		padding: 0 22px;
		box-sizing: border-box;
		> div {
			display: flex;
			align-items: center;
			gap: 14px;
		}
		.rg {
			color: #9aa0a6;
		}
	}
}
</style>
