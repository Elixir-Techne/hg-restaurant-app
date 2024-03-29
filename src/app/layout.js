'use client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from '@/theme'

import { OrdersProvider } from '../context/orderContext'
import './global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          <OrdersProvider>{children}</OrdersProvider>
        </body>
      </ThemeProvider>
    </html>
  )
}
