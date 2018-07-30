import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {//对应的一些属性，存储数据的，设置属性
		menuItems: {},
		currentUser: null,
		isLogin: false
	},
	getters
	/*: {//里面对应的一些方法，用来获取到数据的属性的状态
		getMenuItems: state => state.menuItems,
		currentUser: state => state.currentUser,
		isLogin: state => state.isLogin
	}*/
	,
	mutations
	/*: {//主要用来更改里面的一些属性的状态
		setMenuItems(state,data){
			state.menuItems = data;
		},
		//将匹配到的对象，在menuItems数组中删除
		removeMenuItems(state,data){
			state.menuItems.forEach((item,index) => {
				if(item == data){
					state.menuItems.splice(index,1)
				}
			})
		},
		//将新添加的蛋糕push到menuItems属性中
		pushToMenuItems(state,data){
			state.menuItems.push(data)
		},
		//更改用户的状态信息
		userStatus(state,user){
			if(user){
				state.currentUser = user
				state.isLogin = true
			}else{
				state.currentUser = null
				state.isLogin = false
			}
		}
	}*/
	,
	actions
	/*: {//应用mutations
		setUser({commit},user){
			commit("userStatus",user)
		}
	}*/
})