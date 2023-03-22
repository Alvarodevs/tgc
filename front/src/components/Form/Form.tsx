import { useState } from "react"
import {
  Container,
  HomeContainer,
  Image,
  FormContainer,
  Label,
  Input,
} from "./FormStyle"
import { Link } from "react-router-dom"
import { BiHomeAlt2 } from "react-icons/bi"

interface IForm {
  title: string
  rating: string
  thumbnail: string
  description: string
  price: string
}

const ratingOptions = ["1", "2", "3", "4", "5"]

const Form = (): JSX.Element => {
  const [formData, setFormData] = useState<IForm>({
    title: "",
    rating: "",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    description: "",
    price: "",
  })

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
  }

  return (
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
            <Label htmlFor="price">Price</Label>
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
  )
}

export default Form
