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
  id: number
}

const Card = ({
  image,
  restaurantName,
  rating,
  description,
  tags,
  id
}: Props) => {
  function returnDescription() {
    if (description.length > 290) {
      return `${description.slice(0, 273)}...`
    } else {
      return description
    }
  }

  return (
    <ContainerCard>
      <Illustration
        src={image}
        alt={`Ambiente do restaurante ${restaurantName}`}
      />
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
        <Descricao>{returnDescription()}</Descricao>
      </Infos>
      <Btn to={`/Perfil/${id}`}>Saiba mais</Btn>
    </ContainerCard>
  )
}

export default Card
