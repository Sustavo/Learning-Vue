<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <p>Aula {{ totalAulas }}, esse é o usuário: {{ user }}, {{ aulasCompletas }}</p>
        <button @click="handleClick">Modificar Usuário</button>
        <button @click="COMPLETAR_AULA">Completar Aula</button>
        <input type="text" v-model="novoUser">
    </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data() {
        return {
            totalAulas: 25,
            nome: "André",
            novoUser: ""

        }
    },
    computed: {
        ...mapState(["user", "aulasCompletas"]),
        nomeMaiusculo() {
            return this.nome.toUpperCase();
        }
    },  
    methods: {
        ...mapMutations(["CHANGE_USER", "COMPLETAR_AULA"]),
        handleClick() {
            this.CHANGE_USER({
                user: this.novoUser,
                totalAulas: this.totalAulas 
            })
        }
    }
}
</script>

<style>

</style>