import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import React, {useState} from "react";

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(1)

  return (
    <div>
      <h1>Product Stock</h1>
      <Formulario botao={btnCadastrar} />
      <Tabela />
    </div>
  );
}

export default App;
