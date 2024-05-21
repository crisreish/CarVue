<template>
  <div class="container mt-4">
    <CarForm :id="$route.params.id" />
  </div>
</template>

<script>
import CarForm from '@/components/CarForm.vue';

export default {
  components: {
    CarForm
  }
};
</script>
