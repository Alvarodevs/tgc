import { IProduct } from './../types.d'
// import { IProduct } from './../types.d'
import { Request, Response } from 'express'
import products from '../db/products.json'

export const getProducts = (_req: Request, res: Response): object => {
  return res.status(200).json({ products })
}

export const getProductById = (req: Request, res: Response): object => {
  const productById = products.filter((product: IProduct) => product.id === parseInt(req.params.id))
  return res.status(200).json({ product: productById })
}

export const postProduct = (req: Request, res: Response): Response<IProduct> => {
  console.log(products.length)
  // const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = req.body
  const newId = products[products.length - 1].id + 1
  const newProduct = {
    id: newId,
    ...req.body
  }
  products.push(newProduct)
  return res.status(201).json(newProduct)
}
