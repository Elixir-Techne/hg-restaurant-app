import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import { Box, IconButton } from '@mui/material'
import Image from 'next/image'
import { useContext, useState } from 'react'

import { OrdersContext } from '@/context/orderContext'

import MobileMenuSvg from '../../../public/assets/icons/feather-menu.svg'
import Sidebar from '../Sidebar'
import { StyledTextField, UseStyle } from './styles'

export default function Header() {
  const { setSearch } = useContext(OrdersContext)

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchLocal, setSearchLocal] = useState('')
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
    setSearch('')
    setSearchLocal('')
  }

  const handleSearchChange = (e) => {
    setSearchLocal(e?.target?.value)
  }

  const handleKeyDown = (e) => {
    if (e?.keyCode === 13) {
      setSearch(searchLocal)
    }
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
            autoFocus
            id="outlined-basic"
            placeholder="Search"
            variant="outlined"
            fullWidth
            value={searchLocal}
            onKeyDown={handleKeyDown}
            onChange={handleSearchChange}
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
          <SearchIcon fontSize="large" className={classes.icon} />
        </IconButton>
      ) : null}
    </Box>
  )
}
