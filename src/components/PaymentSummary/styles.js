import { makeStyles } from '@mui/styles'

export const UseStyle = makeStyles(() => ({
  maincontainer: {
    backgroundColor: '#FFFFFF',
    height: '98px',
    boxShadow: 'none',
  },
  subContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mx: 4,
    my: 4,
  },
  paymentTypography: {
    color: '#8A8787',
    fontSize: '14px',
  },
  viewTypography: {
    fontSize: '14px',
  },
  totalTypography: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
}))
