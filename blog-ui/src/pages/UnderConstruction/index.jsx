import React from 'react'
import { Box, Typography } from '@mui/material'
import './UnderConstruction.css'
import underConstructionImg from '../../assets/under-construction.jpg'

const UnderConstruction = () => {
  return (
    <Box className="uc-container">
      <img
        src={underConstructionImg}
        alt="Under Construction"
        className="uc-image"
      />

      <Typography variant="h4" className="uc-title">
        We are Under Maintenance.
      </Typography>

      <Typography variant="body1" className="uc-subtitle">
        We’ll be back soon!
      </Typography>
    </Box>
  )
}

export default UnderConstruction