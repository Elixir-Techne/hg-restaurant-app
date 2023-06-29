'use client'

import { Box, Typography } from '@mui/material'

import Header from '@/components/Header'

import { UseStyle } from './styles'

export default function MenuLayout({ children }) {
  const classes = UseStyle()

  return (
    <Box
      className={classes.maincontainer}
      style={{
        backgroundColor: '#F3F3F5',
        backgroundImage: `url(assets/icons/bgImage.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      height="100%"
    >
      <Box className={classes.subContainer}>
        <Typography className={classes.typography}>TABLE 3</Typography>
      </Box>
      <Header />
      <Box className={classes.childContainer}>{children}</Box>
    </Box>
  )
}
