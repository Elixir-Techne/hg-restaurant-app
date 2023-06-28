import { makeStyles } from '@mui/styles'

export const UseStyle = makeStyles(() => ({
  drawer: {
    width: '270px',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '270px',
      boxSizing: 'border-box',
      backgroundColor: '#F3F3F5',
    },
    '& .MuiModal-backdrop': {
      backgroundColor: 'transparent',
      backdropFilter: 'blur(1px)',
    },
  },
  container: {
    mx: 16,
    mt: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  avatar: {
    width: '112px',
    height: '120px',
    border: '2px solid black',
  },
  guestTypography: {
    color: '#999999',
    fontSize: '18px',
  },
  list: {
    width: '270px',
    maxWidth: '270px',
    bgcolor: '#F3F3F5',
    px: '24px',
    overflowY: 'scroll',
    backdropFilter: 'blur',
  },
  listSubheader: {
    bgcolor: '#F3F3F5',
  },
  listTypography: {
    color: '#747272',
    fontSize: '18px',
  },
  listItemButton: {
    py: '1px',
  },
  listItemText: {
    color: '#747272',
    fontSize: '15px',
  },
  submenu: {
    color: '#747272',
  },
  submenuItem: {
    color: '#747272',
    fontSize: '15px',
  },
}))
