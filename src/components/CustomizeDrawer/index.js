import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Box, Button, Card, Drawer, Radio, Typography } from '@mui/material'
import { useContext, useState } from 'react'

import { OrdersContext } from '@/context/orderContext'

import { UseStyle } from './styles'

export default function CustomizeDrawer({
  open,
  onClose,
  onClick,
  currentItem,
}) {
  const { trendingData } = useContext(OrdersContext)
  const [selectedValue, setSelectedValue] = useState(trendingData[0])
  const classes = UseStyle()
  const handleChange = (event) => {
    const addExtra = trendingData?.find((el) => el.id == event.target.value)
    setSelectedValue(addExtra)
  }

  const controlProps = (item) => ({
    checked: selectedValue.id == item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  })

  return (
    <Drawer
      className={classes.drawer}
      variant="temporary"
      anchor="bottom"
      open={open}
      onClose={onClose}
    >
      <Box mx={4} my={4}>
        <Typography className={classes.itemTypography}>
          {currentItem.name}
        </Typography>
        <Typography className={classes.itemPrice}>
          MYR {currentItem.price}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
        >
          <Box display="flex">
            <FiberManualRecordIcon color="primary" />
            <Typography className={classes.subItemTypography}>
              {selectedValue.name}
            </Typography>
          </Box>
          <Typography className={classes.subItemPrice}>
            MYR {selectedValue.price}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.extraIngradientBox}>
        <CheckCircleIcon className={classes.checkCircleIcon} />
        <Typography className={classes.extraIngradientTypography}>
          Would you like to add on Caesar Salad?
        </Typography>
        <ArrowDropUpIcon className={classes.arrowDropUpIcon} />
      </Box>
      <Box mx={2} mt={4}>
        <Typography className={classes.chooseMaxTypography}>
          Choose max 1
        </Typography>
        {trendingData?.map((item) => (
          <Box className={classes.chooseContainer} key={item.id}>
            <Box display="flex" alignItems="center">
              <Radio
                size="small"
                {...controlProps(item.id)}
                className={classes.radiocontrolProps}
                onChange={handleChange}
              />
              <Typography className={classes.itemName}>{item.name}</Typography>
            </Box>
            <Typography className={classes.itemPrice}>
              + MYR {item.price}
            </Typography>
          </Box>
        ))}
      </Box>
      <Card className={classes.Card}>
        <Button
          variant="contained"
          fullWidth
          className={classes.cartButton}
          onClick={(e) => onClick(e, selectedValue)}
        >
          <Typography>ADD +</Typography>
        </Button>
      </Card>
    </Drawer>
  )
}
