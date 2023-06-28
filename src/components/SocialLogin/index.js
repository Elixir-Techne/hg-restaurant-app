import { Box } from '@mui/material'
import { createButton } from 'react-social-login-buttons'

import { UseStyle } from './styles'

export default function SocialLogin({ onClick }) {
  const classes = UseStyle()
  const fbConfig = {
    text: 'SIGN IN WITH FACEBOOK',
    icon: 'facebook',
    iconFormat: (name) => `f`,
    style: {
      background: '#3A549F',
      borderRadius: '6px',
      height: '40px',
      fontSize: '13px',
    },
    activeStyle: {
      background: '#3A549F',
      borderRadius: '6px',
      height: '40px',
      fontSize: '13px',
    },
  }

  const gConfig = {
    text: 'SIGN IN WITH GOOGLE',
    icon: 'Google',
    iconFormat: (name) => `G`,
    style: {
      background: '#FF0000',
      borderRadius: '6px',
      height: '40px',
      fontSize: '13px',
    },
    activeStyle: {
      background: '#FF0000',
      borderRadius: '6px',
      height: '40px',
      fontSize: '13px',
    },
  }

  const MyFacebookLoginButton = createButton(fbConfig)
  const MyGoogleLoginButton = createButton(gConfig)

  return (
    <Box className={classes.maincontainer}>
      <MyFacebookLoginButton onClick={onClick} />
      <MyGoogleLoginButton onClick={onClick} />
    </Box>
  )
}
