const DolarReal = {
    name: "DolarReal",
    template: `
        <div>
            <p>
                $1.00 = {{dados}}
            </p>        
        </div>
    
    `,
    data() {
        return {
            dados: {}
        }
    },
    methods: {
        real() {
            fetch("https://api.origamid.dev/exchange/usd")
            .then (response => response.json())
            .then (response => {
                this.dados = response.rates.BRL
            })
        }
    },
    created() {
        this.real();
    }
}

export default DolarReal;