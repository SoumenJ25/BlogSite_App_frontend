import React, { useState } from 'react'
import EmptyDashboard from './EmptyDashboard'
import BlogList from '../blogs/BlogList'
import BlogModal from '../blogs/BlogModal'
import './index.css'

const DashboardContent = ({ blogs, isDataLoading }) => {
    const hasBlogs = blogs && blogs.length > 0
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

    return (
        <div className="dashboard-content">
            {hasBlogs && !isDataLoading && (
                <>

                    <BlogList blogs={blogs} onBlogClick={handleBlogClick} />
                    <BlogModal
                        open={isModalOpen}
                        onClose={handleCloseModal}
                        blog={selectedBlog}
                    />
                </>
            )}
            {!hasBlogs && !isDataLoading && (
                <EmptyDashboard />
            )}


        </div>
    )
}

export default DashboardContent