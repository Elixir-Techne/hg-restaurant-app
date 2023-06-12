import { Box, Card, Divider, Typography } from '@mui/material'

export default function PaymentSummary() {
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
          MYR 15.30
        </Typography>
      </Box>
    </Card>
  )
}
