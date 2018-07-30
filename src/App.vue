<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <!-- 点击了哪个组件,哪个组件的内容就会添加到这里面 -->
      <!--路由切换组件template插入的位置 --> 
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <!-- router-view的复用 有name属性-->
          <router-view name="orderingGuide"></router-view>
        </div>

        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>

        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  components: {
    appHeader: Header
    // 也可以这么写
    // "app-header": Header
  }
}
</script>

<style>

</style>


/*Vue-router 2.0 中允许同级展示多个视图，而不是嵌套展示，可以通过给<routerview> 添加 name 属性的方式匹配不同的组件，如果没有设置 name，默认为 default。例如： 
<router-view></router-view> 
<router-view name='main'></router-view> 
const router = new VueRouter({ 　 
  routes: [ 　　 
    { 　　　
      path: '/', 　　　 
      components: {　// 要注意这里的属性是components，而不是component 　　　　 
        default: Nav, 　　　　 
        main: Main 　　　
      } 　　 
    } 　 
  ] 
})*/

