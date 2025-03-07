import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add } from '../../store/reducers/cart'
import PriceFormat from '../../utils'

import close_icon from '../../Assets/Images/close_icon.png'
import * as S from './styles'

type Props = {
  menu: Menu
}

const MenuCard = ({ menu }: Props) => {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)

  function modalVisibility() {
    setModalVisible(!modalVisible)
  }

  function returnDescription() {
    return `${menu.descricao.slice(0, 153)}...`
  }

  function addItem() {
    dispatch(add(menu))
    modalVisibility()
  }

  return (
    <>
      <S.MenuContainer>
        <S.Prato src={menu.foto} alt={menu.nome} />
        <S.MenuName>{menu.nome}</S.MenuName>
        <S.Description>{returnDescription()}</S.Description>
        <S.Btn onClick={modalVisibility}>Adicionar ao carrinho</S.Btn>
      </S.MenuContainer>

      {modalVisible && (
        <>
          <S.ModalContainer>
            <S.ModalImage src={menu.foto} alt={`Foto do prato ${menu.nome}`} />
            <S.ModalInfos>
              <S.ModalTitle>{menu.nome}</S.ModalTitle>
              <S.ModalDescription>
                {menu.descricao} <br />
                <br />
                {`Serve: de ${menu.porcao}`}
              </S.ModalDescription>
              <S.ModalBtn onClick={addItem}>
                Adicionar ao carrinho - {PriceFormat(menu.preco)}
              </S.ModalBtn>
            </S.ModalInfos>
            <S.Close onClick={modalVisibility} src={close_icon} alt="" />
          </S.ModalContainer>
          <S.Overlay onClick={modalVisibility}></S.Overlay>
        </>
      )}
    </>
  )
}

export default MenuCard
