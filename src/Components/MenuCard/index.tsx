import { useState } from 'react'
import * as S from './styles'
import close from '../../Assets/Images/close_icon.png'

type Props = {
  image: string
  menu: string
  description: string
  porcao: string
  preco: number
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const MenuCard = ({ image, menu, description, porcao, preco }: Props) => {
  const [modalVisible, setModalVisible] = useState(false)

  function modalVisibility() {
    setModalVisible(!modalVisible)
  }

  function returnDescription() {
    return `${description.slice(0, 153)}...`
  }

  return (
    <>
      <S.MenuContainer>
        <S.Prato src={image} alt={menu} />
        <S.MenuName>{menu}</S.MenuName>
        <S.Description>{returnDescription()}</S.Description>
        <S.Btn onClick={modalVisibility}>Adicionar ao carrinho</S.Btn>
      </S.MenuContainer>

      {modalVisible && (
        <>
          <S.ModalContainer>
            <S.ModalImage src={image} alt={`Foto do prato ${menu}`} />
            <S.ModalInfos>
              <S.ModalTitle>{menu}</S.ModalTitle>
              <S.ModalDescription>
                {description} <br />
                <br />
                {`Serve: de ${porcao}`}
              </S.ModalDescription>
              <S.ModalBtn>
                Adicionar ao carrinho - {formataPreco(preco)}
              </S.ModalBtn>
            </S.ModalInfos>
            <S.Close onClick={modalVisibility} src={close} alt="" />
          </S.ModalContainer>
          <S.Overlay onClick={modalVisibility}></S.Overlay>
        </>
      )}
    </>
  )
}

export default MenuCard
