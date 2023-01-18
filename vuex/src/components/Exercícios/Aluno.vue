<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <p>Aluno {{ aulasCompletasExec }}</p>
    </div>
  </template>
  
  <!-- eslint-disable vue/multi-word-component-names -->
  <script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState(["aulasCompletasExec"]),
    }
  }
  </script>
  
  <style>
  
  </style>