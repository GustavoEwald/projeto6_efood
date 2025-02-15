import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import efoodLogo from '../../Assets/Images/logo.svg'
import { TiShoppingCart } from 'react-icons/ti'
import { IoArrowBack } from 'react-icons/io5'
import * as S from './styles'
import { Logo } from '../../styles'

export type Props = {
  size: 'home' | 'perfil'
}

const Header = ({ size }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.HeaderContainerListagem size={size}>
        <Logo src={efoodLogo} alt="Logo efood" />
        <S.Subtitle>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Subtitle>
      </S.HeaderContainerListagem>

      <S.HeaderContainerPerfil size={size}>
        <S.PerfilNav>
          <S.RestaurantsLink to={'/'}>
            <span className="display-large">Restaurantes</span>
            <span className="display-phone">
              <IoArrowBack className="returnPage" />
            </span>
          </S.RestaurantsLink>
          <Logo src={efoodLogo} alt="Logo efood" />
          <S.ShoppingContainer onClick={openCart}>
            <h2>{items.length} produto(s) no carrinho</h2>
            <div>
              <span>{`(${items.length})`}</span>
              <TiShoppingCart className="shop-cart" />
            </div>
          </S.ShoppingContainer>
        </S.PerfilNav>
      </S.HeaderContainerPerfil>
    </>
  )
}

export default Header
