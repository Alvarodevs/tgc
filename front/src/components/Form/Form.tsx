import { FormContainer } from './FormStyle'
import { Link } from 'react-router-dom'


type Props = {}

const Form = (props: Props) => {
  return (
    <FormContainer>
      Form
      <Link to={'/'}>
        <button>
          Back
        </button>
      </Link>
    </FormContainer>
  )
}

export default Form