import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const Banner = styled.div<Omit<Props, 'tipo' | 'titulo'>>`
  height: 280px;
  width: 100%;
  background-image: url(${(Props) => Props.capa});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    content: '';
    display: block;
  }
`

export const BannerContainer = styled.div`
  max-width: 1024px;
  height: 100%;
  background-color: transparent;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0 32px 0;

  h2 {
    color: ${cores.white};
    font-size: 32px;
    line-height: 38px;
    z-index: 2;
  }
`

export const RestaurantTitle = styled.h2`
  background-color: transparent;
  font-weight: 900;
`
export const Tag = styled.h2`
  opacity: 60%;
  background-color: transparent;
  font-weight: 100;
`
