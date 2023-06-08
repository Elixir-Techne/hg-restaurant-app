import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import { styled } from 'styled-components'

const StyledCard = styled(Card)({
  background: 'transparent',
  boxShadow: 'none',
})

export default function ReorderCard() {
  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography
            variant="h6"
            sx={{ color: '#707070', fontWeight: 'bold' }}
          >
            REORDED
          </Typography>
        }
        subheader={
          <Typography
            variant="caption"
            sx={{ color: '#9C9797', fontWeight: 'bold' }}
          >
            Based on what you ordered last time
          </Typography>
        }
        sx={{ paddingBottom: '0px' }}
      />
      <CardContent>
        <Button
          variant="contained"
          sx={{ padding: '1px', height: '50px', width: '341px' }}
        >
          <Typography sx={{ fontSize: '10px', fontWeight: 'bold' }}>
            To reorder from your history, enter your mobile number here
          </Typography>
        </Button>
      </CardContent>
    </StyledCard>
  )
}
