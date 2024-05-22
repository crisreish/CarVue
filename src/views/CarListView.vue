<template>
  <div class="container mt-4">
    <h1>Lista de Carros</h1>
    <router-link to="/add" class="btn btn-primary mt-3">Adicionar Carro</router-link>
 
    <div v-if="hasCars">
   
    <div class="row">
      <div v-for="car in cars" :key="car.id" class="col-md-4 mb-3">
        <CarItem :car="car" />
      </div>
    </div>
  </div>
  <div v-else>
      <p>Nenhum carro cadastrado.</p>
    </div>
  </div>
  <Footer/>
</template>

<script>
import { mapState } from 'vuex';
import CarItem from '@/components/CarItem.vue';

export default {
  components: {
    CarItem
  },
  computed: {
    ...mapState(['cars']),

  cars() {
      return this.$store.getters.cars; // Supondo que você tenha um getter 'cars' no Vuex
    },
  hasCars() {
       return Array.isArray(this.cars) && this.cars.length > 0;
    }
  },
};
</script>
