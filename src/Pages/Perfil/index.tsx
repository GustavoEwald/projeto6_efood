import { useParams } from 'react-router-dom'
import Header from '../../Components/Header'
import MenuList from '../../Components/MenuList'
import ProfileBanner from '../../Components/ProfileBanner'
import Footer from '../../Components/Footer'
import { useGetSelectedRestaurantQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetSelectedRestaurantQuery(id!)

  if (restaurante) {
    return (
      <>
        <Header size="perfil" />
        <ProfileBanner
          titulo={restaurante.titulo}
          tipo={restaurante.tipo}
          capa={restaurante.capa}
        />
        <MenuList menu={restaurante.cardapio} />
        <Footer />
      </>
    )
  }
  return <p>Carregando...</p>
}

export default Perfil
