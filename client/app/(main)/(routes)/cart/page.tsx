'use client'

import CartHeader from '@/components/cart/cart-header'
import CartItem from '@/components/cart/cart-item'
import Container from '@/components/container'
import OrderSummary from '@/components/order-summary'
import useCart from '@/hooks/use-cart'
import {useEffect, useState} from 'react'

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false)
  const cartItems = useCart(state => state.items)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Container>
      <div className="flex flex-col gap-y-8 px-4 py-8 sm:px-6 lg:px-8 min-h-[70vh]">
        <h3 className="font-bold text-2xl">Shopping Cart</h3>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 md:grid-cols-5 md:gap-x-8 items-start mt-4">
          <div className="lg:col-start-1 lg:col-end-3 md:col-end-4">
            {cartItems.length === 0 && (
              <div className="flex items-center justify-center h-full w-full text-neutral-500">
                No items added to cart.
              </div>
            )}
            {cartItems.map(item => (
              <>
                <CartHeader />
                <CartItem data={item} key={item.product.id} />
              </>
            ))}
          </div>
          <OrderSummary />
        </div>
      </div>
    </Container>
  )
}

export default CartPage
