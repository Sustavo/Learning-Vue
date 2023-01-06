<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>{{curso}}</h1>
    <router-link :to="{name: 'descricao'}">Descrição</router-link>
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  methods: {
    puxarDados() {
      console.log("puxei api")
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(this)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    this.puxarDados()
    next()
  }
};
</script>

<style>
</style>
