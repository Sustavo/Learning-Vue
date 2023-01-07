<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Curso ativo: {{curso}}</h1>
    <router-link :to="{name: 'curso', params: { curso: 'javascript' }}">JavaScript</router-link>
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>
    <transition mode="out-in"> 
      <router-view :key="curso" ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  
};
</script>

<style>
  .v-enter,
  .v-leave-to {
    transform: translate3d(-20px, 0, 0);
    opacity: 0;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all .3s;
  }
</style>
