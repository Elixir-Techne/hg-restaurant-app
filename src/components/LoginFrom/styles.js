import { Card } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from 'styled-components'

import { theme } from '@/theme'

export const UseStyle = makeStyles(() => ({
  mainContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    padding: '0px',
  },
  cardHeaderTitle: {
    color: '#9D9A9A',
    fontWeight: 'bold',
    fontSize: '13px',
    wordWrap: 'break-word',
    textAlignLast: 'center',
    textAlign: 'center',
    pt: theme.spacing(2.5),
    px: theme.spacing(6),
  },
  imageBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(8),
  },
  signinBox: {
    marginTop: theme.spacing(8),
  },
  signinTypography: {
    color: '#9D9A9A',
  },
  agreeBox: {
    marginTop: theme.spacing(8),
    mx: theme.spacing(5),
  },
  agreeTypography: {
    wordWrap: 'break-word',
    textAlignLast: 'center',
    textAlign: 'center',
    fontSize: '11.5px',
    color: ' #9d9a9a',
    fontWeight: 'bold',
  },
  spanColor: {
    color: '#067153',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(8),
    mx: theme.spacing(8),
  },
  checkbox: {
    marginRight: theme.spacing(1),
  },
  checkboxTypography: {
    color: '#9D9A9A',
    fontWeight: 'bold',
    fontSize: '10.5px',
    alignSelf: 'center',
  },
  cardContainer: {
    boxShadow: 'inset 0px 3px 3px rgba(0,0,0,0.16 )',
    marginTop: 'auto',
    padding: '1rem',
    textAlign: 'center',
    overflow: 'visible',
  },
  cardTypography: {
    mr: '10px',
  },
}))

export const StyledCard = styled(Card)({
  filter: 'drop-shadow(0px 6px 3px rgba(0,0,0,0.16 ));',
  background: '#ffffff',
  height: '76px',
  boxShadow: 'none',
  overflow: 'visible',
})
