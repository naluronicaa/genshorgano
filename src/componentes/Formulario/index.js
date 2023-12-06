import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [img, setImg] = useState('')
    const [elemento, setElemento] = useState('')



    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome: nome, funcao: funcao, img: img, elemento:elemento
        })
    }

    return(
        <section className='forms'>
            <form onSubmit={aoSalvar}>
                
                <h2>Preencha as informações para criar o card do personagem!</h2>

                <CampoTexto 
                    obg={true} 
                    label="Nome do Personagem" 
                    placeholder="o nome do personagem"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    obg={true} 
                    label="Função" 
                    placeholder="a função (dps, suporte, etc)"
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="o endereço da imagem"
                    valor={img}
                    aoAlterado={valor => setImg(valor)}
                />

                <ListaSuspensa 
                    obg={true} 
                    label="Elemento" 
                    itens={props.elementos}
                    valor={elemento}
                    aoAlterado={valor => setElemento(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario