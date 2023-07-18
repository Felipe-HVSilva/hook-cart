import { MagnifyingGlass, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/useCart'

interface HeaderProps {
  onLoadProduct: (query: string) => void
  onToggleCart: () => void
}

export function Header({ onLoadProduct, onToggleCart }: HeaderProps) {
  const { cart } = useContext(CartContext)
  const [productSearch, setProductSearch] = useState('')

  async function handleSearchProduct(e: React.FormEvent) {
    e.preventDefault()
    onLoadProduct(productSearch)
  }

  const isItenOnCart = cart.length > 0

  return (
    <HeaderContainer>
      <div className="container">
        <form onSubmit={handleSearchProduct}>
          <input
            type="text"
            placeholder="Buscar produtos"
            value={productSearch}
            onChange={(e) => setProductSearch(e.target.value)}
          />
          <button>
            <MagnifyingGlass size={16} weight="bold" />
          </button>
        </form>

        <button className="cart-button" onClick={onToggleCart}>
          <ShoppingCart size={24} />
          {isItenOnCart ? <span>{cart.length}</span> : ''}
        </button>
      </div>
    </HeaderContainer>
  )
}
