import { Restaurantes } from '../../Pages/Home'
import Card from '../RestaurantCard'
import { Container } from './styles'

type Props = {
  restaurants: Restaurantes[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    {restaurants.map((restaurant) => (
      <Card
        key={restaurant.id}
        image={restaurant.capa}
        restaurantName={restaurant.titulo}
        rating={restaurant.avaliacao}
        description={restaurant.descricao}
        tags={
          restaurant.destacado
            ? ['Destaque', restaurant.tipo]
            : [restaurant.tipo]
        }
        id={restaurant.id}
      />
    ))}
  </Container>
)

export default RestaurantList
