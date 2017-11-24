<template>
	<div class="index">
		<div class="footer">
			<ul>
				<li v-for="(data,index) in newsList">{{data}}</li>
			</ul>
		</div>
	</div>
</template>

<script scoped>
export default{
	data(){
		return {
			title: "我是首页",
			newsList: [
				'11111',
				'22222',
				'33333'
			]
		}
	}
}
</script>

<style>
</style>