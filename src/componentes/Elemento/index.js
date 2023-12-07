import Personagem from '../Personagem'
import './Elemento.css'

const Elemento = (props) => {
    return(
        (props.personagens.length > 0) ? <section className='elemento' style={{backgroundColor: props.corSecon}}>
            <h3 style={{borderColor: props.corPrim}}>{props.nome}</h3>
            <div className='personagens'>
                {props.personagens.map(personagem => <Personagem
                    key={personagem.nome} 
                    nome={personagem.nome} 
                    funcao={personagem.funcao}
                    img={personagem.img}
                    cor={props.corPrim}
                />)}
            </div>
        </section> : ''
    )
}

export default Elemento