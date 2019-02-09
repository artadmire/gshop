import {
RECEIVE_ADDRESS,
RECEIVE_CATIGORYS,
RECEIVE_SHOPS
} from './mutation-types'
export default {
     [RECEIVE_ADDRESS](state,{address}){
         state.address=address
     },
    [RECEIVE_CATIGORYS](state, {categorys}) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
    }

}