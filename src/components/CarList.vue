<template>
  <div>
    <h1>Lista de Carros</h1>
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

</template>

<script>
import CarItem from './CarItem.vue';

export default {
  components: {
    CarItem
  },
  computed: {
    cars() {
      return this.$store.state.cars; // Certifique-se de que 'cars' esteja corretamente mapeado do estado Vuex
      //return [];
    },
    hasCars() {
       return Array.isArray(this.cars) && this.cars.length > 0;
    }
  }
};
</script>
