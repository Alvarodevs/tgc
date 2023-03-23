import { useEffect } from 'react'
import Card from '../../components/Card'
import { Container } from './HomeStyle'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getProducts, selectProducts } from '../../features/productsSlice'
import { type IProduct } from '../../interfaces'

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)

  useEffect(() => {
    void dispatch(getProducts())        
  }, [])

  return (
    <Container>
      {products ? products.map((product: IProduct) => {
          return <Card key={product.id} {...product}/>
        }) : null
      }
    </Container>
  )
}

export default Home