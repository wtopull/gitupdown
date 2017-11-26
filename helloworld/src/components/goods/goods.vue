<template>
	<div class="goods">
		<div>
			<p>jjjjjjjjjjjjjjjjjjjjjjjj</p>
			<p>jjjjjjjjjjjjjjjjjjjjjjjj</p>
			<p>jjjjjjjjjjjjjjjjjjjjjjjj</p>
			<p>jjjjjjjjjjjjjjjjjjjjjjjj</p>
		</div>
		<div class="tab">
	      <div class="tab-item">
	        <router-link to="/goods/goodspagea">鸡腿</router-link>
	      </div>
	      <div class="tab-item">
	        <router-link to="/goods/ratingspagea">猪脚</router-link>
	      </div>
	      <div class="tab-item">
	        <router-link to="/goods/sellerpagea">牛肉</router-link>
	      </div>
	    </div>
	    <router-view />
	</div>
</template>
<script>
export default{
	
}
</script>
<style>
	
</style>