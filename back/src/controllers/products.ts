/* eslint-disable @typescript-eslint/restrict-template-expressions */
import fs from 'fs'
import { IProduct } from './../types.d'
// import toDataBase from '../utils/validationData'
import { Request, Response } from 'express'

const data = fs.readFileSync('./src/db/products.json')
const parsedData: IProduct[] = JSON.parse(data as unknown as string)
// console.log(parsedData)

export const getProducts = (
  _req: Request,
  res: Response
): Response<IProduct[]> => {
  return res.status(200).json({ products: parsedData })
}

export const getProductById = (
  req: Request,
  res: Response
): Response<IProduct | string> => {
  const productById = parsedData.filter(
    (product: IProduct) => product.id === +req.params.id
  )
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
  console.log(req.body)
  const newId = parsedData[parsedData.length - 1].id + 1
  const newProduct = {
    id: newId,
    ...req.body
  }
  try {
    // const validatedProduct = toDataBase(newProduct)
    parsedData.push(newProduct)
    fs.writeFile(
      './src/db/products.json',
      JSON.stringify(parsedData),
      (err) => {
        if (err != null) {
          throw err
        }
      }
    )
    return res.status(201).json(newProduct)
  } catch (error) {
    return res.status(500).json(`Product not added: ${error}`)
  }
}

export const putProduct = (req: Request, res: Response): Response => {
  const productIndex = parsedData.findIndex((product: IProduct) => product.id === +req.params.id)
  try {
    const updatedProduct = { ...parsedData[productIndex], ...req.body }
    parsedData[productIndex] = updatedProduct
    fs.writeFile('./src/db/products.json', JSON.stringify(parsedData), (err) => {
      if (err != null) {
        throw err
      }
    })
    return res.status(201).json(updatedProduct)
  } catch (error) {
    return res.status(500).json(`Product not added: ${error}`)
  }
}

export const deleteProduct = (req: Request, res: Response): Response => {
  const newData = parsedData.filter(
    (product: IProduct) => product.id !== +req.params.id
  )
  try {
    fs.writeFile('./src/db/products.json', JSON.stringify(newData), (err) => {
      if (err != null) {
        throw err
      }
    })
    return res.status(200).json({id: req.params.id, msg: 'Product deleted'})
  } catch (error) {
    return res.status(500).json(`Product not deleted: ${error}`)
  }
}
