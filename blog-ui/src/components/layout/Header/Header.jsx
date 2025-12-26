import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import './index.css'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { isAuthenticated, logout } = useAuth()
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    useEffect(() => {
        if (location.pathname.includes('/user') && isAuthenticated) {
            setIsUserLoggedIn(true)
        }
        else {
            setIsUserLoggedIn(false)
        }

    }, [location.pathname, isAuthenticated])

    const handleLogoutBtn = () => {
        logout()
        navigate('/')

    }

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
                    {!isUserLoggedIn && (
                        <>
                            <Button
                                variant="outlined"
                                className="login-btn"
                                component={RouterLink}
                                to='/login'
                            >
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                className="register-btn"
                                component={RouterLink}
                                to='/register'
                            >
                                Register
                            </Button>
                        </>
                    )}

                    {isUserLoggedIn && (
                        <>
                            <Button
                                variant="outlined"
                                className="my-blog-btn"
                            // component={RouterLink}
                            // to='/login'
                            >
                                My Blogs
                            </Button>
                            <Button
                                variant="contained"
                                className="logout-btn"
                                onClick={handleLogoutBtn}
                            >
                                Logout
                            </Button>
                        </>
                    )}

                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Header