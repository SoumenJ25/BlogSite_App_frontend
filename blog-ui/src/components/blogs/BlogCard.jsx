import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

const BlogCard = () => {
    return (
        <Card className="blog-card">
            <CardContent>
                <Typography variant="h6">
                    Sample Blog Title
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Category: Web Development
                </Typography>

                <Typography variant="body2" className="blog-preview">
                    This is a short preview of the blog article content...
                </Typography>

                <Typography variant="caption">
                    By John Doe • 12 Aug 2025
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BlogCard