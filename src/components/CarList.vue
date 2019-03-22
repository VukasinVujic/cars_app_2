<template><div class="row">
    <div class="card col-md-4" v-for="car in cars" :key="car.id">
      <div class="card-body">
        <h5 class="card-title">{{ car.brand }}</h5>
        <p class="card-text">Model: {{ car.model }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Year: {{ car.year }}</li>
        <li class="list-group-item">Number of doors: {{ car.numberOfDoors }}</li>
        <li class="list-group-item">Maximum speed: {{ car.maxSpeed }}</li>
        <li class="list-group-item">{{ car.isAutomatic ? 'Automatic' : 'Manual' }}</li>
        <li class="list-group-item">Engine: {{ capitalize(car.engine) }}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Holder</a>
        <a href="#" class="card-link">Holder</a>
      </div>
    </div>
  </div>
    
</template>

<script>

import capitalize from 'lodash/capitalize'

export default {
    props: {
        cars: Array
    },

    methods: {
        capitalize(str){
            return capitalize(str)
        }
    }

}
</script>

<style>

</style>
