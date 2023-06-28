import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton, TextField } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { styled } from 'styled-components'

import MobileMenuSvg from '../../../public/assets/icons/feather-menu.svg'
import SearchSvg from '../../../public/assets/icons/search.svg'
import Sidebar from '../Sidebar'
import { StyledTextField, UseStyle } from './styles'

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchToggle, setSearchToggle] = useState(false)
  const classes = UseStyle()
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
    <Box my={4} className={classes.mainContainer}>
      <IconButton onClick={handleDrawerToggle}>
        <Image src={MobileMenuSvg} alt="" />
      </IconButton>
      {drawerOpen && <Sidebar open={drawerOpen} onClose={handleDrawerToggle} />}
      {searchToggle ? (
        <Box className={classes.subContainer}>
          <StyledTextField
            id="outlined-basic"
            placeholder="Search"
            variant="outlined"
            fullWidth
          />
          <CloseIcon
            fontSize="large"
            className={classes.icon}
            onClick={handleCancel}
          />
        </Box>
      ) : null}
      {!searchToggle ? (
        <IconButton onClick={handleSearch}>
          {/* <Image src={<SearchIcon />} alt="" /> */}
          <SearchIcon fontSize="large" className={classes.icon} />
        </IconButton>
      ) : null}
    </Box>
  )
}
