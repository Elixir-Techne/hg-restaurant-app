import { InputBase } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from 'styled-components'

import { theme } from '@/theme'

export const UseStyle = makeStyles(() => ({
  selectContainer: {
    minWidth: 80,
    '& .MuiInputBase-input': {
      borderTopLeftRadius: '5px !important',
      borderBottomLeftRadius: '5px !important',
    },
  },
  mainContainer: {
    marginX: theme.spacing(10),
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
  },
  styleInput: {
    borderLeft: 'none',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
  },
  button: {
    width: '100%',
    borderRadius: '6px',
    height: '40px',
  },
  buttonTypography: {
    mr: '10px',
  },
}))

export const StyledInput = styled(InputBase)({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: '0px',
    position: 'relative',
    backgroundColor: '#FCFCFC',
    border: '1px solid #707070',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    color: '#9D9A9A',
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: '#9D9A9A',
      fontWeight: 'bold',
    },
  },
})
