import styled from 'styled-components'
import LaDolceVitaZoom from '../../Assets/Images/laDolceVitaZoom.png'
import { cores } from '../../styles'

export const Banner = styled.div`
  height: 280px;
  width: 100%;
  background-image: url(${LaDolceVitaZoom});
  background-size: cover;
  background-repeat: no-repeat;
`

export const BannerContainer = styled.div`
  width: 1024px;
  height: 100%;
  background-color: transparent;
  margin: 0 auto;
  position: relative;

  h2 {
    color: ${cores.white};
    font-size: 32px;
    line-height: 38px;
  }
`

export const RestaurantTitle = styled.h2`
  position: absolute;
  bottom: 32px;
  left: 0;
  background-color: transparent;
  font-weight: 900;
`
export const Tag = styled.h2`
  position: absolute;
  top: 25px;
  left: 0;
  opacity: 60%;
  background-color: transparent;
  font-weight: 100;
`
