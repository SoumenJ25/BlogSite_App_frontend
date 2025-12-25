import React from 'react'
import { Grid } from '@mui/material'
import BlogCard from './BlogCard'

const BlogList = () => {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4].map((item) => (
        <Grid item xs={12} md={6} lg={4} key={item}>
          <BlogCard />
        </Grid>
      ))}
    </Grid>
  )
}

export default BlogList