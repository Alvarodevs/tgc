import styled from "styled-components"

export const Container = styled.article`
  width: fit-content;
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: inherit;
  }
`

export const CardItem = styled.div`
  width: 15rem;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0.5rem 0;
  transition: 0.3s ease-in-out;
  border-radius: 2rem;
  box-shadow: 15px 10px 50px -30px rgba(0, 0, 0, 0.5);
  :hover {
    box-shadow: 15px 10px 50px -30px var(--blue);
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
  .rateIcon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 2.5rem;
    color: var(--yellow);
  }
`

export const Title = styled.h2`
  font-family: var(--main-font);
  text-align: center;
  margin: 2.5rem 0 1rem 0px;
`

export const Image = styled.img`
  object-fit: cover;
`

export const Rate = styled.p`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--grey);
  font-family: var(--main-font);
  font-size: 1rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
`

export const Brand = styled.h6`
  font-family: var(--secondary-font);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.7rem auto;
  span{
    font-size: 0.7rem;
    font-weight: 300;
  }
`;

export const Description = styled.p`
  font-family: var(--main-font);
  padding: 0.3rem 0.8rem;
  padding: 0.3rem;
  margin: auto;
  color: var(--grey);
`;

export const Price = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: var(--secondary-font);
  padding-top: 0.3rem;
`;
export const Button = styled.button`
  width: fit-content;
  background-color: var(--grey);
  color: var(--white);
  font-size: 1rem;
  margin: 1rem auto;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--black);
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  :hover {
    background-color: var(--black);
  }
`
