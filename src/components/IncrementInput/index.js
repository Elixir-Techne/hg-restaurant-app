import { Box, Button, IconButton, Typography } from '@mui/material'
import { styled } from 'styled-components'

const StyledButton = styled(Button)({
  minWidth: '24px ',
  height: '19px',
  padding: 0,
})

export default function IncrementInput() {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <StyledButton
        variant="contained"
        sx={{ borderTopLeftRadius: '6px', borderBottomLeftRadius: '7px' }}
      >
        -
      </StyledButton>
      <Typography sx={{ margin: '5px', fontWeight: 'bold' }}>1</Typography>
      <StyledButton
        variant="contained"
        sx={{ borderTopRightRadius: '6px', borderBottomRightRadius: '7px' }}
      >
        +
      </StyledButton>
    </Box>
  )
}
