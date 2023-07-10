import { MinusCircle } from 'phosphor-react'
import { CartContainer, CartContent } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../context/useCart'
import { priceFormatted } from '../../utils/priceFormatter'

export function Cart() {
  const { cart } = useContext(CartContext)

  return (
    <CartContainer>
      <CartContent>
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt="" />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <h2>{priceFormatted(item.price)}</h2>
            </div>
            <button>
              <MinusCircle size={20} weight="bold" color="red" />
            </button>
          </div>
        ))}
      </CartContent>

      <div className="price-total">
        <span>Total</span>
        <strong>R$ 2500</strong>
      </div>
    </CartContainer>
  )
}
