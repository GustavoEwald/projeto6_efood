import Tags from '../Tags'

import estrela from '../../Assets/Images/estrela.png'
import { ContainerCard } from '../../styles'
import * as S from './styles'

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
      <S.Illustration
        src={image}
        alt={`Ambiente do restaurante ${restaurantName}`}
      />
      <S.TagContainer>
        {tags.map((tagTitle) => (
          <Tags key={tagTitle} tagTitle={tagTitle} />
        ))}
      </S.TagContainer>
      <S.Infos>
        <S.TitleContainer>
          <h3>{restaurantName}</h3>
          <S.Rating>
            <p>{rating}</p>
            <img src={estrela} alt="estrelas" />
          </S.Rating>
        </S.TitleContainer>
        <S.Description>{returnDescription()}</S.Description>
      </S.Infos>
      <S.Btn
        title="Clique para acessar o Menu deste restaurante"
        to={`/Profile/${id}`}
      >
        Saiba mais
      </S.Btn>
    </ContainerCard>
  )
}

export default Card
