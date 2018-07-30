// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 路由可以写在专门的路由文件中，然后引用
import router from './router/router.js'
// import {routes} from './router/router.js'//引入的routes值需要大括号括起来
import axios from 'axios'
import {store} from './store/store.js'//引入的store值需要大括号括起来
//路由也可以直接在这里定义和应用
// import VueRouter from 'vue-router'
// import Home from './components/Home'
// import Menu from './components/Menu'

Vue.config.productionTip = false
//野狗通信云接口
// axios.defaults.baseURL = 'https://wd8580417371jwjdjp.wilddogio.com/'
axios.defaults.baseURL = 'https://wd9077913423avyuea.wilddogio.com/'

//配置Vue原型（在任何组件中都可以正常使用axios）配置了这个才能用this.http.get()方法
Vue.prototype.http = axios
// Vue.prototype.$axios = axios

/*Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		component: Home
	},{
		path:'/menu',
		component: Menu
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})*/

//全局守卫 是否能展示路由页面
/*router.beforeEach((to,from,next) => {
	//to是要跳转到哪个组件页面里去
	//console.log(to.path);

	// alert("还没有登陆，请先登录");
	// next();

	//判断store.gettes.isLogin === false
	if(to.path == '/login' || to.path == '/register'){
		next()//正常展示
	}else{
		alert("还没有登陆，请先登录");
		next('/login');
	}
});*/

//后置钩子
/*router.afterEach((to,from) => {
	alert("after each");//进入组件就会先弹出这个
})*/



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
