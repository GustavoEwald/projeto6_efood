import logo from '../../Assets/Images/logo.svg'
import instagram from '../../Assets/Images/instagram.png'
import facebook from '../../Assets/Images/facebook.png'
import twitter from '../../Assets/Images/twitter.png'
import * as S from './styles'
import { Logo } from '../../styles'

const Footer = () => (
  <S.Container>
    <Logo src={logo} alt="Logo efood" />
    <S.SocialList>
      <S.SocialLink href="#">
        <S.SocialIcon src={instagram} alt="Instagram" />
      </S.SocialLink>
      <S.SocialLink href="#">
        <S.SocialIcon src={facebook} alt="Facebook" />
      </S.SocialLink>
      <S.SocialLink href="#">
        <S.SocialIcon src={twitter} alt="Twitter" />
      </S.SocialLink>
    </S.SocialList>
    <S.Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </S.Disclaimer>
  </S.Container>
)

export default Footer
