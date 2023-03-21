import {
  CardItem,
  Container,
  Button,
  Title,
  Image,
  Rate,
  Brand,
  Description,
  Price
} from "./CardStyle"
import { Link } from "react-router-dom"
import { AiFillStar } from 'react-icons/ai'

const Card = (): JSX.Element => {
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
      <Link to={`/product/1`}>
        <CardItem>
          <Title>{mockInfo.title}</Title>
          <AiFillStar className='rateIcon'>
          </AiFillStar>
            <Rate>{mockInfo.rating}</Rate>
          <Image src={mockInfo.thumbnail} />
          <Brand>{mockInfo.brand} <span>presents: </span></Brand>
          <Description>{mockInfo.description}</Description>
          <Price>€{mockInfo.price}</Price>

          <Button>Edit</Button>
        </CardItem>
      </Link>
    </Container>
  )
}

export default Card
