import { Box, Button, Card, Chip, Typography } from '@mui/material';
import Image from 'next/image';
import { styled } from 'styled-components'

import cakePng from '../../../public/assets/icons/cake.png'


const StyledCard = styled(Card)({
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  background: '#f3f2f2',
  height: '76px',
  minWidth: 157,
  height: '259px',
  borderRadius: '12px',
  boxShadow: 'none !important',
  position: 'relative',
})

const StyleChip = styled(Chip)({
  backgroundColor: '#F3B113',
  color: '#FFF',
  position: 'absolute',
  top: 15,
  left: -5,
  fontWeight: 600,
  borderTopLeftRadius: '0',
  borderBottomLeftRadius: '0',
})

const data = [
  {
    id: 1,
    name: 'Egg Hollandaise',
    price: ' MYR 22.64',
    trending: false,
    customize: false,
  },
  {
    id: 2,
    name: 'Egg Hollandaise',
    price: ' MYR 22.64',
    trending: true,
    customize: true,
  },
  {
    id: 3,
    name: 'Egg Hollandaise',
    price: ' MYR 22.64',
    trending: false,
    customize: false,
  },
  {
    id: 4,
    name: 'Egg Hollandaise',
    price: ' MYR 22.64',
    trending: false,
    customize: false,
  },
  {
    id: 5,
    name: 'Egg Hollandaise',
    price: ' MYR 22.64',
    trending: true,
    customize: true,
  },
]

export default function MenuCard({ onClick }) {
  return data.map((item) => (
    <StyledCard key={item.id}>
      {item.trending && <StyleChip label="Trending #1" />}
      <Image src={cakePng} alt="" style={{ height: '157px' }} />
      <Box mx={2}>
        <Typography
          sx={{
            color: '#707070',
            fontSize: '11px',
            fontWeight: 'bold',
            marginTop: (theme) => theme.spacing(2),
          }}
        >
          {item.name}
        </Typography>
        <Typography
          sx={{
            color: '#707070',
            fontSize: '11px',
            fontWeight: 'bold',
            marginTop: (theme) => theme.spacing(4),
          }}
        >
          {item.price}
        </Typography>
        <Button
          onClick={() => onClick(item)}
          variant="contained"
          sx={{
            height: '22px',
            width: '140px',
            marginTop: (theme) => theme.spacing(2),
          }}
        >
          Add +
        </Button>
      </Box>
    </StyledCard>
  ))
}