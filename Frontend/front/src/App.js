import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import React, {useEffect, useState} from "react";
import Footer from './footer';

function App() {

  //Objeto produto
  const produto = {
    codigo: 0,
    nome: '',
    marca: ''
  }

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(1)
  const [produtos, setProdutos] = useState([])
  const [objProduto, setObjProduto] = useState(produto)

  //UseEffect
  useEffect(()=> {
    fetch('http://localhost:8080/listar')
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  }, [])

  //Obtendo os dados do formulario
  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]: e.target.value})
  }

  //Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      console.log(retorno_convertido)
    })
  }

  //Retorno
  return (
    <div>
      <h1>Product Stock</h1>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar}/>
      <Tabela vetor={produtos}/>
      <Footer />
    </div>
  );
}

export default App;
