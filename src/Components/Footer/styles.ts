import styled from 'styled-components'
import footerBackground from '../../Assets/Images/headerFooter_background.png'
import { colors } from '../../styles'

export const Container = styled.footer`
  height: 298px;
  width: 100%;
  background-image: url(${footerBackground});
  padding: 40px 0;
`
export const SocialList = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;
`

export const SocialLink = styled.a`
  background-color: transparent;
`
export const SocialIcon = styled.img`
  background-color: transparent;
`

export const Disclaimer = styled.p`
  background-color: transparent;
  max-width: 480px;
  margin: 0 auto;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${colors.pink};
`
