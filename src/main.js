import Vue from 'vue'
import App from './App.vue'

// vue浏览控制台的非生产环境打包提示
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')

// 关闭局部的eslint 提示错误
/* eslint-disable no-unused-vars*/
// const a = 11
