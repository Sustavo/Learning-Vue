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
<!-- 
    <button @click="componenteAtivo = 'AulaDescricao'" >Descricao</button>
    <button @click="componenteAtivo = 'AulaDownloads'" >Downloads</button>

    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive> -->
    <!-- <div class="menu">
      <button @click="componenteMenu = 'FalandoEmpresa'">Serviços</button>
      <button @click="componenteMenu = 'ServicoEmpresa'">Contato</button>
      <button @click="componenteMenu = 'FormularioContato'">Quem Somos</button>
    </div>

    <keep-alive>
      <component :is="componenteMenu"></component>
    </keep-alive> -->

    <!-- <TransitionEstoque /> -->

    <!-- <ul>
      <li @click="componenteAtivo = 'FalandoEmpresa'">Sobre</li>
      <li @click="componenteAtivo = 'ServicoEmpresa'">Serviços</li>
    </ul>
    <transition name="fade" mode="out-in">
      <component :is="componenteAtivo"></component>
    </transition> -->

    <MoveAnimacao />


  </div>
</template>

<script>
  // import ModalAlerta from './components/Slots/ModalAlerta.vue';
  // import ModalAlerta2 from './components/Slots/ModalAlerta2.vue';
  // import AulaDescricao from './components/Dynamic/AulaDescricao.vue';
  // import AulaDownloads from './components/Dynamic/AulaDownloads.vue';
  // import FalandoEmpresa from './components/Exercícios/dynamic/FalandoEmpresa.vue'
  // import ServicoEmpresa from './components/Exercícios/dynamic/ServicoEmpresa.vue'
  // import FormularioContato from './components/Exercícios/dynamic/FormularioContato.vue'
  // import TransitionAnimation from './components/Animacoes/TransitionAnimation.vue'
  // import TransitionAppear from './components/Animacoes/Transition/TransitionAppear.vue';
  // import TransitionExerc from './components/Exercícios/Transition/TransitionExerc.vue';
  // import TransitionHooks from './components/Animacoes/Transition/TransitionHooks.vue'
  // import TransitionEstoque from './components/Animacoes/Components/TransitionEstoque.vue';
  // import ListaAnimacao from './components/Animacoes/Lists/ListaAnimacao.vue';
  import MoveAnimacao from './components/Animacoes/Lists/MoveAnimacao.vue';
  

  export default {
    name: 'app',
    components: {
      // ModalAlerta,
      // ModalAlerta2,
      // AulaDescricao,
      // AulaDownloads: () => import("./components/Dynamic/AulaDownloads.vue"), //Deixando a chamda de forma asíncrona
      // FalandoEmpresa,
      // ServicoEmpresa,
      // FormularioContato,
      // TransitionAnimation,
      // TransitionAppear,
      // TransitionExerc,
      // TransitionHooks,
      // TransitionEstoque,
      // ListaAnimacao,
      MoveAnimacao,
    },
    data() {
      return {
        // componenteAtivo: "FalandoEmpresa",
        // componenteMenu: "FalandoEmpresa"
      }
    }
  };
</script>

<style>

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>
