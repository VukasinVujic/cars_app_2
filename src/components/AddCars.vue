<template>

<div>

<car-form :car="car" @onSubmit="addCar" @onReset="resetForm"> </car-form>

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
            car: this.getDefaultCar()
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
        },
        resetForm(){
            this.car = this.getDefaultCar()
        },
        getDefaultCar(){
            return {
                brand: '',
                model: '',
                maxSpeed: 200,
                year: 1990,
                isAutomatic: false,
                numberOfDoors: 4,
                engine: 'diesel'     
            }
        }    
    }

}
</script>

<style>

</style>
