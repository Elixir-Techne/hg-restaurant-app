'use client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from '@/theme'

import './global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body style={{backgroundColor: '#F3F3F5',}}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
