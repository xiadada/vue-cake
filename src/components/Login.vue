<template>
	<div class="row mt-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img class="mx-auto d-block" src="../../src/assets/login.png" alt="">
					<form @submit.prevent="onSubmit">
						<div class="form-group">
							<label for="email">邮箱</label>
							<input 
								type="email"
								class="form-control"
								v-model="email"
							>
						</div>

						<div class="form-group">
							<label for="password">密码</label>
							<input 
								type="password"
								class="form-control"
								v-model="password"
							>
						</div>
						<button type="submit" class="btn btn-block btn-success">登陆</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		data(){
			return {
				email: '',
				password: '',
			}
		},
		//组件内的守卫，点击退出后，返回login页面，将用户状态清空
		beforeRouteEnter: (to, from, next) => {
			next(vm => vm.$store.dispatch("setUser",null))
		},
		methods: {
			onSubmit(){
				axios.get('/user.json').then(res => {
					console.log(res);
					const data = res.data;
					const users = [];
					for(let key in data){
						const user = data[key];
						users.push(user);
					}
					//console.log(users);
					//实现过滤
					let result = users.filter((user) => {
						return user.email === this.email && user.password === this.password;
					})
					console.log(result);
					if(result != null && result.length != 0){
						//dispatch是axios要用的，这里为了更改用户状态
						this.$store.dispatch("setUser",result[0].email)
						this.$router.push({name: 'homeLink'})
					}else{
						alert('输入的账号或者密码不正确，请重新输入');
						this.$store.dispatch("setUser",null)
						// this.$router.push({name: 'loginLink'})
					}
				})
				
			}
		}
	}
</script>