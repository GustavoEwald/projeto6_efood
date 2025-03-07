import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Illustration = styled.img`
  display: block;
  width: 100%;
  max-height: 217px;
  object-fit: cover;

  @media (max-width: ${breakpoints.dextop}) {
    max-height: 271px;
  }
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
  color: ${colors.pink};
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

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 16px;
  height: 88px;
  overflow-y: hidden;
`
export const Btn = styled(Link)`
  height: 24px;
  width: 82px;
  background-color: ${colors.pink};
  color: ${colors.lightText};
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
