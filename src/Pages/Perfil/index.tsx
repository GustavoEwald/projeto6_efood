import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, Restaurantes } from '../Home'
import Header from '../../Components/Header'
import MenuList from '../../Components/MenuList'
import ProfileBanner from '../../Components/ProfileBanner'
import Footer from '../../Components/Footer'

const Perfil = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState<Menu[]>([])
  const [restaurante, setRestaurante] = useState<Restaurantes>()

  useEffect(() => {
    fetch(
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/`.concat(`${id}`)
    )
      .then((res) => res.json())
      .then((res) => {
        setMenu(res.cardapio)
        setRestaurante(res)
      })
  }, [])

  return (
    <>
      <Header size="perfil" />
      <ProfileBanner
        titulo={restaurante ? restaurante.titulo : 'Erro'}
        tipo={restaurante ? restaurante.tipo : 'Tag não encontrada'}
        capa={restaurante ? restaurante.capa : 'https://place-hold.it/720x280'}
      />
      <MenuList menu={menu} />
      <Footer />
    </>
  )
}

export default Perfil
