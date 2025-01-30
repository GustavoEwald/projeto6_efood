import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './Pages/Home'
import Perfil from './Pages/LaDolceVitaTrattoria'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/LaDolceVitaTrattoria" element={<Perfil />}></Route>
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
