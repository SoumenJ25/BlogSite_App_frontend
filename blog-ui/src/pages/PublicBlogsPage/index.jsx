import React from 'react'
import { Box } from '@mui/material'
import BlogFilters from '../../components/blogs/BlogFilters'
import BlogList from '../../components/blogs/BlogList'
import './publicBlogs.css'

const PublicBlogsPage = () => {
  return (
    <Box className="public-blogs-page">
      <BlogFilters />
      <BlogList />
    </Box>
  )
}

export default PublicBlogsPage