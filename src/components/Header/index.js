import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react'

import MobileMenuSvg from '../../../public/assets/icons/feather-menu.svg'
import SearchSvg from '../../../public/assets/icons/search.svg'
import Sidebar from '../Sidebar';


export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" my={4}>
      <IconButton onClick={handleDrawerToggle}>
        <Image src={MobileMenuSvg} alt="" />
      </IconButton>
      {drawerOpen && <Sidebar open={drawerOpen} onClose={handleDrawerToggle} />}
      <IconButton>
        <Image src={SearchSvg} alt="" />
      </IconButton>
    </Box>
  )
}