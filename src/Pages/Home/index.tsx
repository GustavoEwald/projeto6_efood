import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import RestaurantList from '../../Components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

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
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header size="home" />
        <RestaurantList restaurants={restaurants} />
        <Footer />
      </>
    )
  }
  return <p>Carregando...</p>
}

export default Home
