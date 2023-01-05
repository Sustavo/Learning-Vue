<template>
  <div id="app">
    <nav>
      <!-- Define o link para o router -->
      <router-link to="/">Home</router-link>
      <router-link to="/sobre">Cursos</router-link>
    </nav>
    <!-- Local em que o componente aparecerá -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
