import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardHeader from '../../components/Dashboard/UserDashboardHeader'
import DashboardContent from '../../components/Dashboard/UserDashboardContent'

import { useAuth } from '../../context/AuthContext'
import api from '../../api/axios.js'

const UserDashboardPage = () => {
    const [userBlogs, setUserBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const fetchUserBlogs = async () => {
        setIsLoading(true)
        try {

            const response = await api.get('/user/blogs/getall')
            console.log('remote logs: blogs are', response.data)
            setUserBlogs(response.data.data)

        } catch (error) {
            alert(JSON.stringify(error.response?.data || error.message))
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
        if (isAuthenticated) {
            fetchUserBlogs()
        }
    }, [])

    return (
        <>
            <DashboardHeader />
            <DashboardContent
                blogs={userBlogs}
                isDataLoading={isLoading}
                fetchBlogsAgain={fetchUserBlogs}
            />
        </>
    )
}

export default UserDashboardPage