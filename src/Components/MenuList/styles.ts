import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  margin: 56px auto 120px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.dextop}) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin: 24px auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
