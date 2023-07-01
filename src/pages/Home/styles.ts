import { styled } from 'styled-components'

export const Products = styled.section`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;

  padding: 12rem 2rem 4rem;

  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 2rem;

  .product-card {
    width: 100%;
    max-width: 250px;

    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
    }

    .product-info {
      padding: 2rem;

      h2 {
        font-size: 3rem;
        font-weight: 500;
        display: block;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.5rem;
        color: rgba(0, 0, 0, 0.5);
        line-height: 1.5rem;
        font-weight: 500;
      }
    }
  }
`
