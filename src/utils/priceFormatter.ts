export function priceFormatted(price: string) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(price))
}
