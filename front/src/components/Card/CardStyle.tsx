import styled from "styled-components"

export const Container = styled.article`
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: inherit;
  }
`

export const CardItem = styled.div`
  width: 19rem;
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
  .rateIcon {
    position: absolute;
    top: 0.2rem;
    right: 1rem;
    font-size: 3rem;
    color: var(--yellow);
  }
`

export const Title = styled.h2`
  font-family: var(--main-font);
  text-align: center;
  padding: 0 20px;
  margin: 18% auto 5% auto;
  height: 3rem;
  display: flex;
  align-items: start;
`
export const ImgContainer = styled.div`
  width: 100%;
`

export const Image = styled.img`
  object-fit: cover;
  height: 10rem;
  width: 100%;
`

export const Rate = styled.p`
width: 3rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--grey);
  font-family: var(--main-font);
  font-size: 1rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  text-align: center;
`

export const Brand = styled.h6`
  font-family: var(--secondary-font);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto 0 auto;
  span {
    font-size: 0.7rem;
    font-weight: 300;
    text-align: center;
  }
`

export const Description = styled.p`
  font-family: var(--main-font);
  padding: 0 0.8rem;
  margin: 1rem auto 0 auto;
  color: var(--grey);
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: stretch;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.2em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--lightBlue);
    outline: 0px solid var(--grey);
  }
`

export const Price = styled.p`
  display: flex;
  justify-content: center;
  font-size: var(--font-size-xl);
  font-weight: 600;
  font-family: var(--secondary-font);
  padding-top: 0.3rem;
`
// export const Button = styled.button`
//   width: fit-content;
//   background-color: var(--grey);
//   color: var(--white);
//   font-size: 1rem;
//   margin: 1rem auto;
//   padding: 0.25rem 0.5rem;
//   border: 1px solid var(--black);
//   border-radius: 5px;
//   transition: 0.3s ease-in-out;
//   :hover {
//     background-color: var(--black);
//   }
// `
