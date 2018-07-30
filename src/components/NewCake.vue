<template>
	<form>
		<h3 class="text-muted my-5">添加新的cake</h3>
		<div class="form-group row">
			<label class="col-sm-1">品种</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="NewCake.name">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">描述</label>
			<div class="col-sm-11">
				<textarea rows="5" class="form-control" v-model="NewCake.description"></textarea>
			</div>
		</div>
		<p><strong>选项一</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="NewCake.size1">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="NewCake.price1">
			</div>
		</div>
		<p><strong>选项二</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="NewCake.size2">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="NewCake.price2">
			</div>
		</div>
		<div class="form-group row">
			<button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
		</div>
	</form>
</template>

<script>
	export default{
		data(){
			return {
				NewCake: {

				}
			}
		},
		methods: {
			addMenuItem(){
				let data = {
					name: this.NewCake.name,
					description: this.NewCake.description,
					options: [
						{
							size: this.NewCake.size1,
							price: this.NewCake.price1
						},{
							size: this.NewCake.size2,
							price: this.NewCake.price2
						}
					]
				};
				//axios vue-resource es6 fetch
				/*fetch("https://wd8580417371jwjdjp.wilddogio.com/menu.json",{
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(data)
				})
				.then(res => res.json())
				.then(data => this.$router.push({name: "menuLink"}))//data的值为{name: "-LI56vCVQUfzj2g9"}
				.catch(err => console.log(err))*/

				this.http.post("menu.json",data)
						 // .then(res => this.$router.push({name: "menuLink"}))
						 //数据同步到vuex中
						 .then(res => this.$store.commit("pushToMenuItems",data))

			}
		}
	}
</script>