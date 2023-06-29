import { Box, Typography } from '@mui/material'
import { useContext } from 'react'

import { OrdersContext } from '@/context/orderContext'

import IncrementInput from '../IncrementInput'
import { UseStyle } from './styles'

export default function OrderList() {
  const { orderItem } = useContext(OrdersContext)

  const classes = UseStyle()

  return (
    <>
      <Box mx={4} my={4} p={2}>
        <Typography className={classes.orderCard}>ORDER CART</Typography>
        {orderItem
          ?.filter((el) => el?.quantity !== 0)
          ?.map((item) => {
            return (
              <Box className={classes.orderSummary} key={item?.id}>
                <Box className={classes.itemLabel}>
                  <Typography className={classes.itemName}>
                    {item?.name}
                  </Typography>
                </Box>
                <Box className={classes.incremenetBox}>
                  <IncrementInput id={item?.id} quantity={item.quantity} />
                </Box>
                <Box className={classes.priceBox}>
                  <Typography className={classes.priceTypography}>
                    MYR {(item?.price * item?.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        <Typography className={classes.regular}>Regular</Typography>
        <Typography className={classes.customize}>Customize</Typography>
      </Box>
    </>
  )
}
