import moment from 'moment'
import Vue from 'vue'
//Suport Monent js By Vue Filter 
Vue.filter('timeformat', (arg) =>{
   return moment(arg).startOf('hour').fromNow(); 
})