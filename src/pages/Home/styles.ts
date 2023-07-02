import { styled } from 'styled-components'

export const Products = styled.section`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;

  padding: 12rem 2rem 4rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  gap: 2rem;
`
