import { useEffect, useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { addProduct, updateProduct, removeProduct } from "../../features/productsSlice"
import {
  Container,
  HomeContainer,
  Image,
  FormContainer,
  Label,
  Input,
  SubmitBtn
} from "./FormStyle"
import { Link, useParams, useNavigate } from "react-router-dom"
import { BiHomeAlt2 } from "react-icons/bi"
import { MdDeleteOutline } from "react-icons/md"
import { type IProduct } from '../../interfaces'
import image_error from '../../assets/image_error.png'

interface IForm {
  title: string
  brand: string
  rating: number
  thumbnail: string
  description: string
  price: number
}

const ratingOptions = ["1", "2", "3", "4", "5"]

const initialStateForm = {
  title: "",
  brand: "",
  rating: 0,
  thumbnail: "",
  description: "",
  price: 0,
}

const Form = (product: IProduct ): JSX.Element => {
  const dispatch = useAppDispatch()
  const { id }: any = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState<IForm>(initialStateForm)

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
    navigate('/')  
  }

  const handleDelete = (): void => {
    void dispatch(removeProduct(id))
    navigate('/')
  }

  useEffect(() => {
    if (!product) {
      setFormData(initialStateForm)
    }
    setFormData({
      title: product ? product.title : "",
      brand: product ? product.brand : "",
      rating: product ? product.rating : 0,
      thumbnail: product ? product.thumbnail : "",
      description: product ? product.description : "",
      price: product ? product.price : 0,
    })
    return () => {setFormData(initialStateForm)}
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
            {id ? <MdDeleteOutline className='deleteIcon' onClick={handleDelete}/> : null}
          </HomeContainer>
          
          <Container>
            <Image src={formData.thumbnail || image_error} alt={formData.title} />

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
                <Label htmlFor="brand">Brand</Label>
                <Input
                  type="text"
                  name="brand"
                  id="brand"
                  value={formData.brand}
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
              <SubmitBtn type="submit">Submit</SubmitBtn>
            </FormContainer>
          </Container>
        </>
      ) : null}
    </>
  )
}

export default Form
