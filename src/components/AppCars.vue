<template>
    
  <div>
        <h1>Cars holder</h1>
      <div>

        <carList :cars="cars" @onDelete="deleteCar"></carList>

      </div>


      </div>  
</template>

<script>
import CarList from '../components/CarList.vue'
import {cars}  from '../services/CarsServices'



export default {
  components: {
    CarList
  },

  data(){
    return {
      cars: []
    }
  },
   beforeRouteEnter (to, from, next) {
    cars.getAll()
      .then((response) => {
        next((vm) => {
          vm.cars = response.data
        })
      }).catch((error) => {
        console.log(error)
      })
  },
  methods: {
    deleteCar(car){
      cars.remove(car.id)
        .then((success) => {
          this.cars = this.cars.filter(c => c !== car)
        })
    }
  }


}
</script>

<style>

</style>
