import { useEffect, useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { addProduct, updateProduct } from "../../features/productsSlice"
import {
  Container,
  HomeContainer,
  Image,
  FormContainer,
  Label,
  Input,
} from "./FormStyle"
import { Link, useParams } from "react-router-dom"
import { BiHomeAlt2 } from "react-icons/bi"
import { type IProduct } from '../../interfaces'

interface IForm {
  title: string
  rating: number
  thumbnail: string
  description: string
  price: number
}

const ratingOptions = ["1", "2", "3", "4", "5"]

const initialStateForm = {
  title: "",
  rating: 0,
  thumbnail: "",
  description: "",
  price: 0,
}

const Form = (product: IProduct ): JSX.Element => {
  const dispatch = useAppDispatch()
  const { id }: any = useParams()
  const [formData, setFormData] = useState<IForm>(initialStateForm)
  // console.log("PRODUCT PROPS", product)

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target
    if (product) {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    void (id
      ? dispatch(updateProduct({ id: product.id as number, body: formData }))
      : dispatch(addProduct(formData)))
  }

  useEffect(() => {
    setFormData({
      title: product ? product.title : "",
      rating: product ? product.rating : 0,
      thumbnail: product ? product.thumbnail : "",
      description: product ? product.description : "",
      price: product ? product.price : 0,
    })
  }, [product])

  return (
    <>
      {product ? (
        <>
          <HomeContainer>
            <Link to={"/"}>
              <BiHomeAlt2 />
              Back
            </Link>
          </HomeContainer>
          <Container>
            <Image src={formData.thumbnail} alt={formData.title} />

            <FormContainer onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="rating">Rate</Label>
                <select
                  name="rating"
                  id="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                >
                  {ratingOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="thumbnail">Image url</Label>
                <Input
                  type="text"
                  name="thumbnail"
                  id="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="description">
                  Description (max. 80 characters)
                </Label>
                <Input
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  maxLength={80}
                />
              </div>
              <div>
                <Label htmlFor="price">Price €</Label>
                <Input
                  className="price"
                  type="number"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                />
              </div>
              <button type="submit">Submit</button>
            </FormContainer>
          </Container>
        </>
      ) : null}
    </>
  )
}

export default Form
