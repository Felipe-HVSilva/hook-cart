import { Plus } from 'phosphor-react'
import { ProductCardContainer } from './styles'
import { priceFormatted } from '../../../../utils/priceFormatter'

interface ProductCardProps {
  title: string
  price: string
  image: string
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <ProductCardContainer>
      <img src={image.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />

      <div className="product-info">
        <h2>{priceFormatted(price)}</h2>
        <h3>{title}</h3>
      </div>

      <button>
        <Plus width={45} weight="bold" />
      </button>
    </ProductCardContainer>
  )
}
