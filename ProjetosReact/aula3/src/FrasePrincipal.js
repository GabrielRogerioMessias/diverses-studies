// Criando Componente
function FrasePrincipal() {
    // gera um número aleatório entre 1 e 2
    let numero = Math.floor((Math.random() * 2) + 1);
    let frase = "";

    if (numero === 1) {
        frase = "Game Over"
    } 
    if (numero === 2) {
        frase = "Game Concluído"
    }
    if(numero < 0){
        frase = "randon"
    }


    return (
        <div>
            <h2>{frase}</h2>
        </div>
    );

}
export default FrasePrincipal;