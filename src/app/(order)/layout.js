'use client'

import { Box } from '@mui/material'

import '../global.css'

export default function OrderLayout({ children }) {
  return (
    <Box display="flex" flexDirection="column">
      <div className="subContainer">{children}</div>
    </Box>
  )
}
