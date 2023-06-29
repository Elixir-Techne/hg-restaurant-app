import { makeStyles } from '@mui/styles'

export const UseStyle = makeStyles(() => ({
  maincontainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F3F3F5',
    backgroundImage: `url(assets/icons/bgImage.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  subContainer: {
    height: '50px',
    color: 'white',
    backgroundColor: '#067153',
    textAlign: 'center',
  },
  typography: {
    fontSize: '19x',
    fontStyle: 'bold',
    m: '10px',
  },
  childContainer: {
    width: '100%',
    maxHeight: '100vh',
    overflowY: 'auto',
    backgroundImage: `url(images/bg-image.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflowX: 'hidden',
  },
}))
