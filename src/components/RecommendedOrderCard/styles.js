import { Card } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from 'styled-components'

export const UseStyle = makeStyles(() => ({
  card: {
    background: '#EDEDED',
    height: '121px',
    boxShadow: 'none',
    filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
    overflowX: 'auto',
  },
  titleTypography: {
    color: '#5D5A5A',
    fontSize: '14px',
  },
  cardHeader: {
    padding: '8px',
  },
  itemName: {
    color: '#000000',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#5D5A5A',
    fontSize: '10px',
  },
  button: {
    height: '19px',
    width: '131px',
    mx: 6,
  },
  buttonTypography: {
    fontSize: '10px',
  },
}))
export const StyledCard = styled(Card)({
  background: '#ffffff',
  boxShadow: 'none',
  borderRadius: '12px',
  minHeight: '71px',
  minWidth: '307px',
  display: 'flex',
})
