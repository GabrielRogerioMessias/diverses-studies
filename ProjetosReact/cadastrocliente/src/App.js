import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
import CadastroCliente from './CadastroCliente';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { userNavigate } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/tela1' element={<CadastroCliente></CadastroCliente>}></Route>
        </Routes>
      </Router>
    </div>
  );


}

export default App;
