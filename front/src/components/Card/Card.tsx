/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
  CardItem,
  Container,
  Button,
  Title,
  ImgContainer,
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
      <Link to={`/product/${id}`}>
        <CardItem className='CARDITEM'>
          <Title>{title}</Title>
          <AiFillStar className="rateIcon"></AiFillStar>
          <Rate>{rating}</Rate>
          <ImgContainer>
            <Image src={thumbnail} />
          </ImgContainer>
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
