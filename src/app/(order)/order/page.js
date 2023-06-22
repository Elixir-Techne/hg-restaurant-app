'use client'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, Card, CardHeader, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

import OrderList from '@/components/OrderLIst'
import PaymentSummary from '@/components/PaymentSummary'
import RecommendedOrderCard from '@/components/RecommendedOrderCard'
import { getOrderByID, getOrders } from '@/utils/api'

const StyledCard = styled(Card)({
  height: '82px',
  minWidth: '378px',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  boxShadow: 'none',
  position: 'relative',
})
const recommendData = [
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
export default function Order() {
  const [orderSummary, setOrderSummary] = useState([
    { id: 0, name: 'Heavenly Scone', price: '16.51', quantity: 1 },
  ])
  console.log(orderSummary)
  const router = useRouter()
  const handleConfirmOrder = () => {
    router.push('/checkout')
  }
  //API for GET orders

  // useEffect(() => {
  //   getOrders(restaurant_id)
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [])

  // useEffect(() => {
  //   getOrderByID(restaurant_id,order_id)
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [])

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <StyledCard>
        <ArrowBackIosNewIcon
          sx={{ position: 'absolute', top: 25, left: 5 }}
          onClick={() => router.back()}
        />
        <CardHeader
          title={<Typography variant="h4">ORDER CART</Typography>}
          sx={{ textAlign: 'center' }}
          subheader={
            <Typography sx={{ color: '#5D5A5A', fontStyle: 'bold' }}>
              DOME @ PCC
            </Typography>
          }
        />
      </StyledCard>
      <RecommendedOrderCard
        data={recommendData}
        setOrderSummary={setOrderSummary}
        orderSummary={orderSummary}
      />
      <OrderList
        orderSummary={orderSummary}
        setOrderSummary={setOrderSummary}
      />
      <Box mt="auto">
        <PaymentSummary orderSummary={orderSummary} />
        <Card
          sx={{
            boxShadow: 'none',
            padding: '1rem',
            backgroundColor: '#F3F3F5',
          }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{ borderRadius: '12px' }}
            onClick={handleConfirmOrder}
          >
            <Typography sx={{ mr: '10px' }}>CONFIRM ORDER</Typography>
            <ArrowForwardIosIcon />
          </Button>
        </Card>
      </Box>
    </Box>
  )
}
