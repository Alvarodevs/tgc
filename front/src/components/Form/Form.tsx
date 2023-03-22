import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  getProduct,
  selectProduct,
  // selectStatus,
  addProduct,
  updateProduct,
} from "../../features/productsSlice"
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

const Form = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const product = useAppSelector(selectProduct)
  const { id }: any = useParams()
  const [formData, setFormData] = useState<IForm>(initialStateForm)
  console.log('FORM', formData)

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    void (id
      ? dispatch(updateProduct({ id: parseInt(id), body: formData }))
      : dispatch(addProduct(formData)))
  }

  useEffect(() => {
    void dispatch(getProduct(parseInt(id)))
    setFormData({
      title: product.title,
      rating: product.rating,
      thumbnail: product.thumbnail,
      description: product.description,
      price: product.price,
    })
  }, [!product])

  return (
    <>
      {product.title ? (
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
