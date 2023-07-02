import { MagnifyingGlass, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { useState } from 'react'

interface HeaderProps {
  onLoadProduct: (query: string) => void
}

export function Header({ onLoadProduct }: HeaderProps) {
  const [isItemCart, setIsItemCart] = useState(false)
  const [productSearch, setProductSearch] = useState('')

  // setIsItemCart(true)

  async function handleSearchProduct(e: HTMLFormElement) {
    e.preventDefault()

    onLoadProduct(productSearch)
  }

  console.log(productSearch)

  return (
    <HeaderContainer>
      <div className="container">
        <form onSubmit={() => handleSearchProduct}>
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

        <button className="cart-button">
          <ShoppingCart size={24} />
          {isItemCart === true ? <span>1</span> : ''}
        </button>
      </div>
    </HeaderContainer>
  )
}
