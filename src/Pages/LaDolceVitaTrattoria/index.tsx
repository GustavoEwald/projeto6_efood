import MenuList from '../../Components/MenuList'
import margerita from '../../Assets/Images/margerita.png'
import { Menu } from '../../models'
import Header from '../../Components/Header'
import ProfileBanner from '../../Components/ProfileBanner'
import Footer from '../../Components/Footer'

const menu: Menu[] = [
  {
    image: margerita,
    menu: 'Pizza Margerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 1
  },
  {
    image: margerita,
    menu: 'Pizza Margerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 2
  },
  {
    image: margerita,
    menu: 'Pizza Margerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 3
  },
  {
    image: margerita,
    menu: 'Pizza Margerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 4
  },
  {
    image: margerita,
    menu: 'Pizza Margerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 5
  },
  {
    image: margerita,
    menu: 'Pizza Margerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 6
  }
]

const Perfil = () => (
  <>
    <Header size="perfil" />
    <ProfileBanner />
    <MenuList menu={menu} />
    <Footer />
  </>
)

export default Perfil
