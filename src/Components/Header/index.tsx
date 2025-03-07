import { useDispatch, useSelector } from 'react-redux'
import { TiShoppingCart } from 'react-icons/ti'
import { IoArrowBack } from 'react-icons/io5'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import efoodLogo from '../../Assets/Images/logo.svg'
import { Logo } from '../../styles'
import * as S from './styles'

export type Props = {
  size: 'home' | 'profile'
}

const Header = ({ size }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.HeaderContainerHome size={size}>
        <Logo src={efoodLogo} alt="Logo efood" />
        <S.Subtitle>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Subtitle>
      </S.HeaderContainerHome>

      <S.HeaderContainerProfile size={size}>
        <S.ProfileNav>
          <S.RestaurantsLink
            title="Clique para voltar à página de restaurantes"
            to={'/'}
          >
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
        </S.ProfileNav>
      </S.HeaderContainerProfile>
    </>
  )
}

export default Header
