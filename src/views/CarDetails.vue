<!-- CarItem.vue -->
<template>
    
  <center>
  <div class="col-md-4 mb-4">
    <div class="card bg-warning text-dark">
      <img :src="car_?.imageUrl" alt="Imagem do Carro" class="car-image" />
      <div class="card-body">
        <h5 class="card-title">{{ car_?.name }}</h5>
        <p class="card-text">
          {{ car_?.description }}

    

        </p>
          <div class="price-info">
        <p>A partir de <span>R$ {{ car_?.price }}</span> /dia</p>
        <p>*Proteções e taxa de aluguel (12%) não inclusas neste valor.</p>
      </div>
      <button @click="openCarDetails">Quero Reservar</button>
  </div>
</div>
</div>
</center>

  <FooterProject/>
 </template>
 <style scoped>
 .car-item {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   border-radius: 10px; /* Adiciona borda arredondada para suavizar a aparência de um círculo */
 }
 
 .car-image {
   width: 400px;
   height: auto;
   object-fit: cover;
   border-radius: 10px;
   margin-right: 20px;
 }
 
 h2, p {
   margin-bottom: 20px; /* Adiciona margem abaixo do título e descrição para dar espaço */
 }
 
 button {
   background-color: #007bff; /* Cor de fundo do botão */
   color: white; /* Cor do texto do botão */
   padding: 10px 20px; /* Padding interno do botão */
   border-radius: 10px; /* Bordas arredondadas do botão */
   margin-top: 10px; /* Margem acima do botão */
 }
 
 @media (max-width: 600px) {
  .car-item {
     flex-direction: row; /* Muda para linha em telas menores */
   }
 }
 </style>
  
  <script>
  import { mapGetters } from 'vuex';
  import FooterProject from '@/components/FooterProject.vue'
  export default {
    components: {
    FooterProject,
  },
    props: ['car',"getTempCar"],
    methods: {
      openCarDetails() {
        this.$router.push({ name: 'car-details', params: { car: this.car } });
      }
    },
    computed: {
      car_() {
      return this.$store.getters.getTempCar || {}; 
    },
   ...mapGetters([
      'getTempCar',
    ]),
    carDetails() {
    return this.$store.getters.getTempCar || {}; 
  }
  },
  mounted() {
    
    if (this.carDetails) {
    console.log(this.carDetails.name); // Agora é seguro acessar 'name'
  }
    const car = this.getTempCar;
        if (car) {
         console.log(car);
    }
   },
  };
  </script>