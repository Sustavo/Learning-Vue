<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <p>Aula {{ totalAulas }}, esse é o usuário: {{ user }}, {{ aulasCompletas }}</p>
        <button @click="mostrarConsole">Mostrar no console</button>
    </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            totalAulas: 25,
            nome: "André"

        }
    },
    computed: {
        ...mapState(["user", "aulasCompletas"]),
        nomeMaiusculo() {
            return this.nome.toUpperCase();
        }
    },  
    methods: {
        mostrarConsole() {
            console.log(this.user)
        }
    }
}
</script>

<style>

</style>