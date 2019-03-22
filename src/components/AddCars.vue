<template>

<div>

<car-form :car="car" @onSubmit="addCar"> </car-form>

</div>
    
</template>

<script>

import CarForm from '../components/CarForm.vue'
import {cars} from '../services/CarsServices'

export default {
    components: {
        CarForm
    },
    data(){
        return{
            car:{
                brand: '',
                model: '',
                maxSpeed: 200,
                year: 1990,
                isAutomatic: false,
                numberOfDoors: 4,
                engine: 'diesel'     
            }
        }
    },
    methods: {
        addCar(){
           cars.add(this.car).then((success) => {
               this.redirectToCars() 
           }).catch((error) => {
               console.log(error);
           })

        },
        redirectToCars(){
        this.$router.push({name: 'cars'})   
        }

    }

}
</script>

<style>

</style>
