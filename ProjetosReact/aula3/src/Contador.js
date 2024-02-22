function Contador() {
    let contador = 0;
    
    const incrementar = () => {
         contador = contador + 1;
        console.log('Contador: ', contador)
    }


    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );


}
export default Contador;