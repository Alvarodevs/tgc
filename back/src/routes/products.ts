import express from 'express'
import { getProducts, getProductById, postProduct, putProduct, deleteProduct } from '../controllers/products'

const productsRouter = express.Router()

productsRouter.get('/', getProducts)
productsRouter.get('/:id', getProductById)
productsRouter.post('/', postProduct)
productsRouter.put('/:id', putProduct)
productsRouter.delete('/:id', deleteProduct)

export default productsRouter
