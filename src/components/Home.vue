<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h1>欢迎大家品尝cake!</h1>
				<h2>这里有你喜欢的cake~</h2>
				<button @click="goToMenu" class="btn btn-success">Let's order!</button>
			</div>
		</div>
		<h1>Home</h1>
		<!-- <button @click="goToMenu" class="btn btn-success">Let's order</button> -->
	</div>
</template>

<script>
	export default {
		methods: {
			goToMenu(){
				//1.跳转到上次浏览的页面
				// this.$router.go(-1);

				//2.指定跳转的地址
				// this.$router.replace('/menu');

				//3.指定跳转路由的名字下
				// this.$router.replace({name:'menuLink'});

				//4.更常用的是通过push进行跳转
				// this.$router.push('/menu');
				this.$router.push({name:'menuLink'});
			}
		}
	}
</script>

<style scoped lang="scss">
#home{
	background: url('../../src/assets/cake-bg.jpg');
	height: 110vh;
	padding: 10%;
}
h1,h2{
	margin: 6%;
}
.background{
	background: #eee;
	opacity: 0.8;
	max-width: 70vw;
	margin: 0 auto;
	padding: 20px 0;
}
	
</style>