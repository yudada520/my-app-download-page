<template>
	<div class="carousel">
		<div class="carousel-container" :style="carouselStyle">
			<div
				class="carousel-item"
				v-for="(image, index) in images"
				:key="index"
				@touchstart="touchStart($event)"
				@touchmove="touchMove($event)"
				@touchend="touchEnd"
			>
				<img :src="image" alt="Carousel Image" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			startX: 0,
			endX: 0
		};
	},
	computed: {
		carouselStyle() {
			return {
				transform: `translateX(-${this.currentIndex * 100}%)`,
				transition: 'transform 0.5s ease'
			};
		},
		images() {
			const originalPaths = window.carouselImgs.map((item) => item.img);
			return this.updateImagePath(originalPaths, '../img', '../myAppPage/img');
		}
	},
	methods: {
		updateImagePath(originalImages, oldPath, newPath) {
			return originalImages.map((img) => (img.includes(oldPath) ? img.replace(oldPath, newPath) : img));
		},
		next() {
			if (this.currentIndex < this.images.length - 1) {
				this.currentIndex++;
			}
		},
		prev() {
			if (this.currentIndex > 0) {
				this.currentIndex--;
			}
		},
		touchStart(event) {
			this.startX = event.touches[0].clientX;
		},
		touchMove(event) {
			this.endX = event.touches[0].clientX;
		},
		touchEnd() {
			if (this.startX > this.endX + 50) {
				this.next();
			} else if (this.startX < this.endX - 50) {
				this.prev();
			}
		}
	},
	watch: {}
};
</script>

<style scoped>
.carousel {
	position: relative;
	overflow: hidden;
	width: 100%;
	border-radius: 8px;
}

.carousel-container {
	display: flex;
	transition: transform 0.5s ease;
}

.carousel-item {
	min-width: 100%;
}

.carousel-item img {
	width: 100%;
	height: auto;
	border-radius: 8px;
}
</style>
