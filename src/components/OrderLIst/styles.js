import { makeStyles } from '@mui/styles'

export const UseStyle = makeStyles(() => ({
  orderCard: {
    color: '#8A8787',
    fontSize: '18px',
  },
  orderSummary: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemLabel: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  itemName: {
    color: '#8A8787',
    fontSize: '18px',
    width: '100%',
  },
  incremenetBox: {
    width: '20%',
  },
  priceBox: {
    width: '30%',
  },
  priceTypography: {
    color: '#5D5A5A',
    textAlign: 'end',
  },
  regular: {
    color: '#8A8787',
    fontSize: '18px',
  },
  customize: {
    color: '#015941',
    fontSize: '18px',
  },
}))
