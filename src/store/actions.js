 // 通过mutations间接更新state对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
	RECEIVE_USER_INFO,
	RESET_USER_INFO,
	RECEIVE_INFO,
	RECEIVE_RATINGS,
	RECEIVE_GOODS,
	INCREMENT_FOOD_COUNT,
	DECREMENT_FOOD_COUNT
  } from './mutation-types'
 //api接口 
  import {
  reqAddress,
  reqCategorys,
  reqShops,
	reqUserInfo,
	reqLogout,
	reqShopInfo,
	reqShopRatings,
	reqShopGoods} from '../api/index.js'
export default{
	//异步获取地址
	async getAddress({commit,state}){
		//发送异步ajax请求
		const geohash = state.latitude + ',' + state.longitude
		const result = await reqAddress(geohash)
 if (result.code===0) {
      const address = result.data
	  // 提交一个mutation
//这里传的参数就是上面异步获取到的address
      commit(RECEIVE_ADDRESS,{address}) 
    }
	},
	//获取实物分类
	async getCategorys({commit,state}){
		// 发送异步ajax请求
	const result = await reqCategorys()
	// 提交一个mutation
	if(result.code===0){
		const categorys = result.data
		commit(RECEIVE_CATEGORYS,{categorys})
	}
	},
   //获取商家列表
   async getShops({commit,state}){
	   // 发送异步ajax请求 
	   const {latitude,longitude} = state
	   const result = await reqShops(latitude,longitude)
	   // 提交一个mutation
	   if (result.code===0) {
	   	const shops = result.data
	   	commit(RECEIVE_SHOPS,{shops}) 
	   }
   },
	 recordUser({commit},userInfo){
		commit(RECEIVE_USER_INFO,{userInfo})
	 },
	 //异步获取登录信息
	 async getUserInfo({commit}){
		 const result = await reqUserInfo()
		 if(result.code===0){
			 const userInfo = result.data
			 commit(RECEIVE_USER_INFO,{userInfo})

		 }
	 },
	 //异步登出
	 async logout({commit}){
		 const result = await reqLogout()
		 if(result.code===0){
		 	const userInfo = result.data
			}
		 	commit(RESET_USER_INFO)
	 },
	 // 异步获取商家信息
	 async getShopInfo({commit}) {
	 	const result = await reqShopInfo()
	 	if (result.code==0) {
	 		const info = result.data
	 		commit(RECEIVE_INFO,{info})
	 	}
	 },
	 // 异步获取商家评价列表
	 async getShopRatings({commit}) {
	 	const result = await reqShopRatings()
	 	if (result.code==0) {
	 		const ratings = result.data
	 		commit(RECEIVE_RATINGS,{ratings})
	 	}
	 },
	 // 异步获取商家商品列表
	 async getShopGoods({commit},callback) {
	 	const result = await reqShopGoods()
	 	if (result.code==0) {
	 		const goods = result.data
	 		commit(RECEIVE_GOODS,{goods})
			//数据更新了，通知一下组件
			callback && callback()
	 	}
	},
	// 同步更新food的count
	updateFoodCount({commit},{isAdd,food}) {
		if (isAdd) {
			commit(INCREMENT_FOOD_COUNT,{food})
		} else {
			commit(DECREMENT_FOOD_COUNT,{food})
		}
	}
}
