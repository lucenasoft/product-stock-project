function Formulario({botao}) {
    return (
        <form>
            <label for="inome"><strong>Nome</strong></label>
            <input type="text" name="nome" id="inome" placeholder="Nome do produto" autocomplete="off" className="form-control"/>
            <label for="imarca"><strong>Marca</strong></label>
            <input type="text" name="marca" id="imarca" placeholder="Marca do produto" autocomplete="off" className="form-control"/>

            {
                botao
                ?
                <input type="button" value="Cadastrar" className="btn btn-primary"></input>
                :
                <div>
                    <input type="button" value="Alterar"   className="btn btn-warning"></input>
                    <input type="button" value="Remover"   className="btn btn-danger"></input>
                    <input type="button" value="Cancelar"  className="btn btn-secondary"></input>
                </div>
            }

        </form>
    )
}

export default Formulario