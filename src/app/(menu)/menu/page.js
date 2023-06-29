'use client'

import { Box } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

import CategoryFilter from '@/components/CategoryFilter'
import CustomizeDrawer from '@/components/CustomizeDrawer'
import MenuCard from '@/components/MenuCard'
import RecommendedCard from '@/components/RecommendedCard'
import ReorderCard from '@/components/ReorderCard'
import { OrdersContext } from '@/context/orderContext'
import { getMenu, getMenuItem } from '@/utils/api'

export default function Menu() {
  const searchParams = useSearchParams()

  const router = useRouter()

  const category = searchParams.get('category')

  const [isCustomizeable, setIsCustomizeable] = useState(false)

  const { data, handleAddOrderItem } = useContext(OrdersContext)

  const [currentItem, setCurrentItem] = useState(null)

  //API for GET menu

  // useEffect(() => {
  //   getMenu(restaurant_id)
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [])

  // useEffect(() => {
  //   getMenuItem(restaurant_id,menu_id)
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [])

  const handleAddItemClick = (item) => {
    if (item.customize) {
      setCurrentItem(item)
      setIsCustomizeable(true)
    } else {
      handleAddOrderItem(item)
      router.push('/order')
    }
  }

  const handleCustomizeAddItemClick = (e, item) => {
    handleAddOrderItem(currentItem)
    handleAddOrderItem(item)
    setIsCustomizeable(false)
    router.push('/order')
  }

  return (
    <>
      <CategoryFilter value={category} />
      {category === 'for-you' ? (
        <>
          <RecommendedCard />
          <ReorderCard />
        </>
      ) : (
        <Box
          display="flex"
          flexWrap="wrap"
          gap="20px"
          my={4}
          mx={5}
          width="100%"
        >
          <MenuCard onClick={handleAddItemClick} data={data} />
        </Box>
      )}
      {isCustomizeable && (
        <CustomizeDrawer
          open={isCustomizeable}
          onClose={() => setIsCustomizeable(false)}
          onClick={handleCustomizeAddItemClick}
          currentItem={currentItem}
        />
      )}
    </>
  )
}
