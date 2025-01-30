import estrela from '../../Assets/Images/estrela.png'
import { ContainerCard } from '../../styles'
import Tags from '../Tags'
import {
  Btn,
  Descricao,
  Illustration,
  Infos,
  NomeRestaurante,
  Rating,
  TagContainer,
  TitleContainer
} from './styles'

type Props = {
  image: string
  restaurantName: string
  rating: number
  description: string
  tags: string[]
}

const Card = ({ image, restaurantName, rating, description, tags }: Props) => (
  <ContainerCard>
    <Illustration src={image} alt={`Prato do ${restaurantName}`} />
    <TagContainer>
      {tags.map((tagTitle) => (
        <Tags key={tagTitle} tagTitle={tagTitle} />
      ))}
    </TagContainer>
    <Infos>
      <TitleContainer>
        <NomeRestaurante>{restaurantName}</NomeRestaurante>
        <Rating>
          <p>{rating}</p>
          <img src={estrela} alt="estrelas" />
        </Rating>
      </TitleContainer>
      <Descricao>{description}</Descricao>
      <Btn to={`/${restaurantName.replaceAll(' ', '')}`}>Saiba mais</Btn>
    </Infos>
  </ContainerCard>
)

export default Card
