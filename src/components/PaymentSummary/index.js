import { Box, Card, Divider, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import { OrdersContext } from '../../context/orderContext'
import { UseStyle } from './styles'

export default function PaymentSummary() {
  const {
    setTotalBillingPrice,
    totalBillingPrice,
    setTotalQuantity,
    setOrderItem,
    orderItem,
  } = useContext(OrdersContext)

  const classes = UseStyle()

  useEffect(() => {
    const totalPrice = orderItem.reduce(
      (sum, object) =>
        sum +
        parseFloat(
          `${object.price * object.quantity}` + `${object?.item?.price || 0}`,
        ),
      0,
    )
    const quantity = orderItem.reduce(
      (sum, object) => sum + parseFloat(object.quantity),
      0,
    )
    setTotalQuantity(quantity)
    setTotalBillingPrice(totalPrice.toFixed(2))
  }, [orderItem])

  return (
    <Card className={classes.maincontainer}>
      <Box className={classes.subContainer}>
        <Typography className={classes.paymentTypography}>
          PAYMENT SUMMARY
        </Typography>
        <Typography className={classes.viewTypography}>View Details</Typography>
      </Box>
      <Divider variant="middle" />
      <Box className={classes.subContainer} my={2}>
        <Typography className={classes.totalTypography}>
          TOTAL PAYMENT
        </Typography>
        <Typography className={classes.totalTypography}>
          MYR {totalBillingPrice}
        </Typography>
      </Box>
    </Card>
  )
}
