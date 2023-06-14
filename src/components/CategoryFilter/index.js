import { Box, Card, Typography } from '@mui/material'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { styled } from 'styled-components'

import { getCategories } from '@/utils/api'

import breakFastPng from '../../../public/assets/icons/breakfast.png'
import menu from '../../utils/MenuItem.json'

const TabGroup = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  borderBottom: '1px solid #70707050',
  '& .MuiTabs-indicator': {
    borderBottom: '5px solid #f3f3f5 !important',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    bottom: '5px',
    zIndex: -1,
  },
  '& .MuiTabs-indicatorSpan': {
    border: '3px solid #067153 ',
    borderRadius: '8px',
    maxWidth: '70%',
    width: '80%',
  },
})

export default function CategoryFilter({ tabs, onTabSelect, value }) {
  const [activeTab, setActiveTab] = useState(1)
  const router = useRouter()

  // API for GET Menu

  // useEffect(() => {
  //   getCategories(restaurant_id)
  //     .then((res) => res)
  //     .catch((err) => console.log(err))
  // }, [])

  useEffect(() => {
    if (value) {
      const activeItem = menu.menuItems.find((item) => item.path === value)
      setActiveTab(activeItem.id)
    }
  }, [value])

  const handleChange = (event, newValue) => {
    const activeItem = menu.menuItems.find((item) => item.id === newValue)
    setActiveTab(newValue)
    router.push(`/menu?category=${activeItem.path}`)
    // onTabSelect(newValue)
  }
  return (
    <Card
      sx={{
        filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
        boxShadow: 'none',
        backgroundColor: '#F3F3F5',
        mb: 4,
      }}
    >
      <TabGroup
        value={activeTab}
        onChange={handleChange}
        scrollButtons="auto"
        variant="scrollable"
      >
        {menu.menuItems.map((item, index) => {
          return (
            <Tab
              key={item.id}
              value={item.id}
              label={
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  height="100%"
                  maxWidth="30%"
                >
                  <Image src={breakFastPng} width="50px" height="50px" alt="" />
                  <Typography
                    sx={{
                      color: '#067153',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      marginBottom: '5px',
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              }
            />
          )
        })}
      </TabGroup>
      {value === 'for-you' && (
        <Box display="flex" gap="20px" mx={4} my={2}>
          <Typography
            sx={{ color: '#707070', fontSize: '11px', fontWeight: 'bold' }}
          >
            Recommended
          </Typography>
          <Typography
            sx={{ color: '#707070', fontSize: '11px', fontWeight: 'bold' }}
          >
            Reorder
          </Typography>
        </Box>
      )}
    </Card>
  )
}
