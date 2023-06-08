import {
  Box,
  Button,
  FormControl,
  InputBase,
  TextField,
  Typography,
} from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Image from 'next/image'
import * as React from 'react'
import { styled } from 'styled-components'

import DoorInSvg from '@/assets/icons/DoorInSvg'
import { theme } from '@/theme'

const StyledInput = styled(InputBase)({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: '0px',
    position: 'relative',
    backgroundColor: '#FCFCFC',
    border: '1px solid #707070',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    color: '#9D9A9A',
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: '#9D9A9A',
      fontWeight: 'bold',
    },
  },
})

const CountryCodeSelect = ({ code, handleChange }) => {
  return (
    <Select
      labelId="demo-customized-select-label"
      id="demo-customized-select"
      value={code}
      onChange={handleChange}
      sx={{
        minWidth: 80,
        '& .MuiInputBase-input': {
          borderTopLeftRadius: '5px !important',
          borderBottomLeftRadius: '5px !important',
        },
      }}
      input={<StyledInput />}
    >
      <MenuItem value={10}>+ 10</MenuItem>
      <MenuItem value={20}>+ 60</MenuItem>
      <MenuItem value={30}>+ 30</MenuItem>
    </Select>
  )
}

export default function LoginInput() {
  const [code, setCode] = React.useState('')
  const handleCountryCodechange = (event) => {
    setCode(event.target.value)
  }
  return (
    <Box
      sx={{
        marginX: (theme) => theme.spacing(10),
        marginTop: (theme) => theme.spacing(2),
      }}
      display="flex"
      flexDirection="column"
      gap="28px"
    >
      <Box display="flex">
        <CountryCodeSelect code={code} handleChange={handleCountryCodechange} />
        <StyledInput
          type="number"
          placeholder="Phone Number"
          fullWidth
          inputProps={{
            style: {
              borderLeft: 'none',
              borderTopRightRadius: '5px',
              borderBottomRightRadius: '5px',
            },
          }}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{ width: '100%', borderRadius: '6px', height: '40px' }}
        >
          <Typography sx={{ mr: '10px' }}>LET'S GO</Typography>
          <DoorInSvg />
        </Button>
      </Box>
    </Box>
  )
}
