import styled from 'styled-components'
import banner_background from '../../Assets/Images/headerFooter_background.png'
import { cores } from '../../styles'
import { Props } from '.'
import { Link } from 'react-router-dom'

export const HeaderContainerListagem = styled.div<Props>`
  background-image: url(${banner_background});
  height: 360px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: ${(props) => (props.size === 'home' ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
`

export const Subtitle = styled.h2`
  margin: 0 auto;
  width: 570px;
  height: 84px;
  font-size: 35px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  color: ${cores.pink};
  background-color: transparent;
`
export const HeaderContainerPerfil = styled.div<Props>`
  background-image: url(${banner_background});
  height: 164px;
  width: 100%;
  padding-top: 40px;
  display: ${(props) => (props.size === 'perfil' ? 'flex' : 'none')};
`
export const PerfilNav = styled.div`
  width: 1024px;
  max-height: 58px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  h2 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    color: ${cores.pink};
    background-color: transparent;
  }
`

export const RestaurantsLink = styled(Link)`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  color: ${cores.pink};
  background-color: transparent;
  text-decoration: none;
`
