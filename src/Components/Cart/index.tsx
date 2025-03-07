import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, del } from '../../store/reducers/cart'
import { openDeliveryTab } from '../../store/reducers/delivery'
import PriceFormat from '../../utils'

import trash from '../../Assets/Images/trash_can.png'
import * as S from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const { orderTabisOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  )

  const closeCart = () => {
    dispatch(close())
  }

  const getTotal = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.preco)
    }, 0)
  }

  const deleteItem = (itemId: number) => {
    dispatch(del(itemId))
  }

  const openDelivery = () => {
    if (items.length > 0) {
      dispatch(openDeliveryTab())
    } else {
      alert('O carrinho está vazio!')
    }
    closeCart()
  }

  return (
    <S.CartContainer className={orderTabisOpen ? 'isOpen' : ''}>
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.OrderCard key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{PriceFormat(item.preco)}</p>
                  </div>
                  <S.DeleteBtn onClick={() => deleteItem(item.id)}>
                    <img src={trash} alt="Excluir" />
                  </S.DeleteBtn>
                </S.OrderCard>
              ))}
            </ul>
            <S.CheckoutInfo>
              <p>Valor total</p>
              <p>{PriceFormat(getTotal())}</p>
            </S.CheckoutInfo>
            <S.Btn onClick={openDelivery}>Continuar com a entrega</S.Btn>
          </>
        ) : (
          <p>
            O carrinho está vazio, adicione um item para prosseguir com o
            pedido.
          </p>
        )}
      </S.Sidebar>
      <S.Overlay onClick={closeCart} />
    </S.CartContainer>
  )
}

export default Cart
