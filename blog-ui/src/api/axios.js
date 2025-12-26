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

api.interceptors.response.use((response)=>response, (error)=>{
    const status = error.response.status
    const message = error.response?.data?.message

    if(status === 401 && message?.toLowerCase().includes('expired')) {
        sessionStorage.removeItem('AccessToken')

        window.location.href = '/login'

        return Promise.reject(error)
    }
    return Promise.reject(error)
})

export default api