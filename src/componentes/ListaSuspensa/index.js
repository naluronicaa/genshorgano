import './ListaSuspensa.css'

const ListaSuspensa = (props) =>{
    const aoMudar = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoMudar} required={props.obg} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa