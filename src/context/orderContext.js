import { createContext, useState } from 'react'
import React from 'react'

export const OrdersContext = createContext(null)

export const recommendData = [
  {
    id: 1,
    name: ' Chocolate Shake',
    price: ' 16.51',
    quantity: 1,
  },
  {
    id: 2,
    name: ' Chocolate Shake',
    price: ' 16.51',
    quantity: 1,
  },
  {
    id: 3,
    name: ' Chocolate Shake',
    price: ' 16.51',
    quantity: 1,
  },
]

const data = [
  {
    id: 4,
    name: 'Egg Hollandaise',
    price: '22.64',
    trending: false,
    customize: false,
    quantity: 1,
  },
  {
    id: 5,
    name: 'Egg Hollandaise',
    price: '22.64',
    trending: true,
    customize: true,
    quantity: 1,
  },
  {
    id: 6,
    name: 'Egg Hollandaise',
    price: '22.64',
    trending: false,
    customize: false,
    quantity: 1,
  },
  {
    id: 7,
    name: 'Egg Hollandaise',
    price: '22.64',
    trending: false,
    customize: false,
    quantity: 1,
  },
  {
    id: 8,
    name: 'Egg Hollandaise',
    price: '22.64',
    trending: true,
    customize: true,
    quantity: 1,
  },
]

const trendingData = [
  { id: 9, name: ' Caesar Salad [Smoked Salmon]', price: '30.19', quantity: 1 },
  { id: 10, name: ' Caesar Salad [Chicken]', price: '25.81', quantity: 1 },
  { id: 11, name: ' Caesar Salad [Beef]', price: ' 25.00', quantity: 1 },
]

export const OrdersProvider = ({ children }) => {
  const [totalBillingPrice, setTotalBillingPrice] = useState(' ')

  const [totalQuantity, setTotalQuantity] = useState(' ')

  const [orderItem, setOrderItem] = useState([])

  return (
    <OrdersContext.Provider
      value={{
        setTotalBillingPrice,
        totalBillingPrice,
        setTotalQuantity,
        totalQuantity,
        setOrderItem,
        orderItem,
        recommendData,
        trendingData,
        data,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
