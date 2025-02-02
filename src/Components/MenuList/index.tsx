import MenuCard from '../MenuCard'
import { Container } from './styles'
import { Menu } from '../../Pages/Home'

type Props = {
  menu: Menu[]
}

const MenuList = ({ menu }: Props) => (
  <Container>
    {menu.map((menuItem) => (
      <MenuCard
        image={menuItem.foto}
        menu={menuItem.nome}
        description={menuItem.descricao}
        key={menuItem.id}
        porcao={menuItem.porcao}
        preco={menuItem.preco}
      />
    ))}
  </Container>
)

export default MenuList
