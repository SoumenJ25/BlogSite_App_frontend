import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import './index.css'

const EmptyDashboard = () => {
    const navigate = useNavigate()
    return (
        <div className="empty-state">
            <DescriptionOutlinedIcon className="empty-icon" />

            <h2 className="empty-title">No Blogs Yet</h2>

            <p className="empty-subtitle">
                Start sharing your thoughts and ideas with the world!
            </p>

            <Button
                variant="contained"
                className="empty-cta-btn"
                onClick={() => navigate('/user/createBlog')}
            >
                Create Your First Blog
            </Button>
        </div>
    )
}

export default EmptyDashboard