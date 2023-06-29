import { Box, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'

import { OrdersContext } from '@/context/orderContext'

import { StyledButton, UseStyle } from './styles'

export default function IncrementInput({ id, quantity }) {
  const { setOrderItem, orderItem } = useContext(OrdersContext)

  const classes = UseStyle()
  useEffect(() => {})
  const handleDecrementClick = () => {
    if (quantity === 0) return
    setOrderItem((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    )
  }

  const handleIncrementClick = () => {
    setOrderItem((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    )
  }

  return (
    <Box className={classes.maincontainer}>
      <StyledButton
        variant="contained"
        className={classes.styledButton}
        onClick={handleDecrementClick}
        disabled={quantity === 0}
      >
        -
      </StyledButton>
      <Typography className={classes.typography}>{quantity}</Typography>
      <StyledButton
        variant="contained"
        onClick={handleIncrementClick}
        className={classes.styledButton}
      >
        +
      </StyledButton>
    </Box>
  )
}
