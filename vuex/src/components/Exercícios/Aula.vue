<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <p>Aulas</p>
    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        <p>{{ aula.nome }} | {{ aula.duracao }} horas</p>
        <button @click="completarAula(aula)">Completar Aula</button>
      </li>
    </ul>
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      aulas: [
          {
            nome: "HTML e CSS",
            duracao: 15
          },
          {
            nome: "JavaScript",
            duracao: 30
          },
          {
            nome: "UX Design",
            duracao: 20
          }
      ]
    }
  },
  methods: {
    ...mapActions(["completarAula"]),
    
  }
}
</script>

<style>

</style>