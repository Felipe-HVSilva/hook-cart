import { useState } from 'react'
import { Header } from '../../components/Header'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Products } from './styles'

interface ProductsProps {
  title: string
  price: string
}

export function Home() {
  const [itemList, setItemList] = useState<ProductsProps[]>([])

  async function fetchProducts(query: string) {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
    )

    const data = await response.json()

    setItemList(data.results)
  }

  fetchProducts('iphone')

  return (
    <>
      <Header />
      <Products>
        {itemList.map((item) => (
          <ProductCard key={item.title} />
        ))}
      </Products>
    </>
  )
}
