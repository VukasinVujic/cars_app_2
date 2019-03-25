import Vue from 'vue'
import VueRouter from 'vue-router'

import AppCars from './components/AppCars'
import AddCars from './components/AddCars'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/cars' , name: 'home' },
    {path: '/cars' ,component: AppCars , name: 'cars'},
    {path: '/add', component: AddCars, name: 'add'},
    {path: '/edit/:id', component: AddCars, name: 'edit' }
]

export const router = new VueRouter({
    mode:'history',
    routes
})