import { Button, CardContent, CardHeader, Typography } from '@mui/material'

import { StyledCard, UseStyle } from './styles'

export default function ReorderCard() {
  const classes = UseStyle()

  return (
    <StyledCard>
      <CardHeader
        title={
          <Typography variant="h6" className={classes.title}>
            REORDERED
          </Typography>
        }
        subheader={
          <Typography variant="caption" className={classes.subheader}>
            Based on what you ordered last time
          </Typography>
        }
        className={classes.cardHeader}
      />
      <CardContent>
        <Button variant="contained" className={classes.addButton}>
          <Typography className={classes.buttonTypography}>
            To reorder from your history, enter your mobile number here
          </Typography>
        </Button>
      </CardContent>
    </StyledCard>
  )
}
