import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import About from '../components/About/About'
import Login from '../components/Login'
import Register from '../components/Register'

//二级路由
import Contact from '../components/About/Contact'
import Delivery from '../components/About/Delivery'
import History from '../components/About/History'
import OrderingGuide from '../components/About/OrderingGuide'

//三级路由
import Phone from '../components/about/contact/Phone'
import PersonName from '../components/about/contact/PersonName'

// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const routes = [
	{
		path: '/',
		name: 'homeLink',
		components: {
			default: Home,//主页默认真是这个组件内容
			'orderingGuide': OrderingGuide,
			'delivery': Delivery,
			'history': History
		}
	},{
		path: '/menu',
		name: 'menuLink',
		component: Menu
	},{
		path: '/admin',
		name: 'adminLink',
		component: Admin,
		/*beforeEnter: (to,from,next) => {//路由独享的守卫
			// alert("非登陆状态，不能访问此页面!");
			// next(false);

			//判断store.gettes.isLogin === false
			if(to.path == '/login' || to.path == '/register'){
				next()//正常展示
			}else{
				alert("还没有登陆，请先登录");
				next('/login');
			}
		}*/
	},{
		path:'/about',
		name: 'aboutLink',
		component: About,
		redirect: '/about/contact',//关于我们默认展示联系我们页面
		//二级路由
		children:[
			{
				path: '/about/contact',
				name: 'contactLink',
				redirect: '/personname',//联系我们默认展示联系人页面
				component: Contact,
				//三级路由
				children: [
					{
						path: '/phone',
						name: 'phoneNumber',
						component: Phone
					},{
						path: '/personname',
						name: 'personName',
						component: PersonName
					}
				]
			},{
				path: '/about/history',
				name: 'historyLink',
				component: History
			},{
				path: '/about/delivery',
				name: 'deliveryLink',
				component: Delivery
			},{
				path: '/about/orderingGuide',
				name: 'orderingGuideLink',
				component: OrderingGuide
			}
		]
	},{
		path: '/login',
		name: 'loginLink',
		component: Login
	},{
		path: '/register',
		name: 'registerLink',
		component: Register
	},{
		//当用户输入的路径有错时,上面的路径都匹配不到,会引导用户直接跳转到这个路径来
		path:'*',
		redirect: '/'
	}

]

export default new Router({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){//路由控制滚动行为
  	// return { x: 0, y: 100 }//滚动条滑到x轴为0，y轴为100
  	// return { selector: '.btn' }//滚动条滑到btn位置的地方
  	if(savedPosition){
  		return savedPosition//页面跳转后，再跳回来，又会回到原来停留的位置
  	}else{
  		return { x: 0, y: 0 }
  	}
  }
})
