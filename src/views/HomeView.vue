<template>
  <div>
    <!-- Cabeçalho -->
    <header class="bg-dark py-3">
      <div class="container text-center">
        <h1 class="text-light mb-0 font-italic font-large">Next Carros >>></h1>
    </div>
  </header>

  
    <!-- Carousel de Carros -->
    <div id="carCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- Slides -->
        <div v-for="(car, index) in cars" :key="car.id" :class="['carousel-item', index === 0 ? 'active' : '']">
          <img :src="car.imageUrl" class="d-block w-100" :alt="'Slide ' + (index + 1)">
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ car.name }}</h5>
            <p>{{ car.description }}</p>
          </div>
        </div>
      </div>
      <!-- Controles do Carousel -->
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
      </a>
    </div>

    <!-- Lista de Carros -->
    <section class="container mt-5">
      <h2>Carros Disponíveis</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="car in cars" :key="car.id">
          <div class="card bg-warning text-dark">
            <img :src="car.imageUrl" class="card-img-top" :alt="car.name">
            <div class="card-body">
              <h5 class="card-title">{{ car.name }}</h5>
              <p class="card-text">{{ car.description }}</p>
              <a href="#" class="btn btn-dark">Alugar</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rodapé -->
    <footer class="bg-dark text-light py-3 mt-auto">
      <div class="container">
        <p class="m-0 text-center">© 2024 Next Carros | Locadora de Carros. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        {
          id: 1,
          name: 'ABT RS 3-S Sportback 2024',
          description: 'O ABT RS 3-S Sportback 2024 combina perfeitamente desempenho e estilo. A indústria automobilística está avançando.',
          imageUrl: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/09/18111512/16.09.21_Creta-Ultimate-1160x652.jpg'
        },
        {
          id: 2,
          name: 'Geely Galaxy E5 2025',
          description: 'O Futuro da Mobilidade: Geely Galaxy E5 A indústria automobilística está passando por uma revolução.',
          imageUrl: 'https://carrosbemmontados.com.br/wp-content/webp-express/webp-images/uploads/2024/04/2025-HYUNDAI-SANTA-CRUZ-8-1536x864.jpg.webp'
        },
        {
          id: 3,
          name: 'Volkswagen Tiguan L 2024',
          description: 'Volkswagen Tiguan L 2024: Um SUV Compacto Repleto de Recursos O Volkswagen Tiguan L 2024',
          imageUrl: 'https://autoentusiastas.com.br/ae/wp-content/uploads/2023/08/AE-GWM-Ora-03-divulgacao-1.png'
        }
      ]
    };
  }
};
</script>

<style>
.carousel-item {
  background-color: rgb(255, 174, 0);
}
.carousel-caption {
  background-color: rgb(255, 174, 0);
}
</style>

<style>
  .text-center {
    text-align: center;
  }
  .font-italic {
    font-style: italic;
  }
  .font-large {
    font-size: 4rem; /* Ajuste o tamanho da fonte conforme necessário */
  }
</style>
