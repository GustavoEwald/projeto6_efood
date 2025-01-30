import { Btn, Description, MenuContainer, MenuName } from './styles'

type Props = {
  image: string
  menu: string
  description: string
}

const MenuCard = ({ image, menu, description }: Props) => (
  <MenuContainer>
    <img src={image} alt={menu} />
    <MenuName>{menu}</MenuName>
    <Description>{description}</Description>
    <Btn>Adicionar ao carrinho</Btn>
  </MenuContainer>
)

export default MenuCard
