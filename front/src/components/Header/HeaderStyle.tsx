import styled from "styled-components"

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  font-family: var(--main-font);
  font-size: 2rem;
  padding: 1rem;
  box-shadow: 0px 5px 9px -6px var(--black);
`

export const Title = styled.h2`
  font-family: var(--main-font);
  font-size: 2rem;
`

export const AddIcon = styled.div`
  position: absolute;
  right: 5%;
  top: 15%;
  font-size: var(--font-size-xl);
  path {
    stroke: var(--blue);
  }
  p {
    font-size: var(--font-size-m);
  }
`
