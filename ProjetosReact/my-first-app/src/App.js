import logo from './logo.svg';
import imagemTest from './images/1088735.jpg'
import './App.css';


// Metodo Principal
function App() {

  // Declarando uma variável 
  let myName = "Gabriel R. Messias"

  // Criando funções basicas
  function somar(a, b) {
    let result = a + b
    return result
  }
  function multiplicar(value1, value2) {
    let result = value2 * value2
    return result
  }

  // Funções no padrão Arrow Function
  const interceptClick = () => {
    //Printar no log
    console.log("Clicked the button")
  }

  const interceptarDigitacao = (event) => {
    // Pegando o conteúdo(valor) que foi digitado na caixa de texto
    let conteudoDigitado = event.target.value
    console.log(conteudoDigitado)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={imagemTest}></img>

        {/* Chamando uma variável */}
        <h3>My name is: {myName}</h3>

        {/* Usando uma função */}
        <h3>Result of {somar(10, 14)}</h3>

        {/* Criando um novo botão */}
        <button onClick={interceptClick}> Click here </button>

        <label>Digite um número</label>
        <input type='text' onChange={interceptarDigitacao} />

      </header>
    </div>
  );
}



export default App;
