import { styled } from 'styled-components'

export const CartContainer = styled.aside`
  position: absolute;
  top: 0;
  right: 0;

  background-color: #fff;

  width: 100%;
  max-width: 33rem;
  min-height: 100%;

  padding: 10rem 2rem 2rem;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  .price-total {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: 1px solid #ddd;
    padding-top: 3.5rem;
    padding-bottom: 1.5rem;

    margin-top: 2rem;

    span {
      font-size: 2rem;
    }

    strong {
      font-size: 3.5rem;
      font-weight: 500;
    }
  }
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .cart-item {
    display: flex;
    align-items: center;

    position: relative;

    img {
      width: 7rem;
      height: 7rem;
    }

    .cart-info {
      padding-left: 1rem;
      padding-right: 2rem;

      h3 {
        font-size: 1.3rem;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 500;
      }

      h2 {
        font-size: 2.5rem;
        font-weight: 500;
      }
    }

    button {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;

      border: none;
      background-color: transparent;
      border-radius: 50%;

      padding: 0.2rem;
    }
  }
`
