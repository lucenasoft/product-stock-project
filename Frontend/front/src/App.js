import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import React, {useEffect, useState} from "react";

function App() {

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const  [produtos, setProdutos] = useState([])

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, []);

  //Retorno
  return (
    <div>
      <h1>Product Stock</h1>
      <Formulario botao={btnCadastrar}/>
      <Tabela />
    </div>
  );
}

export default App;
