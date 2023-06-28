'use client'

import {
  Box,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Divider,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { styled } from 'styled-components'

import LoginInput from '@/components/LoginInput'
import SocialLogin from '@/components/SocialLogin'

import LoginPng from '../../../public/assets/icons/login.png'
import DoorInSvg from '../../app/assets/icons/DoorInSvg'
import { StyledCard, UseStyle } from './styles'

export default function LoginForm() {
  const isMobile = useMediaQuery('(max-width:768px)')
  const router = useRouter()
  const classes = UseStyle()
  const handleLoginClick = () => {
    router.push('/menu?category=for-you')
  }

  return (
    <>
      <Box className={classes.mainContainer}>
        <Box
          className={classes.subContainer}
          sx={{
            maxWidth: isMobile ? '100%' : '600px',
          }}
        >
          <StyledCard>
            <CardHeader
              className={classes.cardHeader}
              title={
                <Typography className={classes.cardHeaderTitle}>
                  Lot P2-08-00, level 2, Pavilion KL, 168, Bukit Bintang St,
                  55100
                </Typography>
              }
            />
          </StyledCard>
          <Box className={classes.imageBox}>
            <Image src={LoginPng} alt="" />
          </Box>
          <Box>
            <SocialLogin onClick={handleLoginClick} />
            <Box className={classes.signinBox}>
              <Divider variant="middle">
                <Typography className={classes.signinTypography} variant="h6">
                  OR SIGN IN WITH
                </Typography>
              </Divider>
              <LoginInput onClick={handleLoginClick} />
            </Box>
          </Box>
          <Box className={classes.agreeBox}>
            <Typography className={classes.agreeTypography}>
              By clicking &apos;Let&apos;s Go&apos;, I agree to TabSquare
              <span className={classes.spanColor}> Term of Use</span> and{' '}
              <span className={classes.spanColor}>
                TabSquare Privacy Policy. Product Images are for illustration
                purposes only.
              </span>
            </Typography>
          </Box>
          <Box className={classes.checkboxContainer}>
            <Checkbox className={classes.checkbox} />
            <Typography className={classes.checkboxTypography}>
              I do not wish to receive any marketing or promotional materials.
            </Typography>
          </Box>

          <Card className={classes.cardContainer}>
            <Button onClick={handleLoginClick}>
              <Typography className={classes.cardTypography}>
                CONTINUE AS GUEST
              </Typography>
              <DoorInSvg selected />
            </Button>
          </Card>
        </Box>
      </Box>
    </>
  )
}
