<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1 @click="navegarCursos">Essa é a home</h1>
</template>

<script>
export default {
  methods: {
    navegarCursos() {
      setTimeout(() => {
        this.$router.push("acoes");
      }, 1000)
    }
  }
};
</script>

<style>
</style>
