import DolarReal from "./DolarReal.js"

const AcaoApple = {
    name: 'AcaoApple',
    template: `
        <div>
            <p>Apple MarketCap: {{dados}}</p>
            <dolar-real></dolar-real>
        </div>
    `,
    components: {
        DolarReal
    },
    data() {
        return {
            dados: {}
        }
    },
    methods: {
        puxarAcao() {
            fetch("https://api.origamid.dev/stock/aapl/quote")
            .then (response => response.json())
            .then (response => {
                this.dados = response.marketCap
            })
        }
    },
    created() {
        this.puxarAcao();
    }
}

export default AcaoApple