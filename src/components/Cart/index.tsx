import { MinusCircle } from 'phosphor-react'
import { CartContainer, CartContent } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../context/useCart'
import { priceFormatted } from '../../utils/priceFormatter'

interface CartProps {
  cartIsOpen: boolean
}

export function Cart({ cartIsOpen }: CartProps) {
  const { cart, removeItemCart } = useContext(CartContext)

  const priceTotal = cart.reduce((acc, item) => {
    return acc + Number(item.price)
  }, 0)

  return (
    <CartContainer isOpen={cartIsOpen}>
      <CartContent>
        {cart.map((item) => (
          <div className="cart-item" key={item.price}>
            <img src={item.image} alt="" />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <h2>{priceFormatted(item.price)}</h2>
            </div>
            <button onClick={() => removeItemCart(item.id)}>
              <MinusCircle size={20} weight="bold" color="red" />
            </button>
          </div>
        ))}
      </CartContent>

      <div className="price-total">
        <span>Total</span>
        <strong>{priceFormatted(String(priceTotal))}</strong>
      </div>
    </CartContainer>
  )
}
