import { makeStyles } from '@mui/styles'

export const UseStyle = makeStyles(() => ({
  maincontainer: {
    display: 'flex',
    flexDirection: 'column',
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
  },
}))
