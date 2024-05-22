<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <h5>Gestão de Frotas</h5>
          <ul>
            <li><a href="#">Vantagens</a></li>
            <li><a href="#">Como funciona</a></li>
            <li><a href="#">Sistemas de Gestão</a></li>
            <li><a href="#">Institucional</a></li>
            <li><a href="#">Outras soluções</a></li>
            <li><a href="#">Veículos Pesados</a></li>
            <li><a href="#">Veículos Especiais</a></li>
            <li><a href="#">Elétricos</a></li>
          </ul>
        </div>
        <div class="col">
          <h5>Sobre nós</h5>
          <ul>
            <li><a href="#">Sofit</a></li>
            <li><a href="#">Institucional</a></li>
            <li><a href="#">Porque a Next Carros</a></li>
            <li><a href="#">Sustentabilidade</a></li>
            <li><a href="#">Trabalhe Conosco</a></li>
            <li><a href="#">Seja nosso fornecedor</a></li>
          </ul>
        </div>
        <div class="col">
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Contrato Pessoa Física</a></li>
            <li><a href="#">Contrato Pessoa Jurídica</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #ffc107;
  color: white;
  padding: 20px 0;
  left: 0;
  bottom: 0;
  width: 100%;
}

.row {
  display: flex;
  justify-content: space-between;
}

.col {
  margin-bottom: 20px;
}

h5 {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 5px;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: #ddd;
}
</style>