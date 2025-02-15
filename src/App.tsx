import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import { store } from './store'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Perfil/:id" element={<Perfil />}></Route>
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Cart />
        <Checkout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
