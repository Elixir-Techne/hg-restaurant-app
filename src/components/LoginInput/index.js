import { Box, Button, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import * as React from 'react'

import DoorInSvg from '../../app/assets/icons/DoorInSvg'
import { StyledInput, UseStyle } from './styles'

const CountryCodeSelect = ({ code, handleChange }) => {
  const classes = UseStyle()

  return (
    <Select
      labelId="demo-customized-select-label"
      id="demo-customized-select"
      value={code}
      onChange={handleChange}
      className={classes.selectContainer}
      input={<StyledInput />}
    >
      <MenuItem value={10}>+ 10</MenuItem>
      <MenuItem value={20}>+ 60</MenuItem>
      <MenuItem value={30}>+ 30</MenuItem>
    </Select>
  )
}

export default function LoginInput({ onClick }) {
  const [code, setCode] = React.useState('')

  const classes = UseStyle()

  const handleCountryCodechange = (event) => {
    setCode(event.target.value)
  }

  return (
    <Box className={classes.mainContainer}>
      <Box display="flex">
        <CountryCodeSelect code={code} handleChange={handleCountryCodechange} />
        <StyledInput
          type="number"
          placeholder="Phone Number"
          fullWidth
          className={classes.styleInput}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          className={classes.button}
          onClick={onClick}
        >
          <Typography className={classes.buttonTypography}>
            LET&apos;S GO
          </Typography>
          <DoorInSvg />
        </Button>
      </Box>
    </Box>
  )
}
