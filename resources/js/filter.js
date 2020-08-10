import moment from 'moment'
import Vue from 'vue'
//Suport Monent js By Vue Filter 
Vue.filter('timeformat', (arg) =>{
   return moment(arg).startOf('hour').fromNow(); 
})

Vue.filter('wordfilter',(text, length, suffix )=>{
   return text.substring(0, length )+suffix
})