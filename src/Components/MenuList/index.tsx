import MenuCard from '../MenuCard'
import { Container } from './styles'
import { Menu } from '../../Pages/Home'

type Props = {
  menu: Menu[]
}

const MenuList = ({ menu }: Props) => (
  <Container>
    {menu.map((menuItem) => (
      <MenuCard key={menuItem.id} menu={menuItem} />
    ))}
  </Container>
)

export default MenuList
