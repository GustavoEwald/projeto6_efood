import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, del } from '../../store/reducers/cart'
import { openDeliveryTab } from '../../store/reducers/delivery'
import trash from '../../Assets/Images/trash_can.png'
import {
  Btn,
  CartContainer,
  CheckoutInfo,
  DeleteBtn,
  OrderCard,
  Overlay,
  Sidebar
} from './styles'
import { formataPreco } from '../MenuCard'

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
    dispatch(openDeliveryTab())
    closeCart()
  }

  return (
    <>
      <CartContainer className={orderTabisOpen ? 'isOpen' : ''}>
        <Sidebar>
          <ul>
            {items.map((item) => (
              <OrderCard key={item.id}>
                <img src={item.foto} />
                <div>
                  <h4>{item.nome}</h4>
                  <p>{formataPreco(item.preco)}</p>
                </div>
                <DeleteBtn onClick={() => deleteItem(item.id)}>
                  <img src={trash} alt="Excluir" />
                </DeleteBtn>
              </OrderCard>
            ))}
          </ul>
          <CheckoutInfo>
            <p>Valor total</p>
            <p>{formataPreco(getTotal())}</p>
          </CheckoutInfo>
          <Btn onClick={openDelivery}>Continuar com a entrega</Btn>
        </Sidebar>
        <Overlay onClick={closeCart} />
      </CartContainer>
    </>
  )
}

export default Cart
