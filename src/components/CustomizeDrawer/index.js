import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Box, Button, Card, Drawer, Radio, Typography } from '@mui/material'
import { useState } from 'react'

const data = [
  { id: 1, name: ' Caesar Salad [Smoked Salmon]', price: '+ MYR 30.19' },
  { id: 2, name: ' Caesar Salad [Chicken]', price: '+ MYR 25.81' },
  { id: 3, name: ' Caesar Salad [Beef]', price: '+ MYR 25.00' },
]

export default function CustomizeDrawer({ open, onClose, onClick }) {
  const [selectedValue, setSelectedValue] = useState(1)
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const controlProps = (item) => ({
    checked: selectedValue == item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  })
  return (
    <Drawer
      sx={{
        width: '321px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '95%',
          boxSizing: 'border-box',
          backgroundColor: '#F3F3F5',
          margin: 'auto !important',
          boxShadow: 'none',
          filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
          borderTopLeftRadius: '23px',
          borderTopRightRadius: '23px',
          '@media (max-height:915px)': {
            gap: '6vh',
          },
          '@media (max-height:865px)': {
            gap: '5vh',
          },
          '@media (max-height:815px)': {
            gap: '2.5vh',
          },
          '@media (max-height:715px)': {
            gap: 0,
          },
        },
        '& .MuiModal-backdrop': {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(1px)',
        },
      }}
      variant="temporary"
      anchor="bottom"
      open={open}
      onClose={onClose}
    >
      <Box mx={4} my={4}>
        <Typography sx={{ color: '#373636', fontSize: '21px' }}>
          Gourmet Pie
        </Typography>
        <Typography sx={{ color: '#5D5A5A', fontSize: '18px' }}>
          MYR 33.96
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Box display="flex">
            <FiberManualRecordIcon color="primary" />
            <Typography sx={{ color: '#015941', fontSize: '16px' }}>
              Chicken
            </Typography>
          </Box>
          <Typography
            sx={{ color: '#015941', fontSize: '16px', fontStyle: 'bold' }}
          >
            MYR 33.96
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ backgroundColor: '#015941', color: 'white' }}
      >
        <CheckCircleIcon sx={{ marginLeft: '10px' }} />
        <Typography sx={{ fontSize: '12px' }}>
          Would you like to add on Caesar Salad?
        </Typography>
        <ArrowDropUpIcon sx={{ marginRight: '10px' }} />
      </Box>
      <Box mx={2} mt={4}>
        <Typography
          sx={{ fontSize: '14px', color: '#656565', marginLeft: '5px' }}
        >
          Choose max 1
        </Typography>
        {data.map((item) => (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            key={item.id}
          >
            <Box display="flex" alignItems="center">
              <Radio
                size="small"
                {...controlProps(item.id)}
                sx={{ pading: '0 important' }}
              />
              <Typography sx={{ color: '#373636', fontSize: '14px' }}>
                {item.name}
              </Typography>
            </Box>
            <Typography
              sx={{ color: '#5D5A5A', fontSize: '12px', fontWeight: 'bold' }}
            >
              {item.price}
            </Typography>
          </Box>
        ))}
      </Box>
      <Card
        sx={{
          boxShadow: 'none',
          padding: '1rem',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: '12px' }}
          onClick={onClick}
        >
          <Typography>ADD +</Typography>
        </Button>
      </Card>
    </Drawer>
  )
}
