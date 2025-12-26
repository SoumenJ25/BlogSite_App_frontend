import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button,
    Divider,
    Box
} from '@mui/material'
import './BlogModal.css'

const BlogModal = ({ open, onClose, blog }) => {
    if (!blog) return null

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle className="blog-modal-title">
                {blog.blogName}
            </DialogTitle>

            <DialogContent className="blog-modal-content">
                <Box className="blog-meta">
                    <Typography variant="body2">
                        <strong>Category:</strong> {blog.category}
                    </Typography>
                    <Typography variant="body2">
                        <strong>Author:</strong> {blog.authorName}
                    </Typography>
                    <Typography variant="body2">
                        <strong>Published:</strong>{' '}
                        {new Date(blog.createdAt).toLocaleDateString()}
                    </Typography>
                </Box>

                <Divider className="blog-divider" />

                <Typography className="blog-article">
                    {blog.article}
                </Typography>
            </DialogContent>

            <DialogActions className="blog-modal-actions">
                <Button onClick={onClose} variant="contained">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default BlogModal