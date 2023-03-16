import Vue from "vue"
import store from "../store/index.js"
export const frameSize = ()=>{
	let designWidth = 375, fontsize= ''; //因设计图的宽度
	//窗体改变大小触发事件
	uni.onWindowResize(res => {
		//100*屏幕宽度/设计稿宽度
		fontsize = Math.floor((100 * res.size.windowWidth) / designWidth) + 'px';
		store.dispatch("saveFontSize",fontsize)
	});

	uni.getSystemInfo({
		success(res) {
			fontsize = Math.floor((100 * res.screenWidth) / designWidth) + 'px';
			store.dispatch("saveFontSize",fontsize)
		}
	});
	
}
