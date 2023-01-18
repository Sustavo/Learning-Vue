import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: "Lobo",
        aulasCompletas: 10,
        aulasCompletasExec: [],
        acaoExec: null,
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
        UPDATE_ACAO(state, payload) {
            state.acaoExec = payload;
        }
    },
    actions: {
        completarAula(context, payload) {
            context.commit("COMPLETAR_AULA_EXERC", payload)
        },

        puxarAcao(context) {
            fetch('https://api.origamid.dev/stock/aapl/quote')
            .then(r => r.json())
            .then(r => {
                console.log(context)
                context.commit("UPDATE_ACAO", r);
                context.dispatch("completarAula", {
                    aula: "Apple"
                })
            })
        }
    }
}) 