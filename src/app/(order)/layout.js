'use client'

import { Box } from '@mui/material'

export default function OrderLayout({ children }) {
  return (
    <Box display="flex" flexDirection="column">
      <div
        style={{
          width: '100%',
          height: '100vh',
        }}
      >
        {children}
      </div>
    </Box>
  )
}
