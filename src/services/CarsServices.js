import axios from 'axios'

export default class CarsServices {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll(){
        return axios.get('cars')
    }
}

export const cars = new CarsServices()