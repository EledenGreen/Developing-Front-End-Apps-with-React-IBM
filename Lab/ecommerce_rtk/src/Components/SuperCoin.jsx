import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0)

  const items = useSelector((state) => state.cart.cartItems)
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  useEffect(() => {
    if (totalAmount < 100) {
      setSuperCoins(0)
    } else if (totalAmount < 200) {
      setSuperCoins(10)
    } else if (totalAmount < 300) {
      setSuperCoins(20)
    } else if (totalAmount < 400) {
      setSuperCoins(30)
    }
  }, [totalAmount])

  return (
    <>
      <div>SuperCoins: {superCoins}</div>
    </>
  )
}

export default SuperCoin
