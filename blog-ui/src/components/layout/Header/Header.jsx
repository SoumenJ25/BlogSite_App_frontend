import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import './index.css'

const Header = () => {
    return (
        <AppBar position="static" className="app-header">
            <Toolbar className="header-toolbar">

                <Typography
                    variant="h6"
                    className="header-logo"
                    component={RouterLink}
                    to='/'
                    sx={{ textDecoration: 'none', color: 'inherit' }}
                >
                    BlogSite
                </Typography>

                <Box className="header-spacer" />

                <Box className="header-actions">
                    <Button
                        variant="outlined"
                        className="login-btn"
                        component={RouterLink}
                        to='/login'
                    >
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