import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import React, {useEffect, useState} from "react";
import Footer from './footer';

function App() {

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(1)
  const [produtos, setProdutos] = useState([])

  //UseEffect
  useEffect(()=> {
    fetch('http://localhost:3000/produtos')
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, [])

  //Retorno
  return (
    <div>
      <h1>Product Stock</h1>
      <p>{JSON.stringify(produtos)}</p>
      <Formulario botao={btnCadastrar} />
      <Tabela />
      <Footer />
    </div>
  );
}

export default App;
