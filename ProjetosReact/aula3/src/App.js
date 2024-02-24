import './App.css';
import FrasePrincipal from './FrasePrincipal';
import DataHora from './DataHora';
import ContadorComUseState from './ContatorComUseState';
import SomarNumeros from './SomarNumeros';
import Contador from './Contador';



function App() {


  return (
    <div className="App">
  
      <ContadorComUseState></ContadorComUseState>
      <h2>-----------------------------------------------------------------</h2>
       <SomarNumeros></SomarNumeros> 
    </div>

  );
}

export default App;
