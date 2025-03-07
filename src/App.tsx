import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'

import { store } from './store'

import { GlobalCss } from './styles'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Profile/:id" element={<Profile />}></Route>
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
