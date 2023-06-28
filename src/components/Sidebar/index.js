import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import {
  Avatar,
  Box,
  Button,
  Card,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { useEffect } from 'react'

import { getCategories } from '@/utils/api'

import DoorInSvg from '../../app/assets/icons/DoorInSvg'
import menu from '../../utils/MenuItem.json'
import { UseStyle } from './styles'

export default function Sidebar({ open, onClose }) {
  const [openSubmenu, setOpenSubmenu] = React.useState('')
  const router = useRouter()
  const classes = UseStyle()

  //API for GET Menu

  // useEffect(() => {
  //   getCategories(restaurant_id)
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [])

  const handleClick = (item) => {
    if (item.hasSubMenu && item.id === openSubmenu) setOpenSubmenu('')
    else {
      if (item.hasSubMenu) setOpenSubmenu(item.id)
      router.push(`/menu?category=${item.path}`)
    }
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box className={classes.container}>
        <Avatar className={classes.avatar} />
        <Typography className={classes.guestTypography} gutterBottom>
          GUEST
        </Typography>
      </Box>
      <Divider variant="middle" />
      <List
        className={classes.list}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            className={classes.listSubheader}
          >
            <Typography className={classes.listTypography}>MENU</Typography>
          </ListSubheader>
        }
      >
        {menu.menuItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItemButton
              onClick={() => handleClick(item)}
              className={classes.listItemButton}
            >
              <ListItemText
                primary={
                  <Typography className={classes.listItemText}>
                    {item.name}
                  </Typography>
                }
              />
              {openSubmenu === item.id
                ? item.hasSubMenu && <ExpandLess className={classes.submenu} />
                : item.hasSubMenu && <ExpandMore className={classes.submenu} />}
            </ListItemButton>
            {item.hasSubMenu && openSubmenu === item.id && (
              <Collapse
                in={openSubmenu === item.id}
                timeout="auto"
                unmountOnExit
              >
                {item.SubMenuItems.map((subitem) => (
                  <List component="div" disablePadding key={subitem.id}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText
                        primary={
                          <Typography className={classes.submenuItem}>
                            {subitem.name}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                ))}
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      <Card
        sx={{
          boxShadow: 'inset 0px 3px 3px rgba(0,0,0,0.16 )',
          marginTop: 'auto',
          padding: '1rem',
          textAlign: 'center',
          overflow: 'visible',
        }}
      >
        <Button>
          <Typography sx={{ mr: '10px', fontSize: '11px' }}>Log In</Typography>
          <DoorInSvg selected />
        </Button>
      </Card>
    </Drawer>
  )
}
