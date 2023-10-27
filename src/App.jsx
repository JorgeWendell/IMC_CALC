import { useState } from 'react'

import Perfil from './components/Perfil';
import Formulario from './components/Formulario';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Perfil  />
    <Formulario />
    </>
  )
}

export default App
