import { useParams } from 'react-router-dom'

import Header from '../../Components/Header'
import MenuList from '../../Components/MenuList'
import ProfileBanner from '../../Components/ProfileBanner'
import Footer from '../../Components/Footer'
import Loader from '../../Components/Loader'

import { useGetSelectedRestaurantQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurante } = useGetSelectedRestaurantQuery(id)

  if (!restaurante) {
    return <Loader />
  }
  return (
    <>
      <Header size="profile" />
      <ProfileBanner
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <MenuList menu={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Profile
