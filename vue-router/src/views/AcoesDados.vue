<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <p>{{ simbolo }}</p>
            <div>{{ acao }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["simbolo"],
    data() {
        return {
            acao: null,
            loading: true
        }
    },
    methods: {
        puxarAcao(simbolo) {
            fetch(`https://api.origamid.dev/stock/${simbolo}/quote`)
            .then(r => r.json())
            .then(r => {
                this.acao = r;
                this.loading = false;
            })
        }
    },
    created() {
        this.puxarAcao(this.simbolo);
    },
    // watch: {
    //     $route: "puxarAcao"
    // },  
    beforeRouteUpdate(to, from, next) {
        this.puxarAcao(to.params.simbolo)
        next()
    }
}
</script>

<style>

</style>