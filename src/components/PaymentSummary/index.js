import { Box, Card, Divider, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function PaymentSummary({ orderSummary }) {
  const [total, setTotal] = useState('')
  useEffect(() => {
    const totalPrice = orderSummary.reduce(
      (sum, object) => sum + parseFloat(object.price * object.quantity),
      0,
    )
    setTotal(totalPrice.toFixed(2))
  }, [orderSummary])
  return (
    <Card
      sx={{
        backgroundColor: '#FFFFFF',
        height: '98px',
        boxShadow: 'none',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mx={4}
        my={4}
      >
        <Typography sx={{ color: '#8A8787', fontSize: '14px' }}>
          PAYMENT SUMMARY
        </Typography>
        <Typography sx={{ fontSize: '14px' }}>View Details</Typography>
      </Box>
      <Divider variant="middle" />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mx={4}
        my={2}
      >
        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
          TOTAL PAYMENT
        </Typography>
        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
          MYR {total}
        </Typography>
      </Box>
    </Card>
  )
}
