import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  padding: 1rem 0.6rem;
`;