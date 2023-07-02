import { styled } from 'styled-components'

export const ProductCardContainer = styled.div`
  position: relative;

  width: 100%;
  max-width: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    button {
      display: flex;
    }
  }

  img {
    width: 100%;
  }

  .product-info {
    padding: 20px;
    border-top: 1px solid #ddd;

    h2 {
      font-size: 3rem;
      font-weight: 400;
      display: block;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.5);
      line-height: 1.5;
      font-weight: 500;
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 0;

    width: 45px;
    height: 45px;
    margin: 12px 15px;
    color: #0c5dd6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;

    display: none;
  }
`
