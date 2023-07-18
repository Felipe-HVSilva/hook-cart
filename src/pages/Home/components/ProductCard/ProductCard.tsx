import { Plus } from 'phosphor-react'
import { ProductCardContainer } from './styles'
import { priceFormatted } from '../../../../utils/priceFormatter'
import { useContext } from 'react'
import { CartContext } from '../../../../context/useCart'

interface ProductCardProps {
  title: string
  price: string
  image: string
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  const { cart, addItemCart } = useContext(CartContext)

  const id = cart.length + 1

  function handleAddNewItemCart() {
    addItemCart({ title, image, price, id })
  }

  return (
    <ProductCardContainer>
      <img src={image.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />

      <div className="product-info">
        <h2>{priceFormatted(price)}</h2>
        <h3>{title}</h3>
      </div>

      <button onClick={handleAddNewItemCart}>
        <Plus width={45} weight="bold" />
      </button>
    </ProductCardContainer>
  )
}
