import { ReactNode, createContext, useState } from 'react'

interface CartProps {
  id: number
  price: string
  title: string
  image: string
}

interface CartContextProps {
  cart: CartProps[]
  addItemCart: (newItem: CartProps) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])

  function addItemCart(newItem: CartProps) {
    setCart([...cart, newItem])
  }

  console.log(cart)

  return (
    <CartContext.Provider value={{ addItemCart, cart }}>
      {children}
    </CartContext.Provider>
  )
}
