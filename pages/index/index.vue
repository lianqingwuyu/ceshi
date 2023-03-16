<template>
	<view class="content">
		<page-meta :root-font-size="$fontSize()" ></page-meta>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log(window)
		},
		methods: {
			
		},
		 
	}
</script>

<style lang="scss" scoped>
	.a{
		width: 1rem;
		height: 1rem;
		background: red;
	}
	.b{
		font-size: 0.16rem;
	}
</style>
