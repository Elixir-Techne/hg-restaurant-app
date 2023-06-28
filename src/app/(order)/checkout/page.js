'use client'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  Badge,
  Box,
  Button,
  Card,
  CardHeader,
  IconButton,
  LinearProgress,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'

import OrderList from '@/components/OrderLIst'
import PaymentSummary from '@/components/PaymentSummary'
import RecommendedOrderCard from '@/components/RecommendedOrderCard'
import { OrdersContext } from '@/context/orderContext'
// import { recommendData } from '@/context/orderContext'
import { getOrderByID, getOrders } from '@/utils/api'

import cakePng from '../../../../public/assets/icons/cake.png'
import Loader from '../../../components/loader/loader'
import {
  StyledBadge,
  StyledCard,
  StyledRecommendedCard,
  UseStyle,
} from './styles'

export default function Order() {
  const { recommendData, totalBillingPrice, totalQuantity } =
    useContext(OrdersContext)
  const router = useRouter()
  const classes = UseStyle()
  const [quantity, setQuantity] = useState('')

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
          title={<Typography variant="h4">RECOMMENDATION</Typography>}
          className={classes.cardHeader}
        />
      </StyledCard>
      <Box className={classes.textContainer}>
        <Typography className={classes.textTypography}>
          We also recommend these
        </Typography>
        <Loader />
      </Box>
      <Box mt="auto">
        <Card className={classes.card}>
          <Button variant="contained" fullWidth className={classes.button}>
            <Box display="flex" alignItems="center">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={totalQuantity} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              <Typography className={classes.billingPrice}>
                {totalBillingPrice}
              </Typography>
            </Box>
            <Box display="flex">
              <Typography className={classes.checkoutBox}>Checkout</Typography>
              <ArrowForwardIosIcon />
            </Box>
          </Button>
        </Card>
      </Box>
    </Box>
  )
}
