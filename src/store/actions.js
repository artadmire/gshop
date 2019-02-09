import {
  RECEIVE_ADDRESS,
  RECEIVE_CATIGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
import {
    reqAddress,
    reqFoodCategorys,
    reqShops
} from '../api/index'
export default {
    //异步获取addresss
    async getAddress({commit,state}){
        const geohash=state.latitude+','+state.longitude
      const result = await reqAddress(geohash)
      if(result.code===0){
          const address=result.data
          commit(RECEIVE_ADDRESS,{address})
      }
     },
      //异步获取cate
      async getCategorys({commit,state}) {
        const result = await reqFoodCategorys()
        if (result.code === 0) {
          const categorys = result.categorys
          commit(RECEIVE_CATIGORYS, {categorys})
        }
      },
       //异步获取shops
       async getShops({commit,state}) {
         const { longitude,latitude}=state
         const result = await reqShops(longitude, latitude)
         if (result.code === 0) {
           const shops = result.data
           commit(RECEIVE_SHOPS, {shops})
         }
       }
   
}