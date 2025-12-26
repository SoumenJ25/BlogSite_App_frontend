import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import BlogFilters from '../../components/blogs/BlogFilters'
import BlogList from '../../components/blogs/BlogList'
import BlogModal from '../../components/blogs/BlogModal.jsx'
import api from '../../api/axios.js'
import './publicBlogs.css'

const PublicBlogsPage = () => {
  const [blogs, setBlogs] = useState([])
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedBlog(null)
  }

  const fetchAllPublicBlogs = async () => {
    try {
      const publicBlogs = await api.get('/blogs/getall')
      console.log('remote logs: public blogs', publicBlogs?.data)
      setBlogs(publicBlogs.data?.data)
    } catch (error) {
      console.error('remote logs: failed to fetch all public blogs:', error.response?.data || error.message)
    }

  }

  useEffect(() => {
    fetchAllPublicBlogs()
  }, [])

  return (
    <Box className="public-blogs-page">
      <BlogFilters />
      <BlogList
        blogs={blogs}
        onBlogClick={handleBlogClick}
      />
      <BlogModal
        open={isModalOpen}
        onClose={handleCloseModal}
        blog={selectedBlog}
      />
    </Box>
  )
}

export default PublicBlogsPage