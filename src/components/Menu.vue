<template>
	<div class="row">
		<!-- 菜单 -->
		<div class="col-sm-12 col-md-8">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>尺寸</th>
						<th>价格</th>
						<th>加入</th>
					</tr>
				</thead>
				<tbody v-for="getMenuItem in getMenuItems" :key="getMenuItem.name">
					<tr>
						<td><strong>{{ getMenuItem.name }}</strong></td>
					</tr>
					<tr v-for="option in getMenuItem.options" :key="option.size">
						<td>{{ option.size }}</td>
						<td>{{ option.price }}RMB</td>
						<td><button 
							@click="addToBasket(getMenuItem,option)"
							class="btn btn-sm btn-outline-success">+</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- {{ baskets }} -->
		<!-- 购物车 -->
		<div class="col-sm-12 col-md-4">
			<div v-if="baskets.length > 0">
				<table class="table">
					<thead class="thead-default">
						<tr>
							<th>数量</th>
							<th>尺寸</th>
							<th>价格</th>
						</tr>
					</thead>
					<tbody v-for="basketsItem in baskets" :key="basketsItem.quantity">
						<tr>
							<td>
								<button @click="decreaseQuantity(basketsItem)" class="btn btn-sm">-</button>
								<span>{{ basketsItem.quantity }}</span>
								<button @click="increaseQuantity(basketsItem)" class="btn btn-sm">+</button>
							</td>
							<td>{{ basketsItem.name }}{{ basketsItem.size }}</td>
							<td>{{ basketsItem.price * basketsItem.quantity }}</td>
						</tr>
					</tbody>
				</table>
				<p>总价：{{ total + "RMB"}}</p>
				<button class="btn btn-success btn-block">提交</button>
			</div>

			<div v-else>
				{{ basketText }}
			</div>
			
		</div>
	</div>
</template>

<script>
// import axios from 'axios'
	export default{
		data(){
			return{
				baskets: [],
				basketText: "购物车里没有任何商品",
				/*getMenuItems: {
					1: {
						'name': '草莓cake',
						'description': '清清的甜味，一股让人觉得很舒服的香味，当你品味的时候，会有一种想要微笑的感觉',
						'options': [{
							'size': 9,
							'price': 38
						},{
							'size': 12,
							'price': 48
						}]
					},
					2: {
						'name': '苹果cake',
						'description': '香香脆脆的苹果蛋糕',
						'options': [{
							'size': 9,
							'price': 38
						},{
							'size': 12,
							'price': 48
						}]
					},
					3: {
						'name': '香蕉cake',
						'description': '甜而不腻，口感丝滑',
						'options': [{
							'size': 9,
							'price': 38
						},{
							'size': 12,
							'price': 48
						}]
					},
				}*/
			}
		},
		//需要动态展示
		computed: {
			getMenuItems(){
				//在vuex中获取数据
				//第一种方法
				// return this.$store.state.menuItems
				//第二种方法通过getters获得数据
				return this.$store.getters.getMenuItems
			},
			total(){
				let totalCost = 0;
				for(let index in this.baskets){
					let individualItem = this.baskets[index];
					totalCost += individualItem.quantity * individualItem.price;
				}
				return totalCost;
			}
		},
		created(){
			this.fetchData();
		},
		methods: {
			fetchData(){
				/*fetch("https://wd8580417371jwjdjp.wilddogio.com/menu.json")
					.then(res => {
						return res.json()
					})
					.then(data => {
						this.getMenuItems = data
					})*/

					/*axios.get(menu.json).then(res => this.getMenuItems = res.data)*/

				//将请求下来的数据存储到vuex中,以便所有页面都能从中拿到数据
				this.http.get("menu.json")
						 .then(res => this.$store.commit("setMenuItems",res.data))//将数据存储到store.js	

			},
			addToBasket(getMenuItem,option){
				let basket = {
					name: getMenuItem.name,
					price: option.price,
					quantity: 1,
					size: option.size
				};
				if(this.baskets.length > 0){
					//过滤，把相同的商品放到购物车同商品中
					let result = this.baskets.filter( (basket) => {
						return (basket.name === getMenuItem.name && basket.price === option.price)
					})

					if(result != null && result.length > 0){
						result[0].quantity++;
					}else{
						this.baskets.push(basket)
					}

				}else{
					this.baskets.push(basket);
				}
			},
			decreaseQuantity(basketsItem){
				basketsItem.quantity--;
				// 当数量小于0的时候就从购物车中删除
				if(basketsItem.quantity <=0){
					this.removeFromBasket(basketsItem);
				}
			},
			increaseQuantity(basketsItem){
				basketsItem.quantity++;
			},
			removeFromBasket(basketsItem){
				// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
				this.baskets.splice(this.baskets.indexOf(basketsItem),1)
			}
		}
	}
</script>