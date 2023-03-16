import Vuex from "vuex"
import vue from "vue"
import { setItem } from "@/api/storeage.js"
vue.use(Vuex)
 
export default new Vuex.Store({
	state : {
		fontSize:''
	},
	mutations:{
		setFontSize(state,fontSize){
			state.fontSize = fontSize
			setItem('fontSize',fontSize)
		}
	},
	actions:{
		saveFontSize({commit},fontSize){
			commit('setFontSize',fontSize)
		}
	}
	
})
