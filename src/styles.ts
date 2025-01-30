import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  pink: '#E66767',
  lightText: '#FFEBD9',
  menuText: 'rgba(255, 235, 217, 1)',
  background: '#FFF8F2',
  white: '#fff'
}

export const GlobalCss = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    background-color: ${cores.background};
  }
`
export const ContainerCard = styled.div`
  width: 472px;
  height: 399px;
  border: 1px solid ${cores.pink};
  position: relative;
`
export const Logo = styled.img`
  width: 125px;
  display: block;
  margin: 0 auto;
`
