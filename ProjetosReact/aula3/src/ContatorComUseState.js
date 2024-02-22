import { useState } from "react";

function ContadorComUseState() {
    const [contador, setContador] = useState(0);

    const incrementar = () => { 
        setContador(contador + 1);
        console.log('Contador:', contador)
    }

    return(
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar Valor</button>
            
        </div>
    );

}
export default ContadorComUseState;