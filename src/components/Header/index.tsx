import { MagnifyingGlass, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { useState } from 'react'

export function Header() {
  const [isItemCart, setIsItemCart] = useState(false)

  // setIsItemCart(true)

  return (
    <HeaderContainer>
      <div className="container">
        <form action="">
          <input type="text" placeholder="Buscar produtos" />
          <button>
            <MagnifyingGlass size={16} weight="bold" />
          </button>
        </form>

        <button className="cart-button">
          <ShoppingCart size={24} />
          {isItemCart === true ? <span>1</span> : ''}
        </button>
      </div>
    </HeaderContainer>
  )
}
