<template>
    <div>
      <h2>Pagamento</h2>
      <p>Carro: {{ car.name }}</p>
      <p>Valor da Diária: R$ {{ car.dailyRate }}</p>
      <form @submit.prevent="handlePayment">
        <div class="form-group">
          <label for="cardNumber">Número do Cartão</label>
          <input type="text" class="form-control" id="cardNumber" v-model="paymentInfo.cardNumber" required>
        </div>
        <div class="form-group">
          <label for="cardExpiry">Validade</label>
          <input type="text" class="form-control" id="cardExpiry" v-model="paymentInfo.cardExpiry" required>
        </div>
        <div class="form-group">
          <label for="cardCVC">CVC</label>
          <input type="text" class="form-control" id="cardCVC" v-model="paymentInfo.cardCVC" required>
        </div>
        <button type="submit" class="btn btn-primary">Pagar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        car: {},
        paymentInfo: {
          cardNumber: '',
          cardExpiry: '',
          cardCVC: ''
        }
      };
    },
    created() {
      const carId = this.$route.params.id;
      this.car = this.$store.state.cars.find(car => car.id === carId) || {};
    },
    methods: {
      handlePayment() {
        alert('Pagamento realizado com sucesso!');
        this.$router.push({ name: 'car-list' });
      }
    }
  };
  </script>
  