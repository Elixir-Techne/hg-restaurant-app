import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton, TextField } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { styled } from 'styled-components'

import MobileMenuSvg from '../../../public/assets/icons/feather-menu.svg'
import SearchSvg from '../../../public/assets/icons/search.svg'
import Sidebar from '../Sidebar'

const StyledTextField = styled(TextField)({
  background: 'white',
})
export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchToggle, setSearchToggle] = useState(false)
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }
  const handleSearch = () => {
    setSearchToggle(true)
  }
  const handleCancel = () => {
    setSearchToggle(false)
  }
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my={4}
    >
      <IconButton onClick={handleDrawerToggle}>
        <Image src={MobileMenuSvg} alt="" />
      </IconButton>
      {drawerOpen && <Sidebar open={drawerOpen} onClose={handleDrawerToggle} />}
      {searchToggle ? (
        <Box
          display="flex"
          alignItems="center"
          sx={{ width: '100%', marginRight: '0.5rem' }}
        >
          <StyledTextField
            id="outlined-basic"
            placeholder="Search"
            variant="outlined"
            fullWidth
          />
          <CloseIcon
            fontSize="large"
            style={{ color: '#067153' }}
            onClick={handleCancel}
          />
        </Box>
      ) : null}
      {!searchToggle ? (
        <IconButton onClick={handleSearch}>
          {/* <Image src={<SearchIcon />} alt="" /> */}
          <SearchIcon fontSize="large" style={{ color: '#067153' }} />
        </IconButton>
      ) : null}
    </Box>
  )
}
