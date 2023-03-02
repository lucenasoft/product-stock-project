import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import React, {useState} from "react";
import Footer from './footer';

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(1)

  return (
    <div>
      <h1>Product Stock</h1>
      <Formulario botao={btnCadastrar} />
      <Tabela />
      <Footer />
    </div>
  );
}

export default App;
