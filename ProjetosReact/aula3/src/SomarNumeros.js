import React, { useState } from 'react'

function SomarNumeros() {

    const [result, setResult] = useState(0)
    let numero1 = 0;
    let numero2 = 0;

    const capturarNumeroUm = (event) => {
        numero1 = parseInt(event.target.value,10)

    }
    const capturarNumeroDois = (event) => {
        numero2 = parseInt(event.target.value, 10)
    }
    const somarNumeros = () => {
        setResult(numero1 + numero2)
        console.log('Result:', result)
    }

    return (
        <div>
            <label>Digite um número</label>
            <input type='text' onChange={capturarNumeroUm}></input>
            <input type='text' onChange={capturarNumeroDois}></input>
            <p>Resultado: {result}</p>
            <button onClick={somarNumeros}>Somar</button>
        </div>
    )
}
export default SomarNumeros;
