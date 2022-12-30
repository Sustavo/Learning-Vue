const MostrarTempo = {
    name: "MostrarTempo",
    template: `
        <div>
            <p>
                Temperatura: {{dados}}
            </p>        
        </div>
    
    `,
    data() {
        return {
            dados: {}
        }
    },
    methods: {
        dadosTempo() {
            fetch("https://api.origamid.dev/weather/rio")
            .then (response => response.json())
            .then (response => {
                this.dados = response.consolidated_weather[0].max_temp
            })
        }
    },
    created() {
        this.dadosTempo();
    }
}

export default MostrarTempo;