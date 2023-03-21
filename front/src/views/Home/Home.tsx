import { useEffect } from 'react'
import Card from '../../components/Card'
import { Container } from './HomeStyle'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getProducts, selectProducts } from '../../features/productsSlice'
import { type IProduct } from '../../interfaces'

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)

  // const mockInfo = {
  //   id: 0,
  //   title: "Iphone 46",
  //   description: "Lorem ipsum dolor",
  //   price: 10,
  //   discountPercentage: 20.0,
  //   rating: 4,
  //   stock: 40,
  //   brand: "Brand",
  //   category: "Shoes",
  //   thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //   images: [],
  // }

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