'use client';

import { Box, Button, Card, CardHeader, Typography } from '@mui/material'
import Image from 'next/image'
import { styled } from 'styled-components'

import cakePng from '../../assets/icons/cake.png'

const StyledCard = styled(Card)({
  background: '#ffffff',
  boxShadow: 'none',
  borderRadius: '12px',
  minHeight: '71px',
  minWidth: '307px',
  display: 'flex',
})

const data = [
  {
    id: 1,
    name: ' Chocolate Shake',
    price: ' MYR 16.51',
  },
  {
    id: 2,
    name: ' Chocolate Shake',
    price: ' MYR 16.51',
  },
  {
    id: 3,
    name: ' Chocolate Shake',
    price: ' MYR 16.51',
  },
]

export default function RecommendedOrderCard() {
  return (
    <Card
      sx={{
        background: '#EDEDED',
        height: '121px',
        boxShadow: 'none',
        filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
      }}
    >
      <CardHeader
        title={
          <Typography sx={{ color: '#5D5A5A', fontSize: '14px' }}>
            WE ALSO RECOMMEND THESE
          </Typography>
        }
        sx={{ padding: '8px' }}
      />
      <Box mx={4} sx={{ overflowX: 'auto' }} display="flex" gap="10px">
        {data.map((item) => (
          <StyledCard key={item.id}>
            <Image
              src={cakePng}
              alt=""
              width={87}
              height={71}
              // style={{ height: '71px !important', width: '87px !important' }}
            />
            <Box display="flex" flexDirection="column" mx={4} my={2}>
              <Box>
                <Typography
                  sx={{
                    color: '#000000',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  {item.name}
                </Typography>
                <Typography sx={{ color: '#5D5A5A', fontSize: '10px' }}>
                  {item.price}
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{ height: '19px', width: '131px', mx: 6 }}
              >
                <Typography sx={{ fontSize: '10px' }}>Add +</Typography>
              </Button>
            </Box>
          </StyledCard>
        ))}
      </Box>
    </Card>
  )
}