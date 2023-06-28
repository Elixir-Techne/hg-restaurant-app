import { makeStyles } from '@mui/styles'

import { theme } from '@/theme'

export const UseStyle = makeStyles(() => ({
  maincontainer: {
    gap: '25px',
    display: 'flex',
    flexDirection: 'column',
    marginX: theme.spacing(10),
    marginTop: theme.spacing(8),
  },
}))
