import './Personagem.css'

const Personagem = (props) => {

    const altMod = `Foto de ${props.nome}`

    return(
        <div className='pers'>
            <div className='cabecalho' style={{backgroundColor: props.cor}}>
                <img src={props.img} alt= {altMod}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.funcao}</h5>
            </div>
        </div>
    )
}

export default Personagem