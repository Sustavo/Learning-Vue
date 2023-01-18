export default {
    namespaced: true,
    state: {
        acaoExec: null,
    },
    mutations: {
        UPDATE_ACAO(state, payload) {
            state.acaoExec = payload;
        }
    },
    actions: {
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
}