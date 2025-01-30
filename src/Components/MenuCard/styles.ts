import styled from 'styled-components'
import { cores } from '../../styles'

export const MenuContainer = styled.div`
  height: 342px;
  width: 320px;
  padding: 8px;
  background-color: ${cores.pink};
  color: ${cores.menuText};
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
