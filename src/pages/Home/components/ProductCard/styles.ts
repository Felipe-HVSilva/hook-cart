import { styled } from 'styled-components'

export const ProductCarContainer = styled.div`
  width: 100%;
  max-width: 250px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

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

  &:hover {
    button {
      display: block;
    }
  }

  button {
    display: none;
    cursor: pointer;

    color: #0c5dd6;
    background-color: transparent;
    border: none;

    position: absolute;
    top: 15px;
    right: 0;
  }
`
