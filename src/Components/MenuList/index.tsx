import MenuCard from '../MenuCard'

import { Container } from './styles'

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
