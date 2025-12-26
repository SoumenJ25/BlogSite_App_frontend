import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api/v1/blogSite',
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('AccessToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, (error) => Promise.reject(error))

export default api