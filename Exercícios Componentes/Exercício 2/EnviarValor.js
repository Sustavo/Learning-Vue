const EnviarValor = {
    name: 'EnviarValor',
    template: `
        <div>
            <p>simbolos</p>
            <p> aapl -> Apple</p>
            <p>goog -> Google</p>
            <p>msft -> Microsoft</p>
            <p>amzn -> Amazon</p>
            <p>fb -> Facebook</p>
            <input v-model='textoInput' >
            <button @click="enviarInput" >Enviar</button><br>
            <ul>
                <li v-for="(dado,key) in dados">{{key}}: {{dado}}</li>
            </ul>
        </div>
    `,
    data() {
        return {
            Simbolo: '',
            textoInput: '',
            dados: {}
        }
    },
    methods: {
        async enviarInput() {
            this.Simbolo = this.textoInput
            await fetch(`https://api.origamid.dev/stock/${this.Simbolo}/quote`)
            .then(response => response.json())
            .then(response => {
                this.dados = response;
            })
            console.log(this.dados)
        }
    }
    
}

export default EnviarValor;