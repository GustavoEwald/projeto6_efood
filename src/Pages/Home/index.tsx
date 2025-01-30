import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import RestaurantList from '../../Components/RestaurantList'
import { Restaurant } from '../../models'
import Hioki from '../../Assets/Images/hioki.png'
import LaDolceVita from '../../Assets/Images/laDolceVita.png'

const restaurants: Restaurant[] = [
  {
    image: Hioki,
    restaurantName: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    tags: ['Destaque da semana', 'Japonesa'],
    id: 1
  },
  {
    image: LaDolceVita,
    restaurantName: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    id: 2
  },
  {
    image: LaDolceVita,
    restaurantName: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    id: 3
  },
  {
    image: LaDolceVita,
    restaurantName: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    id: 4
  },
  {
    image: LaDolceVita,
    restaurantName: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    id: 5
  },
  {
    image: LaDolceVita,
    restaurantName: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana'],
    id: 6
  }
]

const Home = () => (
  <>
    <Header size="home" />
    <RestaurantList restaurants={restaurants} />
    <Footer />
  </>
)

export default Home
