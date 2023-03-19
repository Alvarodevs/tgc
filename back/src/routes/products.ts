import express from 'express'
import productsData from '../db/products.json'

const productsRouter = express.Router()

productsRouter.get('/', (_req,res) => {
  res.send(productsData)
})

productsRouter.post('/add_product', (_req,res) => {
  res.send(productsData)
})

productsRouter.put('/:id', (_req,res) => {
  res.send(productsData)
})

productsRouter.delete('/:id', (_req,res) => {
  res.send(productsData)
})

export default productsRouter