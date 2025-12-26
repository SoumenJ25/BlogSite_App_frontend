import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import './index.css'

const DashboardHeader = () => {
    const navigate = useNavigate()
    return (
        <Box className="dashboard-header">

            <Box className="dashboard-header-left">
                <Typography variant="h5" className="dashboard-title">
                    My Blogs
                </Typography>
                <Typography variant="body2" className="dashboard-subtitle">
                    Manage and view your published articles
                </Typography>
            </Box>

            <Box className="dashboard-header-right">
                <Button
                    variant="contained"
                    className="create-blog-btn"
                    onClick={() => navigate('/user/createBlog')}
                >
                    Create New Blog
                </Button>
            </Box>

        </Box>
    )
}

export default DashboardHeader