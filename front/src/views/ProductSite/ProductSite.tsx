import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getProduct, selectProduct } from '../../features/productsSlice'
import Form from '../../components/Form'

const ProductSite = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const product = useAppSelector(selectProduct)
  const { id }: any = useParams()
  
  useEffect(() => {
    void dispatch(getProduct(parseInt(id)))
  }, [dispatch])
  
  return (
    <Form {...product}></Form>
  )
}

export default ProductSite