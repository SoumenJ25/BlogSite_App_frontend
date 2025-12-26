import React from 'react'
import EmptyDashboard from './EmptyDashboard'
import './index.css'

const DashboardContent = ({ blogs }) => {
    const hasBlogs = blogs && blogs.length > 0

    return (
        <div className="dashboard-content">
            {hasBlogs ? (
                <>
                    {/* Placeholder for future */}
                    {/* <BlogList blogs={blogs} /> */}
                    {/* <BlogModal /> */}
                </>
            ) : (
                <EmptyDashboard />
            )}
        </div>
    )
}

export default DashboardContent