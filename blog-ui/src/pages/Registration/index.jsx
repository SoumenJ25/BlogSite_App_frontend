import React, { useState } from 'react'
import { Box, Typography, TextField, Button, Paper } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api/axios.js'
import './Registration.css'

const Registration = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formValues.username.trim()) {
            newErrors.username = 'Username is required'
        }

        if (!formValues.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
            newErrors.email = 'Enter a valid email address'
        }

        if (!formValues.password) {
            newErrors.password = 'Password is required'
        } else if (!/^[a-zA-Z0-9]+$/.test(formValues.password)) {
            newErrors.password = 'Password must be alphanumeric'
        }
        else if (formValues.password.length < 7) {
            newErrors.password = 'Password must be of at least 8 characters '
        }

        if (!formValues.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required'
        } else if (formValues.password !== formValues.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async () => {
        if (!validateForm()) return

        try {
            const response = await api.post('/user/register', {
                username: formValues.username,
                email: formValues.email,
                password: formValues.password
            })
            alert('User is registered successfully !!')
            navigate('/login')

        } catch (error) {
            console.error('remote logs: Registration Error:', error.response?.data || error.message)
        }
    }

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
                        name="username"
                        fullWidth
                        margin="normal"
                        value={formValues.username}
                        onChange={handleChange}
                        error={!!errors.username}
                        helperText={errors.username}
                    />

                    <TextField
                        label="Email"
                        name="email"
                        fullWidth
                        margin="normal"
                        value={formValues.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />

                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={formValues.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                    />

                    <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        className="create-account-btn"
                        onClick={handleSubmit}
                    >
                        CREATE ACCOUNT
                    </Button>
                </Box>

                <Typography variant="body2" className="login-redirect">
                    Already have an account?{' '}
                    <Link to="/login" className="signin-link">
                        Sign in
                    </Link>
                </Typography>

            </Paper>
        </Box>
    )
}

export default Registration