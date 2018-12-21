<template>
	<section class="msite">
		<!-- 头部 开始-->
		<HeaderTop :title="address.name">
			<router-link class="header_search" slot="left" to="/search">
				<i class="iconfont icon-sousuo"></i>
			</router-link>
			<router-link class="header_login" slot="right" :to="userInfo._id ? '/userInfo' :'/login'">
				<span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
				<span class="header_login_text" v-else>
					<i class="iconfont icon-checkcircle" > </i>
				</span>
			</router-link>
		</HeaderTop>
		<!-- 头部结束 -->
		<!-- 轮播图开始 -->
	<div class="msite_nav">
		 <div class="swiper-container"  v-if="categorys.length">
    <div class="swiper-wrapper">
   <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
			<a href="javascript:;" class="link_to_food" v-for="(category,index) in categorys" :key="index">
				<div class="food_container">
					<img :src="BASEIMAGEURL+category.image_url" />
				</div>
				<span>{{category.title}}</span>
			</a>
		</div>
    </div>
    <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
		 </div>
		<img src="./images/msite_back.svg" alt="back" v-else>

	</div>
		<!-- 轮播图结束 -->
 <!--首页附近商家列表-->
 <div class="msite_shop_list">
 	<div class="shop_header">
 		<i class="iconfont icon-xuanxiang"></i>
 		<span class="shop_header_title">附近商家</span>
 	</div>
 	<ShopList/>
 </div>
	</section>
</template>
<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
	import ShopList from "../../components/ShopList/ShopList.vue"
	import {mapState,mapActions} from 'vuex'
	export default{
		data(){
			return {
				BASEIMAGEURL: 'https://fuss10.elemecdn.com'
			}
		},
		components:{
			HeaderTop,
			ShopList
		},
		computed:{
			...mapState(['address','categorys','userInfo']),
			//根据一个categorys一维数组生成一个二维数组，这个二维数组是有几个轮播图的依据
			//小数组中的元素个数最大是8
	 categorysArr(){
				const {categorys} = this
				//准备一个空的二维数组
				let arr=[]
				//准备一个小数组（最大长度是8）
				let minArr=[]
				categorys.forEach(c=>{
					//小数组的长度是8了就准备一个新的数组
					if(minArr.length===8){
						minArr=[]
					}
					//小数组长度为0的情况分为两种：1，上面长度为8已经准备了新的数组；2，刚刚进来新数组就是空
					if(minArr.length===0){
						arr.push(minArr)
					}
					minArr.push(c)
				})
				return arr
			}
    },
		watch:{
			categorys(value){
				this.$nextTick(()=>{
					//这个方法一旦界面更新完成，立即调用
						var mySwiper = new Swiper ('.swiper-container',{
						loop: true, // 循环模式选项
						
						// 如果需要分页器
						pagination: {
							el: '.swiper-pagination',
						}
					})
				})
			}
		},
		mounted:function(){
  
	this.getCategorys()
	this.getShops()
	},
	methods:{
		...mapActions(['getCategorys','getShops'])
		}
	}
</script>
<style  lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixins.styl"
	.msite  //首页
		width 100%
		.msite_nav
			bottom-border-1px(#e4e4e4)
			margin-top 45px
			height 200px
			background #fff
			.swiper-container
			    position relative
				width 100%
				height 100%
				.swiper-wrapper
					width 100%
					height 100%
					.swiper-slide
						display flex
						justify-content space-between
						align-items flex-start
						flex-wrap wrap
						.link_to_food
							width 25%
							.food_container
								display block
								width 100%
								text-align center
								padding-bottom 10px
								font-size 0
								img
									display inline-block
									width 50px
									height 50px
							span
								display block
								width 100%
								text-align center
								font-size 13px
								color #666
				.swiper-pagination
				    position absolute
					bottom 1px
					>span.swiper-pagination-bullet-active
						background #02a774
		.msite_shop_list
						top-border-1px(#e4e4e4)
						margin-top 10px
						background #fff
						.shop_header
							padding 10px 10px 0
							.shop_icon
								margin-left 5px
								color #999
							.shop_header_title
								color #999
								font-size 14px
								line-height 20px
							
							
</style>