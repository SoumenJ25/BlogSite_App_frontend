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
  const [isLoading, setIsLoading] = useState(true)
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedBlog(null)
  }

  const fetchAllPublicBlogs = async (filters = {}) => {
    setIsLoading(true)
    try {
      const publicBlogs = await api.get('/blogs/getall', {
        params: filters
      })
      console.log('remote logs: public blogs', publicBlogs?.data)
      setBlogs(publicBlogs.data?.data)
    } catch (error) {
      console.error('remote logs: failed to fetch all public blogs:', error.response?.data || error.message)
    } finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    fetchAllPublicBlogs()
  }, [])

  return (
    <Box className="public-blogs-page">
      <BlogFilters
        onApplyFilters={fetchAllPublicBlogs}
      />
      {!isLoading && blogs?.length === 0 && (

        <div className='no-blogs-container'>
          <h3>No Blogs are found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
      {!isLoading && blogs.length > 0 && (
        <BlogList
          blogs={blogs}
          onBlogClick={handleBlogClick}
        />
      )}


      <BlogModal
        open={isModalOpen}
        onClose={handleCloseModal}
        blog={selectedBlog}
      />
    </Box>
  )
}

export default PublicBlogsPage