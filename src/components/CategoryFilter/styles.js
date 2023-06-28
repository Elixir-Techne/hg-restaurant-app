import { Tabs } from '@mui/material'
import { styled } from 'styled-components'

const { makeStyles } = require('@mui/styles')

export const UseStyle = makeStyles(() => ({
  mainContainer: {
    filter: 'drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))',
    boxShadow: 'none',
    backgroundColor: '#F3F3F5',
    mb: 4,
  },
  tabBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    maxWidth: '30%',
  },
  tabTypography: {
    color: '#067153',
    fontSize: '10px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  recommenedTypography: {
    color: '#707070',
    fontSize: '11px',
    fontWeight: 'bold',
  },
  reorderTypography: {
    color: '#707070',
    fontSize: '11px',
    fontWeight: 'bold',
  },
}))

export const TabGroup = styled((props) => (
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
