'use client'

import { Box } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import CategoryFilter from '@/components/CategoryFilter'
import CustomizeDrawer from '@/components/CustomizeDrawer'
import MenuCard from '@/components/MenuCard'
import RecommendedCard from '@/components/RecommendedCard'
import ReorderCard from '@/components/ReorderCard'
import { getMenu, getMenuItem } from '@/utils/api'

export default function Menu() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const category = searchParams.get('category')

  const [isCustomizeable, setIsCustomizeable] = useState(false)

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
      setIsCustomizeable(true)
    } else {
      router.push('/order')
    }
  }

  const handleCustomizeAddItemClick = () => {
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
        <Box display="flex" flexWrap="wrap" gap="20px" mx={6} mb={4}>
          <MenuCard onClick={handleAddItemClick} />
        </Box>
      )}
      {isCustomizeable && (
        <CustomizeDrawer
          open={isCustomizeable}
          onClose={() => setIsCustomizeable(false)}
          onClick={handleCustomizeAddItemClick}
        />
      )}
    </>
  )
}
