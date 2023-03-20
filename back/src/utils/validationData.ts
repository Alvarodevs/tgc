import { IProduct } from './../types.d'

const idValid = (id: any): number => {
  if (typeof id !== 'number') {
    throw new Error('Id is not valid')
  }
  return id
}

const titleValid = (title: any): string => {
  if (typeof title !== 'string' || title === '') {
    throw new Error('Title is not valid')
  }
  return title
}

const descriptionValid = (description: any): string => {
  if (typeof description !== 'string' || description === '') {
    throw new Error('Description is not valid')
  }
  return description
}

const priceValid = (price: any): number => {
  if (typeof price !== 'number') {
    throw new Error('Price is not valid')
  }
  return price
}

const discountPercentageValid = (discount: any): number => {
  if (typeof discount !== 'number') {
    throw new Error('Discount is not valid')
  }
  return discount
}

const ratingValid = (rating: any): number => {
  if (typeof rating !== 'number') {
    throw new Error('Rating is not valid')
  }
  return rating
}

const stockValid = (stock: any): number => {
  if (typeof stock !== 'number') {
    throw new Error('Stock is not valid')
  }
  return stock
}

const brandValid = (brand: any): string => {
  if (typeof brand !== 'string' || brand === '') {
    throw new Error('Brand is not valid')
  }
  return brand
}

const categoryValid = (category: any): string => {
  if (typeof category !== 'string' || category === '') {
    throw new Error('Category is not valid')
  }
  return category
}

const thumbnailValid = (thumb: any): string => {
  if (typeof thumb !== 'string' || thumb === '') {
    throw new Error('Thumbnail is not valid')
  }
  return thumb
}

const toDataBase = (product: any): IProduct => {
  const newProduct = {
    id: idValid(product.id),
    title: titleValid(product.title),
    description: descriptionValid(product.description),
    price: priceValid(product.price),
    discountPercentage: discountPercentageValid(product.discountPercentage),
    rating: ratingValid(product.rating),
    stock: stockValid(product.stock),
    brand: brandValid(product.brand),
    category: categoryValid(product.category),
    thumbnail: thumbnailValid(product.thumbnail),
    images: product.images
  }
  return newProduct
}

export default toDataBase
