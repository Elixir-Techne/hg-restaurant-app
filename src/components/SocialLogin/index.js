import { Box } from '@mui/material'
import { createButton } from 'react-social-login-buttons'

export default function SocialLogin({ tabs, onTabSelect }) {
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
    <Box
      gap="25px"
      display="flex"
      flexDirection="column"
      sx={{
        marginX: (theme) => theme.spacing(10),
        marginTop: (theme) => theme.spacing(8),
      }}
    >
      <MyFacebookLoginButton />
      <MyGoogleLoginButton />
    </Box>
  )
}
