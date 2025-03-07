import styled from 'styled-components'
import banner_background from '../../Assets/Images/headerFooter_background.png'
import { breakpoints, colors } from '../../styles'
import { Props } from '.'
import { Link } from 'react-router-dom'

export const HeaderContainerHome = styled.div<Props>`
  background-image: url(${banner_background});
  height: 360px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: ${(props) => (props.size === 'home' ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakpoints.dextop}) {
    height: 270px;
  }
`

export const Subtitle = styled.h2`
  margin: 0 auto;
  width: 570px;
  height: 84px;
  font-size: 35px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  color: ${colors.pink};
  background-color: transparent;

  @media (max-width: ${breakpoints.dextop}) {
    font-size: 32px;
    line-height: 48px;
    width: 90%;
  }

  @media (max-width: ${breakpoints.dextop}) {
    font-size: 24px;
    line-height: 32px;
    width: 90%;
  }
`
export const HeaderContainerProfile = styled.div<Props>`
  background-image: url(${banner_background});
  height: 164px;
  width: 100%;
  padding-top: 40px;
  display: ${(props) => (props.size === 'profile' ? 'flex' : 'none')};

  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`
export const ProfileNav = styled.div`
  width: 90%;
  max-height: 58px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  position: relative;

  h2 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    color: ${colors.pink};
    background-color: transparent;
  }

  .returnPage {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
    max-height: 100%;

    h2 {
      font-size: 14px;
      line-height: 18px;
    }

    .returnPage {
      display: block;
      position: absolute;
      top: 4px;
      left: 4px;
      background-color: transparent;
      color: ${colors.pink};
      font-size: 28px;
    }
  }
`

export const ShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  cursor: pointer;

  div {
    background-color: transparent;
    span {
      background-color: transparent;
      display: none;
    }
    .shop-cart {
      background-color: transparent;
      color: ${colors.pink};
      font-size: 28px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 {
      display: none;
    }

    div {
      position: absolute;
      top: 4px;
      right: 4px;
      display: flex;
      align-items: center;
      span {
        display: block;
        font-size: 18px;
        color: ${colors.pink};
      }
    }
  }
`

export const RestaurantsLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  color: ${colors.pink};
  background-color: transparent;
  text-decoration: none;

  .display-large {
    display: block;
    background-color: transparent;
  }
  .display-phone {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    .display-large {
      display: none;
    }
    .display-phone {
      display: block;
    }
  }
`
