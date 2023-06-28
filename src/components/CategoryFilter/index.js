import { Box, Card, Typography } from '@mui/material'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useEffect } from 'react'

import { getCategories } from '@/utils/api'

import breakFastPng from '../../../public/assets/icons/breakfast.png'
import menu from '../../utils/MenuItem.json'
import { TabGroup, UseStyle } from './styles'

export default function CategoryFilter({ tabs, onTabSelect, value }) {
  const [activeTab, setActiveTab] = useState(1)
  const router = useRouter()
  const classes = UseStyle()

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
    <Card className={classes.mainContainer}>
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
                <Box className={classes.tabBox}>
                  <Image src={breakFastPng} width="50px" height="50px" alt="" />
                  <Typography className={classes.tabTypography}>
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
          <Typography className={classes.recommenedTypography}>
            Recommended
          </Typography>
          <Typography className={classes.reorderTypography}>Reorder</Typography>
        </Box>
      )}
    </Card>
  )
}
