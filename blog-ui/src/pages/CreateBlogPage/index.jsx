import React, { useState, useEffect } from 'react'
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'
import api from '../../api/axios.js'
import './index.css'

const CreateBlogPage = () => {
    const navigate = useNavigate()
    const [blogName, setBlogName] = useState('')
    const [category, setCategory] = useState('')
    const [article, setArticle] = useState('')

    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }

    }, [])

    const handleBlogPublish = async () => {
        try {

            const response = await api.post('/user/blogs/add', {
                blogName,
                category,
                article

            })
            setBlogName('')
            setArticle('')
            setCategory('')
            alert('New blog is created successfully !!')
        } catch (error) {
            alert(JSON.stringify(error.response?.data || error.message))
        }
    }

    return (
        <Box className="create-blog-page">
            <Paper elevation={6} className="create-blog-card">

                <Typography variant="h5" className="create-blog-title">
                    Create New Blog
                </Typography>

                <Typography variant="body2" className="create-blog-subtitle">
                    Share your thoughts with the world
                </Typography>

                <Box className="create-blog-form">

                    <TextField
                        label="Blog Title"
                        fullWidth
                        margin="normal"
                        placeholder="Enter a meaningful blog title"
                        value={blogName}
                        onChange={(e) => setBlogName(e.target.value)}
                    />

                    <TextField
                        label="Category"
                        fullWidth
                        margin="normal"
                        placeholder="e.g. Technology, Travel, Finance etc & at least 20 chars"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <TextField
                        label="Article"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={10}
                        placeholder="Write your blog content here..."
                        value={article}
                        onChange={(e) => setArticle(e.target.value)}
                    />

                    <Box className="create-blog-actions">
                        <Button
                            variant="contained"
                            color="success"
                            className="publish-btn"
                            onClick={handleBlogPublish}
                        >
                            Publish Blog
                        </Button>

                        <Button
                            variant="outlined"
                            color="inherit"
                            className="cancel-btn"
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </Button>
                    </Box>

                </Box>
            </Paper>
        </Box>
    )
}

export default CreateBlogPage