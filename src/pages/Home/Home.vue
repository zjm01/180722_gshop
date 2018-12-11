<template>
	<section class="msite">
		<!-- 头部 开始-->
		<HeaderTop title="昌平区回龙观蜂鸟转送">
			<span class="header_search" slot="left">
				<i class="iconfont icon-sousuo"></i>
			</span>
			<span class="header_login" slot="right">
				<span class="header_login_text">登录|注册</span>
			</span>
		</HeaderTop>
		<!-- 头部结束 -->
		<!-- 轮播图开始 -->
	<div class="msite_nav">
		 <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/tianpinyinpin.png" />
				</div>
				<span>甜品饮品</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/chaoshi.png"/>
				</div>
				<span>商超便利</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/meishi.png" />
				</div>
				<span>美食</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/chufang.png" width="100%" height="100%" />
				</div>
				<span>厨房</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/zhaji.png" width="100%" height="100%" />
				</div>
				<span>炸鸡炸串</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/miantiao.png" width="100%" height="100%" />
				</div>
				<span>面条</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/shuiguo.png" width="100%" height="100%" />
				</div>
				<span>水果</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/xianhua.png" width="100%" height="100%" />
				</div>
				<span>鲜花</span>
			</a>
		</div>
        <div class="swiper-slide">
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/pisa.png" width="100%" height="100%" />
				</div>
				<span>披萨</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/malatang.png" width="100%" height="100%" />
				</div>
				<span>麻辣烫</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/yiyaojiankang.png" width="100%" height="100%" />
				</div>
				<span>医药健康</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/dangao.png" width="100%" height="100%" />
				</div>
				<span>蛋糕</span>
			</a>
			<a href="javascript:;" class="link_to_food">
				<div class="food_container">
					<img src="./images/dapaihuichi.png" width="100%" height="100%" />
				</div>
				<span>大牌会吃</span>
			</a>
		</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination">
	</div>
		 </div>
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
	export default{
		components:{
			HeaderTop,
			ShopList
		},
		mounted:function(){
    var mySwiper = new Swiper ('.swiper-container',{
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
	})
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