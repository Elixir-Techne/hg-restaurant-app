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
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { styled } from 'styled-components'

import OrderList from '@/components/OrderLIst'
import PaymentSummary from '@/components/PaymentSummary'
import RecommendedOrderCard from '@/components/RecommendedOrderCard'
import { getOrderByID, getOrders } from '@/utils/api'

import Loader from '../../../components/loader/loader'

const StyledCard = styled(Card)({
  height: '82px',
  minWidth: '378px',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  boxShadow: 'none',
  position: 'relative',
})
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    padding: '0',
    backgroundColor: 'white',
    color: '#035942',
    fontWeight: 'bold',
  },
  '& .MuiSvgIcon-root': {
    color: '#C8C7C8',
  },
}))
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
          title={<Typography variant="h4">RECOMMENDATION</Typography>}
          sx={{ textAlign: 'center' }}
        />
      </StyledCard>
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          We also recommend these
        </Typography>
        <Loader />
      </Box>
      <Box mt="auto">
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
            sx={{
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              <Typography sx={{ fontSize: '14px', marginLeft: '0.5rem' }}>
                MYR 16.51
              </Typography>
            </Box>
            <Box display="flex">
              <Typography sx={{ mr: '10px' }}>Checkout</Typography>
              <ArrowForwardIosIcon />
            </Box>
          </Button>
        </Card>
      </Box>
    </Box>
  )
}
