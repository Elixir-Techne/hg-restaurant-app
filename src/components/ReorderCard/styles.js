import { Card } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from 'styled-components'

export const UseStyle = makeStyles(() => ({
  title: {
    color: '#707070',
    fontWeight: 'bold',
  },
  subheader: {
    color: '#9C9797',
    fontWeight: 'bold',
  },
  cardHeader: {
    paddingBottom: '0px',
  },
  addButton: {
    padding: '1px',
    height: '50px',
    width: '341px',
  },
  buttonTypography: {
    fontSize: '10px',
    fontWeight: 'bold',
  },
}))

export const StyledCard = styled(Card)({
  background: 'transparent',
  boxShadow: 'none',
})
