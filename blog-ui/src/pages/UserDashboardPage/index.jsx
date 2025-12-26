import React, { useState } from 'react'
import DashboardHeader from '../../components/Dashboard/UserDashboardHeader'
import DashboardContent from '../../components/Dashboard/UserDashboardContent'

const UserDashboardPage = () => {
    const [userBlogs, setUserBlogs] = useState([])
    return (
        <>
            <DashboardHeader />
            <DashboardContent blogs={userBlogs} />
        </>
    )
}

export default UserDashboardPage