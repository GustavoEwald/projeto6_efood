import * as S from './styles'

export type Props = {
  capa: string
  tipo: string
  titulo: string
}

const ProfileBanner = ({ capa, tipo, titulo }: Props) => (
  <S.Banner capa={capa}>
    <S.BannerContainer>
      <S.Tag>{tipo}</S.Tag>
      <S.RestaurantTitle>{titulo}</S.RestaurantTitle>
    </S.BannerContainer>
  </S.Banner>
)
export default ProfileBanner
