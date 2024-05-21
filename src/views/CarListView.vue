<template>
  <div class="container mt-4">
    <h1>Lista de Carros</h1>
    <div class="row">
      <div v-for="car in cars" :key="car.id" class="col-md-4 mb-3">
        <CarItem :car="car" />
      </div>
    </div>
    <router-link to="/add" class="btn btn-primary mt-3">Adicionar Carro</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CarItem from '@/components/CarItem.vue';

export default {
  components: {
    CarItem
  },
  computed: {
    ...mapState(['cars'])
  }
};
</script>
