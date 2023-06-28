'use client'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, Card, CardHeader, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'

import OrderList from '@/components/OrderLIst'
import PaymentSummary from '@/components/PaymentSummary'
import RecommendedOrderCard from '@/components/RecommendedOrderCard'
import { OrdersContext } from '@/context/orderContext'
import { getOrderByID, getOrders } from '@/utils/api'

import { StyledCard, UseStyle } from './styles'

// import { recommendData } from '../../../context/orderContext'

export default function Order() {
  const classes = UseStyle()
  const { recommendData } = useContext(OrdersContext)

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
          className={classes.arrowBackIosNewIcon}
          onClick={() => router.back()}
        />
        <CardHeader
          title={<Typography variant="h4">ORDER CART</Typography>}
          className={classes.cardHeader}
          subheader={
            <Typography className={classes.subheader}>DOME @ PCC</Typography>
          }
        />
      </StyledCard>
      <RecommendedOrderCard data={recommendData} />
      <OrderList />
      <Box mt="auto">
        <PaymentSummary />
        <Card className={classes.card}>
          <Button
            variant="contained"
            fullWidth
            className={classes.button}
            onClick={handleConfirmOrder}
          >
            <Typography className={classes.buttontypography}>
              CONFIRM ORDER
            </Typography>
            <ArrowForwardIosIcon />
          </Button>
        </Card>
      </Box>
    </Box>
  )
}
