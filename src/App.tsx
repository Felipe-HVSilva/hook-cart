import { CartProvider } from './context/useCart'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <CartProvider>
      <GlobalStyle />
      <Home />
    </CartProvider>
  )
}

export default App
