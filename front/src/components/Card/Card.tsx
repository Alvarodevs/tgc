import { CardContainer } from './CardStyle'
import { Link } from 'react-router-dom'

interface Props {}

const Card = (props: Props) => {
  return (
    <CardContainer>
      Card
      <Link to={`/product/1`}>
        <button>
          to product 1 site
        </button>
      </Link>
    </CardContainer>
  )
}

export default Card