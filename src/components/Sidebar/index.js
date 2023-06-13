import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Avatar, Box, Button, Card, Collapse, Divider, Drawer, List, ListItemButton, ListItemText, ListSubheader, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useEffect } from 'react'

import { getCategories } from '@/utils/api'

import DoorInSvg from '../../../public/assets/icons/DoorInSvg'
import menu from '../../utils/MenuItem.json';


export default function Sidebar({ open, onClose }) {
  const [openSubmenu, setOpenSubmenu] = React.useState('')
  const router = useRouter()

  //API for GET Menu

  // useEffect(() => {
  //   getCategories(restaurant_id)
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [])

  const handleClick = (item) => {
    if (item.hasSubMenu && item.id === openSubmenu) setOpenSubmenu('')
    else if (item.hasSubMenu) {
      setOpenSubmenu(item.id)
      router.push(`/${item.path}`)
    } else {
      router.push(`/${item.path}`)
    }
  }

  return (
    <Drawer
      sx={{
        width: '270px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '270px',
          boxSizing: 'border-box',
          backgroundColor: '#F3F3F5',
        },
        '& .MuiModal-backdrop': {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(1px)',
        },
      }}
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box
        mx={16}
        mt={8}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="8px"
      >
        <Avatar
          sx={{ width: '112px', height: '120px', border: '2px solid black' }}
        />
        <Typography sx={{ color: '#999999', fontSize: '18px' }} gutterBottom>
          GUEST
        </Typography>
      </Box>
      <Divider variant="middle" />
      <List
        sx={{
          width: '270px',
          maxWidth: '270px',
          bgcolor: '#F3F3F5',
          px: '24px',
          overflowY: 'scroll',
          backdropFilter: 'blur',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ bgcolor: '#F3F3F5' }}
          >
            <Typography sx={{ color: '#747272', fontSize: '18px' }}>
              MENU
            </Typography>
          </ListSubheader>
        }
      >
        {menu.menuItems.map((item) => (
          <>
            <ListItemButton
              onClick={() => handleClick(item)}
              key={item.id}
              sx={{ py: '1px' }}
            >
              <ListItemText
                primary={
                  <Typography sx={{ color: '#747272', fontSize: '15px' }}>
                    {item.name}
                  </Typography>
                }
              />
              {openSubmenu === item.id
                ? item.hasSubMenu && <ExpandLess sx={{ color: '#747272' }} />
                : item.hasSubMenu && <ExpandMore sx={{ color: '#747272' }} />}
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
                          <Typography
                            sx={{ color: '#747272', fontSize: '15px' }}
                          >
                            {subitem.name}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                ))}
              </Collapse>
            )}
          </>
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