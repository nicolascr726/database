import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './assets/components/Formulario';
import { BaseColaboradores } from '../data/BaseColaboradores';
import Listado from './assets/components/Listado';
import Buscador from './assets/components/Buscador';

function App() {
  const [search, setSearch] = useState("")
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [error, setError] = useState(false)

  let result = [];
  if(!search) {
    result = colaboradores
  }else {
    result = colaboradores.filter((colaborador) =>
    colaborador.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  } 
  return (
    <>
      <div>
        <Buscador setSearch={setSearch}/>
        <Listado colaboradores={result}/>
        <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores}/>
      </div>
    </>
  )
}

export default App
