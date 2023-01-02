<!-- ScopedSlots -->
<template>
  <div id="app">
    <!-- <ModalAlerta>
      <template v-slot:header>
        <h1>Header do Slot</h1>
      </template>
      <button>Comprar</button>
      <template v-slot:footer>
        <p>Esse é o footer do slot.</p>
      </template>
    </ModalAlerta>

    <ModalAlerta2>
        <template v-slot:default="slotProps">{{ slotProps }}</template>
    </ModalAlerta2> -->

    <button @click="componenteAtivo = 'AulaDescricao'" >Descricao</button>
    <button @click="componenteAtivo = 'AulaDownloads'" >Downloads</button>

    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>

    <!-- <div class="menu">
      <button @click="componenteMenu = 'FalandoEmpresa'">Serviços</button>
      <button @click="componenteMenu = 'ServicoEmpresa'">Contato</button>
      <button @click="componenteMenu = 'FormularioContato'">Quem Somos</button>
    </div>

    <keep-alive>
      <component :is="componenteMenu"></component>
    </keep-alive> -->


  </div>
</template>

<script>
  // import ModalAlerta from './components/Slots/ModalAlerta.vue';
  // import ModalAlerta2 from './components/Slots/ModalAlerta2.vue';
  import AulaDescricao from './components/Dynamic/AulaDescricao.vue';
  // import AulaDownloads from './components/Dynamic/AulaDownloads.vue';
  // import FalandoEmpresa from './components/Exercícios/dynamic/FalandoEmpresa.vue'
  // import ServicoEmpresa from './components/Exercícios/dynamic/ServicoEmpresa.vue'
  // import FormularioContato from './components/Exercícios/dynamic/FormularioContato.vue'
  

  export default {
    name: 'app',
    components: {
      // ModalAlerta,
      // ModalAlerta2,
      AulaDescricao,
      AulaDownloads: () => import("./components/Dynamic/AulaDownloads.vue"), //Deixando a chamda de forma asíncrona
      // FalandoEmpresa,
      // ServicoEmpresa,
      // FormularioContato,
      
    },
    data() {
      return {
        componenteAtivo: "AulaDescricao",
        // componenteMenu: "FalandoEmpresa"
      }
    }
  };
</script>

<style>

</style>
