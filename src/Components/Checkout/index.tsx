import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import * as Yup from 'yup'
import { open } from '../../store/reducers/cart'
import { closeDeliveryTab } from '../../store/reducers/delivery'
import { useState } from 'react'
import {
  Btn,
  CheckoutContainer,
  InfoContainer,
  Overlay,
  Sidebar
} from './styles'
import { useFormik } from 'formik'
import { useOrderMutation } from '../../services/api'

export type Props = {
  flexOrientation?: 'row' | 'column'
  margin?: boolean
}

export type DeliveryData = {
  name: string
  address: string
  city: string
  zipCode: number
  number: number
  complement?: string
}

const Checkout = () => {
  const [order, { isLoading, isError, data }] = useOrderMutation()

  const dispatch = useDispatch()
  const { deliveryTabisOpen } = useSelector(
    (state: RootReducer) => state.delivery
  )
  const [payment, setPayment] = useState(false)
  const [delivery, setDelivery] = useState(true)

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipcode: '',
      addressNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cvv: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo obrigatorio'),
      address: Yup.string().required('Campo obrigatorio'),
      city: Yup.string().required('Campo obrigatorio'),
      zipcode: Yup.string()
        .required('Campo obrigatorio')
        .min(8, 'O CEP deve ter 8 digitos!')
        .max(8, 'O CEP deve ter 8 digitos!'),
      addressNumber: Yup.string().required('Campo obrigatorio'),
      complement: Yup.string(),
      cardOwner: Yup.string().required('Campo obrigatorio'),
      cardNumber: Yup.string().required('Campo obrigatorio'),
      cvv: Yup.string().required('Campo obrigatorio'),
      expireMonth: Yup.string().required('Campo obrigatorio'),
      expireYear: Yup.string().required('Campo obrigatorio')
    }),
    onSubmit: (values) => {
      order({
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            number: values.addressNumber,
            zipCode: values.zipcode,
            complement: values.complement
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ],
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        }
      })
    }
  })

  const openPaymentTab = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setPayment(true)
    setDelivery(false)
  }
  const openConclusionTab = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setPayment(false)
    setDelivery(false)
  }
  const backToCart = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(open())
    dispatch(closeDeliveryTab())
  }

  const enviar = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    form.handleSubmit
  }

  const getErrorMsg = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <CheckoutContainer
      onSubmit={form.handleSubmit}
      className={deliveryTabisOpen ? 'isOpen' : ''}
    >
      <Sidebar>
        {delivery && (
          <>
            <InfoContainer flexOrientation="column">
              <h3 className="title">Entrega</h3>
              <label htmlFor="name">Quem irá receber</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMsg('name', form.errors.name)}</small>
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMsg('address', form.errors.address)}</small>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMsg('city', form.errors.city)}</small>
              <InfoContainer>
                <InfoContainer flexOrientation="column">
                  <label htmlFor="zipcode">CEP</label>
                  <input
                    id="zipcode"
                    type="string"
                    name="zipcode"
                    value={form.values.zipcode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMsg('zipcode', form.errors.zipcode)}</small>
                </InfoContainer>
                <InfoContainer flexOrientation="column">
                  <label htmlFor="addressNumber">Número</label>
                  <input
                    id="addressNumber"
                    type="string"
                    name="addressNumber"
                    value={form.values.addressNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMsg('addressNumber', form.errors.addressNumber)}
                  </small>
                </InfoContainer>
              </InfoContainer>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                type="text"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMsg('complement', form.errors.complement)}</small>
            </InfoContainer>
            <Btn onClick={(e) => openPaymentTab(e)} margin={true}>
              Continuar com o pagamento
            </Btn>
            <Btn onClick={(e) => backToCart(e)}>Voltar para o carrinho</Btn>
          </>
        )}

        {payment && (
          <>
            <InfoContainer flexOrientation="column">
              <h3 className="title">
                Pagamento - Valor a pagar: <span>R$Valor</span>
              </h3>
              <label htmlFor="cardOwner">Nome no cartão</label>
              <input
                id="cardOwner"
                type="text"
                name="cardOwner"
                value={form.values.cardOwner}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMsg('cardOwner', form.errors.cardOwner)}</small>
              <InfoContainer>
                <InfoContainer flexOrientation="column">
                  <label htmlFor="cardNumber">Numero do cartão</label>
                  <input
                    id="cardNumber"
                    type="number"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMsg('cardNumber', form.errors.cardNumber)}
                  </small>
                </InfoContainer>
                <InfoContainer flexOrientation="column">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    id="cvv"
                    type="number"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMsg('cvv', form.errors.cvv)}</small>
                </InfoContainer>
              </InfoContainer>
              <InfoContainer>
                <InfoContainer flexOrientation="column">
                  <label htmlFor="expireMonth">Mês de vencimento</label>
                  <input
                    id="expireMonth"
                    type="number"
                    name="expireMonth"
                    value={form.values.expireMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMsg('expireMonth', form.errors.expireMonth)}
                  </small>
                </InfoContainer>
                <InfoContainer flexOrientation="column">
                  <label htmlFor="expireYear">Ano de vencimento</label>
                  <input
                    id="expireYear"
                    type="number"
                    name="expireYear"
                    value={form.values.expireYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMsg('expireYear', form.errors.expireYear)}
                  </small>
                </InfoContainer>
              </InfoContainer>
              <Btn onClick={(e) => openConclusionTab(e)} margin={true}>
                Continuar com o pagamento
              </Btn>
              <Btn onClick={(e) => backToCart(e)}>Voltar para o carrinho</Btn>
            </InfoContainer>
          </>
        )}

        <>
          {!payment && !delivery && (
            <>
              <h3 className="title">
                Pedido realizado - <span>ORDER_ID</span>
              </h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <Btn type="button" onClick={(e) => enviar(e)}>
                Concluir
              </Btn>
            </>
          )}
        </>
      </Sidebar>
      <Overlay />
    </CheckoutContainer>
  )
}

export default Checkout
