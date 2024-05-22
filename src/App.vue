<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand font-weight-bold">Home</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/cars" class="nav-link font-weight-bold">Gestão de Frota</router-link>
            </li>
          </ul>

          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
             <!--  <router-link to="/cars" class="nav-link font-weight-bold">Lista de Carros</router-link>-->
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
             <!--  <router-link to="/add" class="nav-link font-weight-bold">Adicionar Carro</router-link>-->
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
  <Footer/>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  padding-top: 0px;
}
.navbar-brand,
.nav-link {
  font-weight: bold;
}
</style>

