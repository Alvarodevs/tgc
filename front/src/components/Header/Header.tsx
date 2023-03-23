import { Container, Title, AddIcon } from "./HeaderStyle"
import { GrAddCircle } from "react-icons/gr"
import { Link } from "react-router-dom"
// import { useAppDispatch } from '../../app/hooks'
// import { clearSingleData } from '../../features/productsSlice'

const Header = (): JSX.Element => {
  // const dispatch = useAppDispatch()
  return (
    <Container>
      <Title>Products viewer</Title>
      {/* <button onClick={() => dispatch(clearSingleData)}>clear</button> */}
      <Link to={'/add_product'} >
        <AddIcon>
          <GrAddCircle />
          <p>add</p>
        </AddIcon>
      </Link>
    </Container>
  )
}

export default Header
