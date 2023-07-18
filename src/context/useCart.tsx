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
  removeItemCart: (itemId: number) => void
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

  function removeItemCart(itemId: number) {
    const removeItem = cart.filter((item) => item.id !== itemId)

    setCart(removeItem)
  }

  return (
    <CartContext.Provider value={{ addItemCart, removeItemCart, cart }}>
      {children}
    </CartContext.Provider>
  )
}
