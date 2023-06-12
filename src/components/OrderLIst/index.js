import { Box, Typography } from '@mui/material'

import IncrementInput from '../IncrementInput'

export default function OrderList() {
  return (
    <Box mx={4} my={4}>
      <Typography sx={{ color: '#8A8787', fontSize: '18px' }}>
        ORDER CART
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography sx={{ color: '#8A8787', fontSize: '18px' }}>
          Heavenly Scone
        </Typography>
        <IncrementInput />
        <Typography sx={{ color: '#5D5A5A' }}>MYR 16.51</Typography>
      </Box>
      <Typography sx={{ color: '#8A8787', fontSize: '18px' }}>
        Regular
      </Typography>
      <Typography sx={{ color: '#015941', fontSize: '18px' }}>
        Customize
      </Typography>
    </Box>
  )
}
