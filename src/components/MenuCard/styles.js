import { Card, Chip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from 'styled-components'

import { theme } from '@/theme'

export const UseStyle = makeStyles(() => ({
  image: {
    height: '157px',
  },
  itemName: {
    color: '#707070',
    fontSize: '11px',
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
  },
  itemPrice: {
    color: '#707070',
    fontSize: '11px',
    fontWeight: 'bold',
    marginTop: theme.spacing(4),
  },
  addButton: {
    height: '22px',
    width: '140px',
    marginTop: theme.spacing(2),
  },
}))

export const StyledCard = styled(Card)({
  filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
  background: '#f3f2f2',
  height: '76px',
  minWidth: 157,
  height: '259px',
  borderRadius: '12px',
  boxShadow: 'none !important',
  position: 'relative',
})

export const StyleChip = styled(Chip)({
  backgroundColor: '#F3B113',
  color: '#FFF',
  position: 'absolute',
  top: 15,
  left: -5,
  fontWeight: 600,
  borderTopLeftRadius: '0',
  borderBottomLeftRadius: '0',
})
