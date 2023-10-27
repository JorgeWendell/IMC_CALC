import { useState } from "react"

import stylesform from './Formulario.module.css'

const Formulario = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const calculo = () => {
        const soma = peso / (altura * altura);

        if (soma < 18.5) {
            return (
                <p className={stylesform.p1}> Abaixo do Peso Normal</p>
            )        
        }else if(soma >= 18.5 && soma < 24.9 ) {
            return (
                <p className={stylesform.p2}> Peso Ideal</p>
            )
        } else if(soma >= 25 && soma < 29.9) {
            return (
                <p className={stylesform.p3}>Você está acima do peso !</p>
            )
        }else if (soma >= 30 && soma < 34.9) {
            return (
                <p className={stylesform.p4}>Você está com Obesidade Grau I !</p>
            )
        } else if (soma >= 35 && soma < 40) {
            return (
                <p className={stylesform.p5}>Você está com Obesidade Grau II !</p>
            )
        } else if (soma > 40) {
            return (
                <p className={stylesform.p6}>Você está com Obesidade Grau III !</p>
            )
        }
    }


    return (
        <form className={stylesform.form}>
            <input className={stylesform.input} type="number" placeholder="Insira o seu Peso" onChange={evento => setPeso(evento.target.value)} />
            <input className={stylesform.input} type="number" placeholder="Insira o sua Altura" onChange={evento => setAltura(evento.target.value)} />
            <br />
            <div>
            {calculo()}
            </div>
        </form>
    )
}

export default Formulario;