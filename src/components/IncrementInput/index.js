import { Box, Typography } from '@mui/material'
import { useContext, useState } from 'react'

import { OrdersContext } from '@/context/orderContext'

import { StyledButton, UseStyle } from './styles'

export default function IncrementInput({ id }) {
  const [itemCount, setItemCount] = useState(1)

  const { setOrderItem, orderItem } = useContext(OrdersContext)

  const classes = UseStyle()

  const handleDecrementClick = () => {
    if (itemCount === 0) return
    else setItemCount(itemCount - 1)
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
    setItemCount(itemCount + 1)
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
        disabled={itemCount === 0}
      >
        -
      </StyledButton>
      <Typography className={classes.typography}>{itemCount}</Typography>
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
