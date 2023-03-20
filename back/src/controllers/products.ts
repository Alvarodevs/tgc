/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IProduct } from './../types.d'
import toDataBase from '../utils/validationData'
import { Request, Response } from 'express'
import products from '../db/products.json'

export const getProducts = (_req: Request, res: Response): Response<IProduct[]> => {
  return res.status(200).json({ products })
}

export const getProductById = (req: Request, res: Response): Response<IProduct | string> => {
  const productById = products.filter((product: IProduct) => product.id === +req.params.id)
  try {
    if (productById !== null) {
      return res.status(200).json({ product: productById })
    }
    return res.status(404).json('Product not found')
  } catch (error) {
    return res.status(404).json('Something went wrong')
  }
}

export const postProduct = (req: Request, res: Response): any => {
  const newId = products[products.length - 1].id + 1
  const newProduct = {
    id: newId,
    ...req.body
  }
  try {
    const validatedProduct = toDataBase(newProduct)
    console.log(validatedProduct)
    products.push(validatedProduct)
    return res.status(201).json(validatedProduct)
  } catch (error) {
    return res.status(500).json(`Product not added: ${error}`)
  }
}

export const putProduct = (req: Request, res: Response): any => {
  let productById = products.filter((product: IProduct) => product.id === req.body.id)
  try {
    productById = req.body
    const validatedProduct = toDataBase(productById)
    return res.status(201).json(validatedProduct)
  } catch (error) {
    return res.status(500).json(`Product not added: ${error}`)
  }
}
