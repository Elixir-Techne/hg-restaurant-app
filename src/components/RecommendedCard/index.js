import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { styled } from 'styled-components'

import MenuCard from '../MenuCard'

const StyledCard = styled(Card)({
  background: 'transparent',
  borderTop: '1px solid #70707050',
  boxShadow: 'none',
  borderBottom: '1px solid #70707050',
})

export default function RecommendedCard() {
  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography
            variant="h6"
            sx={{ color: '#707070', fontWeight: 'bold' }}
          >
            RECOMMENDED FOR YOU
          </Typography>
        }
        subheader={
          <Typography
            variant="caption"
            sx={{ color: '#9C9797', fontWeight: 'bold' }}
          >
            Curated because you are unique
          </Typography>
        }
        sx={{ paddingBottom: '0px' }}
      />
      <CardContent>
        <Box display="flex" gap="10px" sx={{ overflowX: 'auto' }} pb={2}>
          <MenuCard />
        </Box>
      </CardContent>
    </StyledCard>
  )
}
