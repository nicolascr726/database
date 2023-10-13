import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './assets/components/Formulario';

function App() {
  const [count, setCount] = useState()

  return (
    <>
      <div>
        <Formulario/>
      </div>
    </>
  )
}

export default App
