import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  position: relative;
  padding: 3rem;

  @media only screen and (max-width: 1250px) {
    flex-direction: column-reverse;
    margin: auto;
  }
`
export const HomeContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  top: 6rem;
  right: 5%;
  z-index: 1;
  a {
    display: flex; 
    align-items: center;
    flex-direction: column;
    color: var(--blue);
    text-decoration: none;
    font-family: var(--main-font);
    font-size: var(--font-size-s);
    cursor: pointer;
    svg{
      font-size: var(--font-size-l);
    }
  }
  .deleteIcon{
    font-size: 1.5rem;
    margin: 1rem 0.2rem;
    color: red;
    transition: 0.3s ease-in-out;
    :hover {
      font-size: 1.7rem;
      margin: 1rem 0.1rem;
      cursor: pointer;
    }
  }
`

export const Delete = styled.p`
 
`;
export const Image = styled.img`
  width: 50%;
  border: 1px solid var(--lightBlue);
  border-radius: 10px;
  @media only screen and (max-width: 1250px) {
    width: 80%;
    margin: auto;
  }
  @media only screen and (max-width: 830px) {
    width: 100%;
    padding: 0.5rem 0.2rem;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 50%;
  padding: 2rem 1rem;
  @media only screen and (max-width: 1250px) {
    width: 80%;
    margin: auto;
  }
  @media only screen and (max-width: 830px) {
    width: 100%;
    padding: 0.5rem 0.2rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 80%;
    select {
      width: 3rem;
    }

    @media only screen and (max-width: 650px) {
      width: 100%;
      flex-direction: column;
      gap: 0.8rem;
      select {
        margin: auto;
      }
    }
  }
`

export const Label = styled.label`
  max-width: 10rem;
  font-family: var(--main-font);
  font-size: var(--font-size-m);
  font-weight: 600;
  letter-spacing: 0.05rem;
  @media only screen and (max-width: 650px) {
    max-width: 100%;
    margin: auto;
    text-align: center;
  }
`

export const Input = styled.input`
  width: 17rem;
  font-size: var(--font-size-m);
  padding: 0.1rem 0.3rem;
  font-family: var(--secondary-font);
  @media only screen and (max-width: 650px) {
    width: 100%;
    margin: auto;
    &.price {
      width: 20%;
    }
  }
`

export const SubmitBtn = styled.button`
  padding: 0.5rem 0.8rem;
  border: 1px solid var(--lightBlue);
  border-radius: 5px;
  background-color: var(--white);
  color: var(--black);
  font-family: var(--main-font);
  font-size: var(--font-size-l);
  transition: 0.3s ease-in-out;
  :hover{
    border-color: var(--blue);
    background-color: #46f563;
  }
`;