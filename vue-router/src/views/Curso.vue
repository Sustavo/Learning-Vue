<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>{{curso}}</h1>
    <router-link :to="{name: 'descricao'}">Descrição</router-link>
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <transition mode="out-in" name="topDown">
      <router-view :key="curso"></router-view>
    </transition>
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
  .topDown-enter,
  .topDown-leave-to {
    transform: translate3d(0, -40px, 0) scale(0.2);
    opacity: 0;
  }

  .topDown-enter-active,
  .topDown-leave-active {
    transition: all 0.3s;
  }
</style>
