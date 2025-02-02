import { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import RestaurantList from '../../Components/RestaurantList'

export type Restaurantes = {
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  id: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

export type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurantes[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header size="home" />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
