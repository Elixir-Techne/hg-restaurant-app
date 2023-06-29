'use client'

import { Box, Button, Card, CardHeader, Typography } from '@mui/material'
import Image from 'next/image'
import { useContext } from 'react'

import { OrdersContext } from '@/context/orderContext'

import cakePng from '../../../public/assets/icons/cake.png'
import { StyledCard, UseStyle } from './styles'

export default function RecommendedOrderCard({ data }) {
  const classes = UseStyle()

  const { orderItem, setOrderItem, handleAddOrderItem } =
    useContext(OrdersContext)

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography className={classes.titleTypography}>
            WE ALSO RECOMMEND THESE
          </Typography>
        }
        className={classes.cardHeader}
      />
      <Box mx={4} display="flex" gap="10px">
        {data.map((item) => (
          <StyledCard key={item.id}>
            <Image src={cakePng} alt="" width={87} height={71} />
            <Box display="flex" flexDirection="column" mx={4} my={2}>
              <Box>
                <Typography className={classes.itemName}>
                  {item.name}
                </Typography>
                <Typography className={classes.itemPrice}>
                  MYR {item.price}
                </Typography>
              </Box>
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => handleAddOrderItem(item)}
              >
                <Typography className={classes.buttonTypography}>
                  Add +
                </Typography>
              </Button>
            </Box>
          </StyledCard>
        ))}
      </Box>
    </Card>
  )
}
