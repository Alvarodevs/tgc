import express from 'express'
import { getProducts, postProduct } from '../controllers/products'

const productsRouter = express.Router()

productsRouter.get('/', getProducts)

productsRouter.post('/', postProduct)

// productsRouter.put('/:id', (_req,res) => {
//   res.send(productsData)
// })

// productsRouter.delete('/:id', (_req,res) => {
//   res.send(productsData)
// })

export default productsRouter
