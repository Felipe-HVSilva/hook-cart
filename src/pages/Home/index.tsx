import { useEffect, useState } from 'react'

import { Header } from '../../components/Header'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Products } from './styles'

import { fetchProducts } from '../../api/fetchProducts'

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

  console.log(itemList)

  return (
    <>
      <Header onLoadProduct={loadProducts} />
      <Products>
        {itemList.map((item) => (
          <ProductCard
            key={item.title}
            title={item.title}
            price={item.price}
            image={item.thumbnail}
          />
        ))}
      </Products>
    </>
  )
}
