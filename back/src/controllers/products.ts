// import { IProduct } from './../types.d'
import { Request, Response } from 'express'
import products from '../db/products.json'

export const getProducts = (_req: Request, res: Response): object => {
  return res.status(200).json(products)
}

export const postProduct = (_req: Request, _res: Response): void => {
  console.log(products.length)
  // const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = req.body
  // const newId = products.length[-1].id + 1
  // const newProduct = {
  //   id: newId,
  //   ...req.body
  // }
  // products.push(newProduct)
  // return res.status(201).json(newProduct)
}
