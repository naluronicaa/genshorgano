import './Elemento.css'

const Elemento = (props) => {
    return(
        <section className='elemento' style={{backgroundColor: props.corSecon}}>
            <h3 style={{borderColor: props.corPrim}}>{props.nome}</h3>
        </section>
    )
}

export default Elemento