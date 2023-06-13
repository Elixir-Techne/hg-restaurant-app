'use client'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Checkbox,
  Divider,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { styled } from 'styled-components'

import DoorInSvg from '@/assets/icons/DoorInSvg'
import LoginInput from '@/components/LoginInput'
import SocialLogin from '@/components/SocialLogin'

import LoginPng from '../../assets/icons/login.png'

const StyledCard = styled(Card)({
  filter: 'drop-shadow(0px 6px 3px rgba(0,0,0,0.16 ));',
  background: '#ffffff',
  height: '76px',
  boxShadow: 'none',
  overflow: 'visible',
})

export default function LoginForm() {
  const isMobile = useMediaQuery('(max-width:768px)')
  const router = useRouter()

  const handleLoginClick = () => {
    router.push('/for-you')
  }

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: isMobile ? '100%' : '600px',
          }}
        >
          <StyledCard>
            <CardHeader
              sx={{ padding: '0px' }}
              title={
                <Typography
                  sx={{
                    color: '#9D9A9A',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    wordWrap: 'break-word',
                    textAlignLast: 'center',
                    textAlign: 'center',
                    pt: (theme) => theme.spacing(2.5),
                    px: (theme) => theme.spacing(6),
                  }}
                >
                  Lot P2-08-00, level 2, Pavilion KL, 168, Bukit Bintang St,
                  55100
                </Typography>
              }
            />
          </StyledCard>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginTop: (theme) => theme.spacing(8) }}
          >
            <Image src={LoginPng} alt="" />
          </Box>
          <Box>
            <SocialLogin onClick={handleLoginClick} />
            <Box sx={{ marginTop: (theme) => theme.spacing(8) }}>
              <Divider variant="middle">
                <Typography sx={{ color: '#9D9A9A' }} variant="h6">
                  OR SIGN IN WITH
                </Typography>
              </Divider>
              <LoginInput onClick={handleLoginClick} />
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: (theme) => theme.spacing(8),
              mx: (theme) => theme.spacing(5),
            }}
          >
            <Typography
              sx={{
                wordWrap: 'break-word',
                textAlignLast: 'center',
                textAlign: 'center',
                fontSize: '11.5px',
                color: ' #9d9a9a',
                fontWeight: 'bold',
              }}
            >
              By clicking &apos;Let&apos;s Go&apos;, I agree to TabSquare
              <span style={{ color: '#067153' }}> Term of Use</span> and{' '}
              <span style={{ color: '#067153' }}>
                TabSquare Privacy Policy. Product Images are for illustration
                purposes only.
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: (theme) => theme.spacing(8),
              mx: (theme) => theme.spacing(8),
            }}
            display="flex"
            alignItems="center"
          >
            <Checkbox
              sx={{
                marginRight: (theme) => theme.spacing(1),
              }}
            />
            <Typography
              sx={{
                color: '#9D9A9A',
                fontWeight: 'bold',
                fontSize: '10.5px',
                alignSelf: 'center',
              }}
            >
              I do not wish to receive any marketing or promotional materials.
            </Typography>
          </Box>

          <Card
            sx={{
              boxShadow: 'inset 0px 3px 3px rgba(0,0,0,0.16 )',
              marginTop: 'auto',
              padding: '1rem',
              textAlign: 'center',
              overflow: 'visible',
            }}
          >
            <Button onClick={handleLoginClick}>
              <Typography sx={{ mr: '10px' }}>CONTINUE AS GUEST</Typography>
              <DoorInSvg selected />
            </Button>
          </Card>
        </div>
      </div>
    </>
  )
}
