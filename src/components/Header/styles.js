import { TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from 'styled-components'

export const UseStyle = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginRight: '0.5rem',
  },
  icon: {
    color: '#067153',
  },
}))
export const StyledTextField = styled(TextField)({
  background: 'white',
})
