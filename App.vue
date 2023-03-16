<script>
	import { frameSize } from "@/api/rem.js"
	export default {
		data(){
			return{
				fontsize:''
			}
		},
		onLaunch: function() {
			console.log('app初始化')
            // #ifdef APP-PLUS
				plus.screen.lockOrientation("portrait-primary")
            // #endif 
			//打开rem.js
			frameSize()
			
		},
		onShow: function() {
			console.log('App 显示')
		},
		onHide: function() {
			console.log('App 隐藏')
		},
		        

	}
</script>

<style lang="scss" >
	body{
		margin: 0;
		padding: 0;
	}
	/*每个页面公共css */
	@import url('/styles/common.scss');
</style>
