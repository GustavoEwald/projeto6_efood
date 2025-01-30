import { Menu } from '../../models'
import MenuCard from '../MenuCard'
import { Container } from './styles'

type Props = {
  menu: Menu[]
}

const MenuList = ({ menu }: Props) => (
  <Container>
    {menu.map((menuItem) => (
      <MenuCard
        image={menuItem.image}
        menu={menuItem.menu}
        description={menuItem.description}
        key={menuItem.id}
      />
    ))}
  </Container>
)

export default MenuList
