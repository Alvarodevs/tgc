import Card from '../../components/Card'
import { Container } from './HomeStyle'

const Home = (): JSX.Element => {

  const mockInfo = {
    id: 0,
    title: "Iphone 46",
    description: "Lorem ipsum dolor",
    price: 10,
    discountPercentage: 20.0,
    rating: 4,
    stock: 40,
    brand: "Brand",
    category: "Shoes",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [],
  }

  return (
    <Container>
      <Card {...mockInfo}/>
    </Container>
  )
}

export default Home