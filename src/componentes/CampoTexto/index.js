import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const placeholderMod = `Digite ${props.placeholder}`

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
           <label>{props.label}</label>
           <input value={props.valor} onChange={aoDigitar} required={props.obg} placeholder={placeholderMod}/>
        </div>
    )
}

export default CampoTexto