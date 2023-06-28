import { Card } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from 'styled-components'

export const UseStyle = makeStyles(() => ({
  recommanedTitle: {
    color: '#707070',
    fontWeight: 'bold',
  },
  subheaderTitle: {
    color: '#9C9797',
    fontWeight: 'bold',
  },
  subheader: {
    paddingBottom: '0px',
  },
  cardContent: {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    pb: 2,
  },
}))

export const StyledCard = styled(Card)({
  marginTop: '0.5rem',
  background: 'transparent',
  borderTop: '1px solid #70707050',
  boxShadow: 'none',
  borderBottom: '1px solid #70707050',
})
