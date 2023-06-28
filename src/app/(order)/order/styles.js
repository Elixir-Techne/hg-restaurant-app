import { Card } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from 'styled-components'

export const UseStyle = makeStyles(() => ({
  arrowBackIosNewIcon: {
    position: 'absolute',
    top: 25,
    left: 5,
  },
  cardHeader: {
    textAlign: 'center',
  },
  subheader: {
    color: '#5D5A5A',
    fontStyle: 'bold',
  },
  card: {
    boxShadow: 'none',
    padding: '1rem',
    backgroundColor: '#F3F3F5',
  },
  button: {
    borderRadius: '12px',
  },
  buttontypography: {
    mr: '10px',
  },
}))

export const StyledCard = styled(Card)({
  height: '82px',
  minWidth: '378px',
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  boxShadow: 'none',
  position: 'relative',
})
