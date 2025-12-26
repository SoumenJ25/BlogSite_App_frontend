import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState(null)

    useEffect(() => {
        const storedToken = sessionStorage.getItem('AccessToken')
        if (storedToken) {
            setToken(storedToken)
            setIsAuthenticated(true)
        }
    }, [])

    const login = (jwtToken) => {
        sessionStorage.setItem('AccessToken', jwtToken)
        setToken(jwtToken)
        setIsAuthenticated(true)
    }

    const logout = () => {
        sessionStorage.removeItem("AccessToken")
        setToken(null)
        setIsAuthenticated(false)
    }
    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            token,
            login,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)