import { Box, Button, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import { styled } from 'styled-components'

const StyledButton = styled(Button)({
  minWidth: '24px ',
  height: '19px',
  padding: 0,
})

export default function IncrementInput() {
  const [itemCount, setItemCount] = useState(1)

  const handleDecrementClick = () => {
    if (itemCount === 0) return
    else setItemCount(itemCount - 1)
  }

  const handleIncrementClick = () => {
    setItemCount(itemCount + 1)
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <StyledButton
        variant="contained"
        sx={{ borderTopLeftRadius: '6px', borderBottomLeftRadius: '7px' }}
        onClick={handleDecrementClick}
        disabled={itemCount === 0}
      >
        -
      </StyledButton>
      <Typography sx={{ margin: '5px', fontWeight: 'bold' }}>
        {itemCount}
      </Typography>
      <StyledButton
        variant="contained"
        onClick={handleIncrementClick}
        sx={{ borderTopRightRadius: '6px', borderBottomRightRadius: '7px' }}
      >
        +
      </StyledButton>
    </Box>
  )
}
