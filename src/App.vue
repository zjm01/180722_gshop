<template>
	<div id="app">
	<router-view></router-view>
	<FooterGuide v-show="$route.meta.showFooter"/>
	</div>
</template>
<script>
	import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
	import {mapActions} from 'vuex'
	// import {reqFoodTypes} from './api'
	export default{
		components:{
			FooterGuide
		},
		mounted(){
			//this.$store.dispatch('getAddress')
			this.getAddress()
			this.getUserInfo() 
		},
methods:{
	...mapActions(['getAddress','getUserInfo'])
}
		
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
// 整个应用组件的样式
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>