
/* 包含n个接口请求函数的模块*/
import ajax from './ajax'
const BASE_URL='/api'
//1 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//2 获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
//3获取商家列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL +'/shops', {
  longitude,
  latitude
})