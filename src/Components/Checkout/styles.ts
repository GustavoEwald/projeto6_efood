import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const CheckoutContainer = styled.form`
  display: none;

  &.isOpen {
    display: block;
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

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  padding: 32px 8px;
  background-color: ${cores.pink};
  font-size: 14px;
  font-weight: 700;
  z-index: 3;

  input {
    padding: 8px;
    outline: none;
    border: none;
    height: 32px;
    background-color: ${cores.lightText};
  }

  label {
    background-color: transparent;
  }

  .title {
    background-color: ${cores.pink};
    color: ${cores.lightText};
    margin-bottom: 16px;
    font-size: 16px;

    span {
      background-color: ${cores.pink};
    }
  }
  p {
    background-color: transparent;
    color: ${cores.lightText};
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 24px;
  }
`

export const InfoContainer = styled.div<Omit<Props, 'margin'>>`
  display: flex;
  flex-direction: ${(Props) =>
    Props.flexOrientation === 'column' ? 'column' : 'row'};
  justify-content: space-between;
  align-items: space-between;
  gap: 8px;
  background-color: transparent;
  color: ${cores.lightText};
  overflow-y: hidden;
`

export const Btn = styled.button<Omit<Props, 'flexOrientation'>>`
  border: none;
  display: block;
  margin-bottom: 8px;
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.pink};
  text-align: center;
  margin-top: ${(Props) => (Props.margin === true ? '24px' : '0')};
  cursor: pointer;
`
