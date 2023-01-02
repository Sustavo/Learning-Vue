<template>
  <div>
    <ul>
        <transition-group name="fade" mode="out-in">
            <li v-for="(produto, index) in carrinho" :key="produto.nome" >
                <p>{{ produto.nome }}</p>
                <p>{{ produto.preco }}</p>
                <button @click="remover(index)">Remover</button>
            </li>
        </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
    nome: "ListaAnimacao",
    data() {
        return {
            carrinho: [
                {
                    nome: "Notebook",
                    preco: 2399
                },
                {
                    nome: "Smartphone",
                    preco: 2399
                },
                {
                    nome: "Smartwatch",
                    preco: 2399
                },
                
            ]
        }
    },
    methods: {
        remover(index) {
            this.carrinho.splice(index,1);
        }
    }
};
</script>

<style>
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
</style>