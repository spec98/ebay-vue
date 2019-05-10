import Vue from 'vue'
import Custom from './vue.vue'
import Hello from './hello.vue'

new Vue({
  el: '#app',
  render: h => h(Custom)
})

new Vue({
	el:'#hello',
	render: h => h(Hello)
});
