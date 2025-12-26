import React from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'

import { useAuth } from '../../context/AuthContext'
import api from '../../api/axios'

const BlogCard = ({ blog, onClick, fetchBlogsAgain }) => {
    const timestamp = blog?.createdAt
    const date = new Date(timestamp)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date)

    let text = blog?.article
    let shortenedText = text?.length > 50 ? text.substring(0, 50) + "..." : text

    const { isAuthenticated } = useAuth()

    const deleteUserBlog = async (blog, id) => {
        console.log('blog is', blog)
        console.log('passed id', typeof (id))
        try {

            const response = await api.delete('/user/blogs/delete', {
                data: {
                    blogId: id
                }
            })
            alert(JSON.stringify(response.data))
            fetchBlogsAgain()
        } catch (error) {
            alert(JSON.stringify(error.response?.data || error.message))
        }
    }

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
                {isAuthenticated && (
                    <Button
                        variant="contained"
                        fullWidth
                        className="delete-account-btn"
                        onClick={(e) => {
                            e.stopPropagation()
                            console.log('remote logs: blog id', blog?._id)
                            deleteUserBlog(blog, blog._id)
                        }
                        }
                    >
                        Delete
                    </Button>
                )}

            </CardContent>
        </Card>
    )
}

export default BlogCard