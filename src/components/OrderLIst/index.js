import { Box, Typography } from '@mui/material'

import IncrementInput from '../IncrementInput'

export default function OrderList({ orderSummary, setOrderSummary, id }) {
  return (
    <>
      <Box mx={4} my={4}>
        <Typography sx={{ color: '#8A8787', fontSize: '18px' }}>
          ORDER CART
        </Typography>
        {orderSummary.map((item) => {
          return (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              key={item.id}
            >
              <Typography sx={{ color: '#8A8787', fontSize: '18px' }}>
                {item.name}
              </Typography>
              <IncrementInput
                orderSummary={orderSummary}
                setOrderSummary={setOrderSummary}
                id={item.id}
              />
              <Typography sx={{ color: '#5D5A5A' }}>
                MYR {(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>
          )
        })}
        <Typography sx={{ color: '#8A8787', fontSize: '18px' }}>
          Regular
        </Typography>
        <Typography sx={{ color: '#015941', fontSize: '18px' }}>
          Customize
        </Typography>
      </Box>
    </>
  )
}
