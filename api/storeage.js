module.exports = {
	// 设置值
	setItem(key, value, module_name) {
		if (module_name) { // 处理对象
			let module_name_info = this.getItem(module_name);
			module_name_info[key] = value;
			uni.setStorageSync(module_name,module_name_info)
		} else {
			uni.setStorageSync(key, value);
		}
	},
	// 获取值
	getItem(key,module_name){
		if(module_name){
			let val = this.getItem(module_name);
			if(val) return val[key];
			return '';
		}else{
			return uni.getStorageSync(key);
		}
	},
	// 删除值
	clear(key){
        // 三目运算；有key值时，删除storage中键名为key的缓存。没有key值时，删除storage中的所有值。
		key?uni.removeStorageSync(key):uni.clearStorageSync();
	},
}
