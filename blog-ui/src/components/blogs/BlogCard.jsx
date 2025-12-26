import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

const BlogCard = ({blog, onClick}) => {
    const timestamp = blog?.createdAt
    const date = new Date(timestamp)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date)

    let text = blog?.article
    let shortenedText = text?.length > 50 ? text.substring(0, 50) + "..." : text

    return (
        <Card className="blog-card" onClick={() => onClick(blog)}>
            <CardContent>
                <Typography variant="h6">
                    {blog?.blogName}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {blog?.category}
                </Typography>

                <Typography variant="body2" className="blog-preview">
                    {shortenedText}
                </Typography>

                <Typography variant="caption">
                    {`By ${blog?.authorName} ${formattedDate}`}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BlogCard