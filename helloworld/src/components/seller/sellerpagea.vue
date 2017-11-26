<template>
	<div>
		<p>牛肉，牛肉，牛肉，牛肉，牛肉，牛肉，牛肉，牛肉，牛肉，牛肉</p>
		<div class="mengb" v-show="mengbshow">
			<p class="mbp">蒙板</p>
			<button class="mbbut" @click="hiddenmbbut">X</button>
		</div>
		<button class="mbclick" @click="showmengb">蒙板点击</button>
	</div>
</template>
<script>
	export default{
		data() {
			return{
				mengbshow:false
			}
		},
		methods:{
			showmengb(){
				this.mengbshow = true;
			},
			hiddenmbbut(){
				this.mengbshow = false;
			}
		}
	}
</script>
<style>
	.mengb{
		color: #fff;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		position: fixed;
		z-index: 100;
		background: rgba(7,17,27,0.8);

	}
	.mbp{
		margin-top: 100px;
		text-align: center;
	}
	.mbclick{
		width:100px;
		height:40px;
		margin-left: 45%;
		margin-top: 100px;
	}
	.mbbut{
		border-radius: 50%;
		width:40px;
		height: 40px;
		border: none;
		outline: none;
		position: absolute;
		left: 50%;
		bottom: 100px;
		margin-left: -20px;
		font-size: 32px;
	}
</style>