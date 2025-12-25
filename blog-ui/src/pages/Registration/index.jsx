import React from 'react'
import { Box, Typography, TextField, Button, Paper } from '@mui/material'
import './Registration.css'

const Registration = () => {
    return (
        <Box className="register-page">
            <Paper elevation={6} className="register-card">

                <Typography variant="h5" className="register-title">
                    Create Account
                </Typography>

                <Typography variant="body2" className="register-subtitle">
                    Join our blogging community today
                </Typography>

                <Box className="register-form">
                    <TextField
                        label="Username"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        margin="normal"
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        className="create-account-btn"
                    >
                        CREATE ACCOUNT
                    </Button>
                </Box>

                <Typography variant="body2" className="login-redirect">
                    Already have an account? <span>Sign in</span>
                </Typography>

            </Paper>
        </Box>
    )
}

export default Registration