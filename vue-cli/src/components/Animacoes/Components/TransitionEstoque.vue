<template>
  <div>
    <button @click="estoque++" >Adicionar Estoque</button>
    <button @click="estoque = 0" >Deletar Estoque</button>
    <transition name="fade" mode="out-in">
        <p v-if="estoque > 0" key="estoque" >{{ estoque }} itens em estoque</p>
        <p v-else key="esgotado">Produto Fora de Estoque</p>
    </transition>
  </div>
</template>

<script>
export default {
    name: "TransitionEstoque",
    data() {
        return {
            estoque: 0,
        }
    }

}
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>