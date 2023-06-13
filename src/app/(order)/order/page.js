'use client'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, Card, CardHeader, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { styled } from 'styled-components'

import OrderList from '@/components/OrderLIst'
import PaymentSummary from '@/components/PaymentSummary'
import RecommendedOrderCard from '@/components/RecommendedOrderCard'
import { useEffect } from 'react'
import { getOrderByID, getOrders } from '@/utils/api'

const StyledCard = styled(Card)({
  height: '82px',
  minWidth: '378px',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  boxShadow: 'none',
  position: 'relative',
})

export default function Order() {
  const router = useRouter()

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
      <RecommendedOrderCard />
      <OrderList />
      <Box mt="auto">
        <PaymentSummary />
        <Card
          sx={{
            boxShadow: 'none',
            padding: '1rem',
            backgroundColor: '#F3F3F5',
          }}
        >
          <Button variant="contained" fullWidth sx={{ borderRadius: '12px' }}>
            <Typography sx={{ mr: '10px' }}>CONFIRM ORDER</Typography>
            <ArrowForwardIosIcon />
          </Button>
        </Card>
      </Box>
    </Box>
  )
}
