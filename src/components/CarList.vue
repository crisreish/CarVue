<template>
  <div>
    <h1>Lista de Carros</h1>
    <div class="row">
      <div v-for="car in cars" :key="car.id" class="col-md-4 mb-3">
        <CarItem :car="car" />
      </div>
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
  
      return [];
    }
  }
};
</script>
