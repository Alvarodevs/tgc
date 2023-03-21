import {
  CardItem,
  Container,
  Button,
  Title,
  Image,
  Rate,
  Brand,
  Description,
  Price,
} from "./CardStyle"
import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"
import { type IProduct } from "../../interfaces"

const Card = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}: IProduct): JSX.Element => {
  return (
    <Container>
      <Link to={`/product/1`}>
        <CardItem>
          <Title>{title}</Title>
          <AiFillStar className="rateIcon"></AiFillStar>
          <Rate>{rating}</Rate>
          <Image src={thumbnail} />
          <Brand>
            {brand} <span>presents: </span>
          </Brand>
          <Description>{description}</Description>
          <Price>€{price}</Price>

          <Button>Edit</Button>
        </CardItem>
      </Link>
    </Container>
  )
}

export default Card
