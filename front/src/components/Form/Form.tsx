import { FormContainer } from './FormStyle'
import { Link } from 'react-router-dom'



const Form = (): JSX.Element => {
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