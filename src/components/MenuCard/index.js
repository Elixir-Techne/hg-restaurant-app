import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useContext, useMemo } from 'react'

import { OrdersContext } from '@/context/orderContext'

import cakePng from '../../../public/assets/icons/cake.png'
import { StyleChip, StyledCard, UseStyle } from './styles'

export default function MenuCard({ onClick, data }) {
  const classes = UseStyle()
  const { search } = useContext(OrdersContext)

  const filteredData = useMemo(
    () =>
      search.length > 0
        ? data.filter((item) => item.name.toLowerCase().includes(search))
        : data,
    [search, data],
  )

  return filteredData?.map((item) => (
    <StyledCard key={item.id}>
      {item.trending && <StyleChip label="Trending #1" />}
      <Image src={cakePng} alt="" className={classes.image} />
      <Box mx={2}>
        <Typography className={classes.itemName}>{item.name}</Typography>
        <Typography className={classes.itemPrice}>MYR {item.price}</Typography>
        <Button
          onClick={() => onClick(item)}
          variant="contained"
          className={classes.addButton}
        >
          Add +
        </Button>
      </Box>
    </StyledCard>
  ))
}
