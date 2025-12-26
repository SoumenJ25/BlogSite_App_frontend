import React, { useState } from 'react'
import DashboardHeader from '../../components/Dashboard/UserDashboardHeader'
import DashboardContent from '../../components/Dashboard/UserDashboardContent'

import { useAuth } from '../../context/AuthContext'

const UserDashboardPage = () => {
    const { isAuthenticated } = useAuth()
    console.log('remote logs: user is authenticated:', isAuthenticated)
    const [userBlogs, setUserBlogs] = useState([])
    return (
        <>
            <DashboardHeader />
            <DashboardContent blogs={userBlogs} />
        </>
    )
}

export default UserDashboardPage