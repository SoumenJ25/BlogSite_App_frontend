import React from 'react'
import { Grid } from '@mui/material'
import BlogCard from './BlogCard'

const BlogList = ({ blogs, onBlogClick, fetchBlogsAgain }) => {
  return (
    <Grid container spacing={3}>
      {blogs?.map((blog) => (
        <Grid xs={12} md={6} lg={4} key={blog._id}>
          <BlogCard
            key={blog._id}
            blog={blog}
            onClick={onBlogClick}
            fetchBlogsAgain={fetchBlogsAgain}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default BlogList