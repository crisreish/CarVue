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
              <a href="#" class="btn btn-dark">Detalhes</a>
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
          name: 'Geely Galaxy E5 2025',
          description: 'SUV elétrico compacto, oferece bastante espaço para os ocupantes. células da bateria do novo SUV elétrico. Células da bateria que elimina o nível de ruído do módulo.',
          imageUrl: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/09/18111512/16.09.21_Creta-Ultimate-1160x652.jpg'
        },
        {
          id: 2,
          name: 'Hyundai Santa Cruz 2024',
          description: 'Picape compacta monobloco, conjunto ótico full LED e rodas diamantadas de até 19 polegadas. Oferece um espaço de caçamba generoso, com capacidade para 935 litros.',
          imageUrl: 'https://carrosbemmontados.com.br/wp-content/webp-express/webp-images/uploads/2024/04/2025-HYUNDAI-SANTA-CRUZ-8-1536x864.jpg.webp'
        },
        {
          id: 3,
          name: 'GWM Ora 03 2024',
          description: 'Farol alto automático, que reduz o facho do farol quando detecta veículo no sentido oposto. Retrovisores externos com setas, rebatimento elétrico e aquecimento.',
          imageUrl: 'https://autoentusiastas.com.br/ae/wp-content/uploads/2023/08/AE-GWM-Ora-03-divulgacao-1.png'
        },
        {
          id: 4,
          name: 'Renault Zoe e-tech Elétrico',
          description: 'Carro 100% elétrico com zero emissão de ruídos e autonomia de 385 km, com Full Park Assist e teto solar panorâmico. Design inovador de crossover esportivo.',
          imageUrl: 'https://s1.1zoom.me/big3/956/359267-admin.jpg'
        },
        {
          id: 5,
          name: 'Toyota Yaris 2023',
          description: 'Yaris XL 1.5 Flex Automático. transmissão automática, direção elétrica, vidros elétricos dianteiros e traseiros, para-sol com espelho e iluminação.',
          imageUrl: 'https://cdn.motor1.com/images/mgl/9wBev/s1/comparativo-toyota-yaris-x-vw-polo.jpg'
        },
        {
          id: 6,
          name: 'BMW M3 Laranja 2025',
          description: 'Direção Elétrica, Comando de áudio no volante, Controle de estabilidade, Distribuição eletrônica de frenagem, Kit Multimídia, Pára-choques na cor do veículo.',
          imageUrl: 'https://wallpaper.forfun.com/fetch/b1/b1c65ef9df8f01eb6643675c88e41224.jpeg'
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
