import App from './App'
import store from "./store/index.js"
import uView from 'uview-ui'
Vue.prototype.$store = store
Vue.prototype.$fontSize = ()=>{
	return  uni.getStorageSync('fontSize') || '16px'
}

Vue.use(uView)
// if(!Vue.prototype.$fontSize){
// 	uni.setStorageSync('fontSize','1px')
// 	store.commit('saveFontSize' , '1px')
// }
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app' 
// 导入invite.js
import invite from './components/public/invite/invite.js'
// 安装插件
Vue.use(invite)


const app = new Vue({
  ...App,
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif