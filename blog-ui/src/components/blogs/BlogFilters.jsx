import React from 'react'
import { Box, TextField, Button } from '@mui/material'

const BlogFilters = () => {
    return (
        <Box className="blog-filters">
            <TextField label="Search by Category" size="small" placeholder='Enter category' />
            <TextField type="date" size="small" />
            <TextField type="date" size="small" />
            <Button variant="contained">Apply</Button>
        </Box>
    )
}

export default BlogFilters