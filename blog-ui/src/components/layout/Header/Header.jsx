import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import './index.css'

const Header = () => {
    return (
        <AppBar position="static" className="app-header">
            <Toolbar className="header-toolbar">

                <Typography variant="h6" className="header-logo">
                    BlogSite
                </Typography>

                <Box className="header-spacer" />

                <Box className="header-actions">
                    <Button variant="outlined" className="login-btn">
                        Login
                    </Button>
                    <Button variant="contained" className="register-btn">
                        Register
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Header