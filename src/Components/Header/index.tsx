import efoodLogo from '../../Assets/Images/logo.svg'
import * as S from './styles'
import { Logo } from '../../styles'

export type Props = {
  size: 'home' | 'perfil'
}

const Header = ({ size }: Props) => (
  <>
    <S.HeaderContainerListagem size={size}>
      <Logo src={efoodLogo} alt="Logo efood" />
      <S.Subtitle>
        Viva experiências gastronômicas no conforto da sua casa
      </S.Subtitle>
    </S.HeaderContainerListagem>

    <S.HeaderContainerPerfil size={size}>
      <S.PerfilNav>
        <S.RestaurantsLink to={'/'}>Restaurantes</S.RestaurantsLink>
        <Logo src={efoodLogo} alt="Logo efood" />
        <h2>0 produto(s) no carrinho</h2>
      </S.PerfilNav>
    </S.HeaderContainerPerfil>
  </>
)

export default Header
