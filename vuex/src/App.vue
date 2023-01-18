<template>
  <div id="app">
    <ul>
      <li v-for="livro in $store.state.livros" :key="livro.nome">{{ livro.nome }}</li>
    </ul>
    <h2>Livros Lidos</h2>
    <ul>
      <li v-for="livro in livrosLidos(true)" :key="livro.nome">{{ livro.nome }}</li>
    </ul>
    {{ $store.state.acao.acaoExec}}
    <Aluno />
    <Curso />
  </div>
</template>

<script>
import Aluno from './components/Exercícios/Aluno.vue';
import Curso from './components/Exercícios/Curso.vue';
import { mapGetters } from 'vuex';


export default {
  name: 'App',
  components: {
    Aluno,
    Curso
  },
  computed: {
    ...mapGetters(["livrosLidos"])
  },
  created() {
    this.$store.dispatch('acao/puxarAcao');
  }
}
</script>

<style>

</style>
