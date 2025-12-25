import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom'
import './Login.css';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <Box className="login-page">
            <Card className="login-card">
                <CardContent className="login-content">

                    <Typography variant="h5" className="login-title">
                        Welcome Back
                    </Typography>

                    <Typography variant="body2" className="login-subtitle">
                        Sign in to continue your blogging journey
                    </Typography>

                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        margin="normal"
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        type={showPassword ? 'text' : 'password'}
                        margin="normal"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }
                        }}

                    />

                    <Button
                        fullWidth
                        variant="contained"
                        className="login-btn"
                    >
                        SIGN IN
                    </Button>

                    <Typography variant="body2" className="signup-text">
                        Don’t have an account?{' '}
                        <Link to='/register' className="signup-link">Create Account</Link>
                    </Typography>

                </CardContent>
            </Card>
        </Box>
    );
};

export default Login;