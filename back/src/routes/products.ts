import express from 'express'
import { getProducts, getProductById, postProduct, putProduct } from '../controllers/products'

const productsRouter = express.Router()

productsRouter.get('/', getProducts)

productsRouter.get('/:id', getProductById)

productsRouter.post('/', postProduct)
productsRouter.put('/:id', putProduct)

// productsRouter.put('/:id', (_req,res) => {
//   res.send(productsData)
// })

// productsRouter.delete('/:id', (_req,res) => {
//   res.send(productsData)
// })

export default productsRouter
