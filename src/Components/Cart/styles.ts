import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const CartContainer = styled.aside`
  display: none;

  &.isOpen {
    display: block;
  }
`
export const Sidebar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 360px;
  max-height: 100%;
  padding: 32px 8px 8px 8px;
  background-color: ${cores.pink};
  z-index: 3;
  overflow-y: scroll;

  ul {
    background-color: transparent;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 70%;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`
export const OrderCard = styled.li`
  position: relative;
  background-color: ${cores.lightText};
  width: 100%;
  height: 100px;
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
  color: ${cores.pink};

  div {
    background-color: ${cores.lightText};

    h4 {
      font-size: 18px;
      font-weight: 900;
      background-color: transparent;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      background-color: transparent;
    }
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }
`
export const DeleteBtn = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    height: 16px;
    width: 16px;
    background-color: transparent;
  }
`

export const CheckoutInfo = styled.div`
  background-color: transparent;
  color: ${cores.lightText};
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  p {
    background-color: transparent;
  }
`
export const Btn = styled.button`
  background-color: ${cores.lightText};
  color: ${cores.pink};
  height: 24px;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  border: none;
  cursor: pointer;
`
