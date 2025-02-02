import { Banner, BannerContainer, RestaurantTitle, Tag } from './styles'

export type Props = {
  capa: string
  tipo: string
  titulo: string
}

const ProfileBanner = ({ capa, tipo, titulo }: Props) => (
  <Banner capa={capa}>
    <BannerContainer>
      <Tag>{tipo}</Tag>
      <RestaurantTitle>{titulo}</RestaurantTitle>
    </BannerContainer>
  </Banner>
)
export default ProfileBanner
