import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Elemento from './componentes/Elemento';


function App() {

  const elementos = [
    {
      nome: 'Anemo',
      corPrim: '#2A9D8E',
      corSecon: '#A6E5DD'
    },
    {
      nome: 'Cryo',
      corPrim: '#7DA6DD',
      corSecon: '#B9CDE9'
    },
    {
      nome: 'Dendro',
      corPrim: '#6DAC21',
      corSecon: '#D5EBBA'
    },
    {
      nome: 'Electro',
      corPrim: '#7454C3',
      corSecon: '#D6CBF3'
    },
    {
      nome: 'Geo',
      corPrim: '#E6A859',
      corSecon: '#F1E3D2'
    },
    {
      nome: 'Hydro',
      corPrim: '#2190BB',
      corSecon: '#BEE2F0'
    },
    {
      nome: 'Pyro',
      corPrim: '#B62528',
      corSecon: '#F0AFB0'
    }
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPerAdd = (personagem) => {
     setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner/>

      <Formulario elementos={elementos.map(elemento => elemento.nome)} aoPersonagemCadastrado={personagem => aoNovoPerAdd(personagem)}/>

      {elementos.map(elemento => <Elemento key={elemento.nome} nome={elemento.nome} corPrim ={elemento.corPrim} corSecon={elemento.corSecon}/>)}

    </div>
  );
}

export default App;
