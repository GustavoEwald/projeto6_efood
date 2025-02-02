import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Illustration = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  object-fit: cover;
`
export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  background-color: transparent;
`

export const Infos = styled.div`
  padding: 8px;
  color: ${cores.pink};
  position: relative;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  padding-bottom: 16px;

  img {
    height: 21px;
    padding-left: 8px;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
`

export const NomeRestaurante = styled.h3``

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 16px;
  height: 88px;
  overflow-y: hidden;
`
export const Btn = styled(Link)`
  height: 24px;
  width: 82px;
  background-color: ${cores.pink};
  color: ${cores.lightText};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  border: none;
  text-decoration: none;
  padding: 4px;
  position: absolute;
  left: 8px;
  bottom: 8px;
  text-align: center;
`
