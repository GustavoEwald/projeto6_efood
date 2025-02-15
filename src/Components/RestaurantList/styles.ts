import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto 120px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.dextop}) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto;
  }
`
