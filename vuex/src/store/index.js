import Vue from 'vue';
import Vuex from 'vuex';
import acao from '@/store/acao.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        acao
    },
    state: {
        user: "Lobo",
        aulasCompletas: 10,
        aulasCompletasExec: [],
        livros: [
            {
              nome: "O Senhor dos Anéis",
              lido: true,
            },
            {
              nome: "Harry Potter",
              lido: true,
            },
            {
              nome: "As Crônicas de Gelo e Fogo",
              lido: false,
            }
          ]
    },
    getters: {
        livrosLidos: state => lido => state.livros.filter(livros => livros.lido === lido)
    },
    mutations: {
        CHANGE_USER(state, payload) {
            state.user = payload.user;
            state.totalAulas = payload.totalAulas;
        },
        COMPLETAR_AULA(state) {
            state.aulasCompletas++
        },
        COMPLETAR_AULA_EXERC(state,payload) {
            state.aulasCompletasExec.push(payload)
        },

    },
    actions: {
        completarAula(context, payload) {
            context.commit("COMPLETAR_AULA_EXERC", payload)
        },

        
    }
}) 