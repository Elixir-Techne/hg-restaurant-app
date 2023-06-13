'use client'

import { Box, Typography, useMediaQuery } from '@mui/material'

import Header from '@/components/Header'

export default function MenuLayout({ children }) {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        height="50px"
        sx={{ color: 'white', backgroundColor: '#067153', textAlign: 'center' }}
      >
        <Typography sx={{ fontSize: '19x', fontStyle: 'bold', m: '10px' }}>
          TABLE 3
        </Typography>
      </Box>
      <Header />
      <div
        style={{
          width: '100%',
          maxHeight: '100vh',
          overflowY: 'auto',
          backgroundImage: `url(images/bg-image.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {children}
      </div>
    </Box>
  )
}
