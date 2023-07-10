import { useEffect, useState } from 'react'

import { Header } from '../../components/Header'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Products } from './styles'

import { fetchProducts } from '../../api/fetchProducts'
import { Cart } from '../../components/Cart'

interface ProductsProps {
  title: string
  price: string
  thumbnail: string
}

export function Home() {
  const [itemList, setItemList] = useState<ProductsProps[]>([])

  async function loadProducts(query: string) {
    const result = await fetchProducts(query)

    setItemList(result)
  }

  useEffect(() => {
    loadProducts('iphone')
  }, [])

  return (
    <>
      <Header onLoadProduct={loadProducts} />
      <Products>
        {itemList.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            price={item.price}
            image={item.thumbnail}
          />
        ))}
      </Products>
      <Cart />
    </>
  )
}
