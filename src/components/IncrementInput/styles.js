import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from 'styled-components'

export const UseStyle = makeStyles(() => ({
  maincontainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  styledButton: {
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '7px',
  },
  typography: {
    margin: '5px',
    fontWeight: 'bold',
  },
}))

export const StyledButton = styled(Button)({
  minWidth: '24px ',
  height: '19px',
  padding: 0,
})
