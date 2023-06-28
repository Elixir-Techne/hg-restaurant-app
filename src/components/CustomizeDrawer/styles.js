import { makeStyles } from '@mui/styles'

export const UseStyle = makeStyles(() => ({
  drawer: {
    width: '321px',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '95%',
      boxSizing: 'border-box',
      backgroundColor: '#F3F3F5',
      margin: 'auto !important',
      boxShadow: 'none',
      filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
      borderTopLeftRadius: '23px',
      borderTopRightRadius: '23px',
      '@media (max-height:915px)': {
        gap: '6vh',
      },
      '@media (max-height:865px)': {
        gap: '5vh',
      },
      '@media (max-height:815px)': {
        gap: '2.5vh',
      },
      '@media (max-height:715px)': {
        gap: 0,
      },
    },
    '& .MuiModal-backdrop': {
      backgroundColor: 'transparent',
      backdropFilter: 'blur(1px)',
    },
  },
  itemTypography: {
    color: '#373636',
    fontSize: '21px',
  },
  itemPrice: {
    color: '#5D5A5A',
    fontSize: '18px',
  },
  subItemTypography: {
    color: '#015941',
    fontSize: '16px',
  },
  subItemPrice: {
    color: '#015941',
    fontSize: '16px',
    fontStyle: 'bold',
  },
  extraIngradientBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#015941',
    color: 'white',
  },
  checkCircleIcon: {
    marginLeft: '10px',
  },
  extraIngradientTypography: {
    fontSize: '12px',
  },
  arrowDropUpIcon: {
    marginRight: '10px',
  },
  chooseMaxTypography: {
    fontSize: '14px',
    color: '#656565',
    marginLeft: '5px',
  },
  chooseContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  radio: {
    pading: '0 important',
  },
  itemName: {
    color: '#373636',
    fontSize: '14px',
  },
  itemPrice: {
    color: '#5D5A5A',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  Card: {
    boxShadow: 'none',
    padding: '1rem',
    backgroundColor: '#FFFFFF',
  },
  cartButton: {
    borderRadius: '12px',
  },
}))
