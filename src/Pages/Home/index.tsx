import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import RestaurantList from '../../Components/RestaurantList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Header size="home" />
      <RestaurantList restaurants={restaurants} isLoading={isLoading} />
      <Footer />
    </>
  )
}

export default Home
