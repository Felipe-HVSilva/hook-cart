import { Plus } from 'phosphor-react'
import { ProductCarContainer } from './styles'

export function ProductCard() {
  return (
    <ProductCarContainer>
      <img
        src="http://http2.mlstatic.com/D_716171-MLA43711395855_102020-W.jpg"
        alt=""
      />
      <div className="product-info">
        <h2>R$ 1.296,00</h2>
        <h3>iPhone 8 Plus 64 Gb Durado</h3>
      </div>

      <button>
        <Plus width={45} weight="bold" />
      </button>
    </ProductCarContainer>
  )
}
