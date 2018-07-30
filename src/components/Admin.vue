<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<!-- new cake -->
			<app-new-cake></app-new-cake>
		</div>
		<div class="col-sm-12 col-md-4">
			<!-- 品种展示 -->
			<h3 class="text-muted my-5">菜单</h3>
			<table class="table">
				<thead class="table table-default">
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems" :key="item.id">
					<tr>
						<td>{{item.name}}</td>
						<td>
							<button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import NewCake from './NewCake.vue'
	export default{
		/*data(){
			return {
				name:'Henry'
			}
		},
		beforeRouteEnter: (to,from,next) => {//组件内守卫
			alert('Hello' + ' ' + this.name);//这个时候不能正常的拿到数据输出Hello undefined
			// next();
			next(vm => {//next的回调函数
				alert('Hello ' + vm.name);//这个时候能正常的拿到数据了
			});
		},
		beforeRouteLeave(to,from,next){
			if(confirm('确定离开吗？') == true){
				next();
			}else{
				next(false);
			}
		}*/
		data(){
			return {
				// getMenuItems: []
			}
		},
		components: {
			'app-new-cake': NewCake
		},
		computed:{
			getMenuItems:{
				//在vuex中获取数据
				// 不能直接return,会报错，要用get方法
				get(){
					//第一种方法
					// return this.$store.state.menuItems
					//第二种方法通过getters获得数据
					return this.$store.getters.getMenuItems
				},
				set(){

				}
			},
		},
		created(){
			// fetch("https://wd8580417371jwjdjp.wilddogio.com/menu.json")
			fetch("https://wd9077913423avyuea.wilddogio.com/menu.json")
			.then(res => {
				return res.json()
			})
			.then(data => {
				// console.log(data)
				let menuArray = [];
				for(let key in data){
					// console.log(key)
					// console.log(data[key])//输出的是一个对象
					data[key].id = key;
					menuArray.push(data[key]);
				}
				// this.getMenuItems = menuArray;
				//更改数据状态，实现数据同步
				this.$store.commit('setMenuItems',menuArray)
			})
		},
		methods: {
			deleteData(item){
				// fetch("https://wd8580417371jwjdjp.wilddogio.com/menu/"+item.id+"/.json",{
					fetch("https://wd9077913423avyuea.wilddogio.com/menu"+item.id+"/.json",{
					method: "DELETE",
					headers: {
						"Content-type": "application/json"
					}
				})
				.then(res => res.json())
				// .then(data => this.$router.push({name: "menuLink"}))//这个地方的data就是删除掉的数据
				.then(data => {
					this.$store.commit('removeMenuItems',item)
				})
				.catch(err => console.log(err))
			}
		}
	}
</script>