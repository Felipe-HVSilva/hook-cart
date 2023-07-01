import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #fff159;
  width: 100%;
  height: 8rem;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 2023;

  .container {
    max-width: 110rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    form {
      display: flex;
      width: 100%;
      max-width: 500px;

      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0);

      input {
        padding: 1.3rem;
        border: none;
        flex-grow: 1;

        font-size: 1.3rem;

        outline: none;
      }

      button {
        cursor: pointer;
        border: none;
        padding: 1.3rem;
        border-left: 1px solid #ddd;
        transform: all 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    .cart-button {
      background-color: transparent;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      padding: 5px;

      span {
        position: absolute;
        top: 0;
        left: 0;

        font-size: 1.1rem;

        background-color: red;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 15px;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`
