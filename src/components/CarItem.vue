<template>
  <div class="card">
    <img :src="car.imageUrl" class="card-img-top" :alt="car.name">
    <div class="card-body">
      <h5 class="card-title">{{ car.name }}</h5>
      <p class="card-text">{{ car.description }}</p>
      <p class="card-text"><small class="text-muted">Diária: R$ {{ car.dailyRate }}</small></p>
      <router-link :to="{ name: 'car-edit', params: { id: car.id } }" class="btn btn-primary">Editar</router-link>
      <button @click="deleteCar(car.id)" class="btn btn-danger">Deletar</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    car: Object
  },
  methods: {
    ...mapActions(['deleteCar'])
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
