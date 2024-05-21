import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    cars: []
  },
  mutations: {
    ADD_CAR(state, car) {
      state.cars.push(car);
    },
    UPDATE_CAR(state, updatedCar) {
      const index = state.cars.findIndex(car => car.id === updatedCar.id);
      if (index !== -1) {
        state.cars.splice(index, 1, updatedCar);
      }
    },
    DELETE_CAR(state, carId) {
      state.cars = state.cars.filter(car => car.id !== carId);
    }
  },
  actions: {
    addCar({ commit }, car) {
      car.id = uuidv4();
      commit('ADD_CAR', car);
    },
    updateCar({ commit }, car) {
      commit('UPDATE_CAR', car);
    },
    deleteCar({ commit }, carId) {
      commit('DELETE_CAR', carId);
    }
  },
  getters: {
    cars: state => state.cars
  }
});
