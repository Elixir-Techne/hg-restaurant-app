import { Box, CardContent, CardHeader, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'

import { OrdersContext } from '@/context/orderContext'

import CustomizeDrawer from '../CustomizeDrawer'
import MenuCard from '../MenuCard'
import { StyledCard, UseStyle } from './styles'

export default function RecommendedCard() {
  const router = useRouter()

  const [isCustomizeable, setIsCustomizeable] = useState(false)

  const [currentItem, setCurrentItem] = useState(null)

  const classes = UseStyle()

  const { data, setOrderItem } = useContext(OrdersContext)

  const handleAddItemClick = (item) => {
    if (item.customize) {
      setCurrentItem(item)
      setIsCustomizeable(true)
    } else {
      setOrderItem((prev) => [...prev, item])
      router.push('/order')
    }
  }

  const handleCustomizeAddItemClick = (e, item) => {
    setOrderItem((prev) => [...prev, item, currentItem])
    setIsCustomizeable(false)
    router.push('/order')
  }

  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography variant="h6" className={classes.recommanedTitle}>
            RECOMMENDED FOR YOU
          </Typography>
        }
        subheader={
          <Typography variant="caption" className={classes.subheaderTitle}>
            Curated because you are unique
          </Typography>
        }
        className={classes.subheader}
      />
      <CardContent>
        <Box className={classes.cardContent}>
          <MenuCard onClick={handleAddItemClick} data={data} />
        </Box>
      </CardContent>
      {isCustomizeable && (
        <CustomizeDrawer
          open={isCustomizeable}
          onClose={() => setIsCustomizeable(false)}
          onClick={handleCustomizeAddItemClick}
          currentItem={currentItem}
        />
      )}
    </StyledCard>
  )
}
