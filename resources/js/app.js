/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import Vuex from 'vuex'
import vuestore from './store'
import {routes} from '../routes'
import { filter } from './filter'  //* Importing Time Filter (Moment JS)
import VueRouter from 'vue-router'

import { Form, HasError, AlertError } from 'vform'
// SweetAlert 2
import Swal from 'sweetalert2'

//Vue X
Vue.use(VueRouter)
Vue.use(Vuex)

//Store Connection
const store = new Vuex.Store(
    vuestore
)
window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)



window.Swal = Swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  
  



window.Toast = Toast
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('admin-main', require('./components/admin/AdminMain.vue').default)
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const router = new VueRouter({
    routes,
    mode: 'hash',
})
const app = new Vue({
    el: '#app',
    router,
    store
});
