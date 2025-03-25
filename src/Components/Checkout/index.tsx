import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { closeDeliveryTab } from '../../store/reducers/delivery'
import { open, clear } from '../../store/reducers/cart'
import { useOrderMutation } from '../../services/api'

import * as S from './styles'

export type Props = {
  flexOrientation?: 'row' | 'column'
  margin?: boolean
}

export type DeliveryData = {
  name: string
  address: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

const Checkout = () => {
  const [order, { data, isSuccess }] = useOrderMutation()

  const dispatch = useDispatch()
  const { deliveryTabisOpen } = useSelector(
    (state: RootReducer) => state.delivery
  )
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [payment, setPayment] = useState(false)
  const [delivery, setDelivery] = useState(true)
  const [conclusion, setConclusion] = useState(false)

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

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
      zipcode: Yup.string().required('Campo obrigatorio'),
      addressNumber: Yup.string().required('Campo obrigatorio'),
      complement: Yup.string(),
      cardOwner: Yup.string().required('Campo obrigatorio'),
      cardNumber: Yup.string()
        .required('Campo obrigatorio')
        .min(19, 'O número do cartão deve ter 16 digitos!')
        .max(19, 'O número do cartão deve ter 16 digitos!'),
      cvv: Yup.string()
        .required('Campo obrigatorio')
        .min(3, 'O CVV deve ter 16 digitos!')
        .max(3, 'O CVV deve ter 16 digitos!'),
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
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
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

  const formValidation = (option: string) => {
    form.setTouched({
      name: true,
      address: true,
      city: true,
      zipcode: true,
      addressNumber: true,
      complement: true,
      cardOwner: true,
      cardNumber: true,
      cvv: true,
      expireMonth: true,
      expireYear: true
    })
    if (option == 'delivery') {
      return (
        !form.errors.name &&
        !form.errors.address &&
        !form.errors.city &&
        !form.errors.zipcode &&
        !form.errors.addressNumber &&
        form.values.name !== '' &&
        form.values.address !== '' &&
        form.values.city !== '' &&
        form.values.zipcode !== '' &&
        !form.values.zipcode.includes('_') &&
        form.values.addressNumber !== ''
      )
    } else
      return (
        !form.errors.cardOwner &&
        !form.errors.cardNumber &&
        !form.errors.cvv &&
        !form.errors.expireMonth &&
        !form.errors.expireYear &&
        !form.values.cardNumber.includes('_') &&
        !form.values.cvv.includes('_') &&
        !form.values.expireMonth.includes('_') &&
        !form.values.expireYear.includes('_')
      )
  }

  const closeTab = () => {
    if (conclusion) {
      closeOrder()
    } else dispatch(closeDeliveryTab())
  }

  const openPaymentTab = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (formValidation('delivery')) {
      setPayment(true)
      setDelivery(false)
    } else {
      alert('Preencha todos os campos para seguir com o pagamento')
    }
  }
  const openConclusionTab = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (formValidation('payment')) {
      form.handleSubmit()
      setPayment(false)
      setDelivery(false)
      setConclusion(true)
    } else alert('Preencha todos os campos para seguir com o pedido')
  }
  const closeOrder = () => {
    dispatch(closeDeliveryTab())
    setDelivery(true)
    setConclusion(false)
    form.resetForm()
  }
  const backToCart = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(open())
    setPayment(false)
    setDelivery(true)
    dispatch(closeDeliveryTab())
  }

  const inputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    return isTouched && isInvalid
  }

  return (
    <S.CheckoutContainer
      onSubmit={form.handleSubmit}
      className={deliveryTabisOpen ? 'isOpen' : ''}
    >
      <S.Sidebar>
        {delivery && (
          <>
            <S.InfoContainer flexOrientation="column">
              <h3 className="title">Entrega</h3>
              <label htmlFor="name">Quem irá receber</label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={inputHasError('name') ? 'error' : ''}
              />
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={inputHasError('address') ? 'error' : ''}
              />
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={inputHasError('city') ? 'error' : ''}
              />
              <S.InfoContainer>
                <S.InfoContainer flexOrientation="column">
                  <label htmlFor="zipcode">CEP</label>
                  <InputMask
                    id="zipcode"
                    type="text"
                    name="zipcode"
                    value={form.values.zipcode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      'zipcode' in form.touched &&
                      form.values.zipcode.includes('_')
                        ? 'error'
                        : ''
                    }
                    mask="99999-999"
                  />
                </S.InfoContainer>
                <S.InfoContainer flexOrientation="column">
                  <label htmlFor="addressNumber">Número</label>
                  <input
                    id="addressNumber"
                    type="text"
                    name="addressNumber"
                    value={form.values.addressNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={inputHasError('addressNumber') ? 'error' : ''}
                  />
                </S.InfoContainer>
              </S.InfoContainer>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                type="text"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={inputHasError('complement') ? 'error' : ''}
              />
            </S.InfoContainer>
            <S.Btn onClick={(e) => openPaymentTab(e)} margin={true}>
              Continuar com o pagamento
            </S.Btn>
            <S.Btn onClick={(e) => backToCart(e)}>Voltar para o carrinho</S.Btn>
          </>
        )}

        {payment && (
          <>
            <S.InfoContainer flexOrientation="column">
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
                className={inputHasError('cardOwner') ? 'error' : ''}
              />
              <S.InfoContainer>
                <S.InfoContainer flexOrientation="column">
                  <label htmlFor="cardNumber">Numero do cartão</label>
                  <InputMask
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={inputHasError('cardNumber') ? 'error' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </S.InfoContainer>
                <S.InfoContainer flexOrientation="column">
                  <label htmlFor="cvv">CVV</label>
                  <InputMask
                    id="cvv"
                    type="text"
                    name="cvv"
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={inputHasError('cvv') ? 'error' : ''}
                    mask="999"
                  />
                </S.InfoContainer>
              </S.InfoContainer>
              <S.InfoContainer>
                <S.InfoContainer flexOrientation="column">
                  <label htmlFor="expireMonth">Mês de vencimento</label>
                  <InputMask
                    id="expireMonth"
                    type="text"
                    name="expireMonth"
                    value={form.values.expireMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={inputHasError('expireMonth') ? 'error' : ''}
                    mask="99"
                  />
                </S.InfoContainer>
                <S.InfoContainer flexOrientation="column">
                  <label htmlFor="expireYear">Ano de vencimento</label>
                  <InputMask
                    id="expireYear"
                    type="text"
                    name="expireYear"
                    value={form.values.expireYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={inputHasError('expireYear') ? 'error' : ''}
                    mask="99"
                  />
                </S.InfoContainer>
              </S.InfoContainer>
              <S.Btn onClick={(e) => openConclusionTab(e)} margin={true}>
                Continuar com o pagamento
              </S.Btn>
              <S.Btn type="button" onClick={(e) => backToCart(e)}>
                Voltar para o carrinho
              </S.Btn>
            </S.InfoContainer>
          </>
        )}

        <>
          {conclusion && data && (
            <>
              <h3 className="title">
                Pedido realizado - <span>{data.orderId}</span>
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
              <S.Btn onClick={closeOrder} type="submit">
                Concluir
              </S.Btn>
            </>
          )}
        </>
      </S.Sidebar>
      <S.Overlay onClick={closeTab} />
    </S.CheckoutContainer>
  )
}

export default Checkout
