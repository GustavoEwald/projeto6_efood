import styled from 'styled-components'
import { cores } from '../../styles'

export const MenuContainer = styled.div`
  height: 342px;
  width: 320px;
  padding: 8px;
  background-color: ${cores.pink};
  color: ${cores.menuText};
`
export const Prato = styled.img`
  width: 100%;
  max-height: 167px;
  object-fit: cover;
`

export const MenuName = styled.h3`
  background-color: transparent;
  font-size: 16px;
  line-height: 19px;
  font-weight: 900;
  margin: 8px 0;
`
export const Description = styled.p`
  background-color: transparent;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`
export const Btn = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.menuText};
  color: ${cores.pink};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  border: none;
`

export const ModalContainer = styled.div`
  display: flex;
  gap: 24px;
  max-width: 1024px;
  height: 344px;
  background-color: ${cores.pink};
  position: fixed;
  top: 25vh;
  padding: 32px;
  z-index: 3;
`
export const ModalImage = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`

export const ModalInfos = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`

export const ModalTitle = styled.h3`
  background-color: transparent;
  color: ${cores.white};
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`
export const ModalDescription = styled.p`
  background-color: transparent;
  color: ${cores.white};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 16px;
`
export const ModalBtn = styled.button`
  background-color: ${cores.lightText};
  color: ${cores.pink};
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  text.align: center;
  padding: 4px 8px;
  border: none;
  display: inline-block;
  width: fit-content;
`
export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 2;
`
export const Close = styled.img`
  height: 16px;
  width: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
`
