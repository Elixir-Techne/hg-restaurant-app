import { Badge, Card } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from 'styled-components'

import { theme } from '@/theme'

export const UseStyle = makeStyles(() => ({
  arrowBackIosNewIcon: {
    position: 'absolute',
    top: 25,
    left: 5,
  },
  cardHeader: {
    textAlign: 'center',
  },
  textContainer: {
    width: '100%',
    textAlign: 'center',
  },
  textTypography: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  card: {
    boxShadow: 'none',
    padding: '1rem',
    backgroundColor: '#F3F3F5',
  },
  button: {
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  billingPrice: {
    fontSize: '14px',
    marginLeft: '0.5rem',
  },
  checkoutBox: {
    mr: '10px',
  },
  image: {
    height: '157px',
  },
  itemName: {
    color: '#707070',
    fontSize: '11px',
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
  },
  itemPrice: {
    color: '#707070',
    fontSize: '11px',
    fontWeight: 'bold',
    marginTop: theme.spacing(4),
  },
  addButton: {
    height: '22px',
    width: '140px',
    marginTop: theme.spacing(2),
  },
}))

export const StyledCard = styled(Card)({
  height: '82px',
  minWidth: '378px',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  boxShadow: 'none',
  position: 'relative',
})
export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    padding: '0',
    backgroundColor: 'white',
    color: '#035942',
    fontWeight: 'bold',
  },
  '& .MuiSvgIcon-root': {
    color: '#C8C7C8',
  },
}))

export const StyledRecommendedCard = styled(Card)({
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  background: '#f3f2f2',
  height: '76px',
  minWidth: 157,
  height: '259px',
  borderRadius: '12px',
  boxShadow: 'none !important',
  position: 'relative',
})
