<template>
  <div class="form-container panel-info">
    <h2>{{ isEdit ? 'Editar Carro' : 'Adicionar Carro' }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="carName">Nome do Carro</label>
        <input type="text" class="form-control" id="carName" v-model="car.name" required>
      </div>
      <div class="form-group">
        <label for="pickupDate">Data de Retirada</label>
        <input type="date" class="form-control" id="pickupDate" v-model="car.pickupDate" required>
      </div>
      <div class="form-group">
        <label for="returnDate">Data de Devolução</label>
        <input type="date" class="form-control" id="returnDate" v-model="car.returnDate" required>
      </div>
      <div class="form-group">
        <label for="dailyRate">Valor da Diária</label>
        <input type="number" class="form-control" id="dailyRate" v-model="car.dailyRate" required>
      </div>
      <div class="form-group">
        <label for="carType">Tipo do Carro</label>
        <select class="form-control" id="carType" v-model="car.type" required>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Hatch">Hatch</option>
        </select>
      </div>
      <div class="form-group">
        <label for="description">Descrição</label>
        <textarea class="form-control" id="description" v-model="car.description" required></textarea>
      </div>
      <div class="form-group">
        <label for="carImageUrl">Link da Imagem</label>
        <input type="text" class="form-control" id="carImageUrl" v-model="car.imageUrl" required>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">{{ isEdit ? 'Atualizar' : 'Adicionar' }}</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['id'],
  data() {
    return {
      car: {
        id: '',
        name: '',
        pickupDate: '',
        returnDate: '',
        dailyRate: 0,
        type: '',
        description: '',
        imageUrl: ''
      }
    };
  },
  computed: {
    isEdit() {
      return !!this.id;
    }
  },
  methods: {
    ...mapActions(['addCar', 'updateCar']),
    handleSubmit() {

        if (!this.validateDates()) {
      return;
    }
    // Continuar com o processamento do formulário


      if (this.isEdit) {
        this.updateCar(this.car);
      } else {
        this.addCar(this.car);
      }
      this.$router.push({ name: 'car-list' });
    },

    validateDates() {
    const pickupDate = new Date(this.car.pickupDate);
    const returnDate = new Date(this.car.returnDate);

    if (pickupDate > returnDate) {
      alert('A data de retirada não pode ser posterior à data de devolução.');
      return false;
    }
    return true;
  }
  },
  created() {
    if (this.isEdit) {
      const car = this.$store.state.cars.find(car => car.id === this.id);
      if (car) {
        this.car = { ...car };
      }
    }
  }
};
</script>
<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 70%; /* Define a largura máxima do container */
  margin: auto; /* Centraliza o container horizontalmente */
  padding: 20px; /* Adiciona algum padding interno para espaçamento */
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-input,.form-select {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px rgba(0, 0, 0, 0.1);
}

.form-button {
  align-self: flex-end;
  margin-top: 20px;
}

@media (max-width: 600px) {
 .form-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
