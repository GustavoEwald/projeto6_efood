import { Restaurant } from '../../models'
import Card from '../RestaurantCard'
import { Container } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    {restaurants.map((restaurant) => (
      <Card
        key={restaurant.id}
        image={restaurant.image}
        restaurantName={restaurant.restaurantName}
        rating={restaurant.rating}
        description={restaurant.description}
        tags={restaurant.tags}
      />
    ))}
  </Container>
)

export default RestaurantList
