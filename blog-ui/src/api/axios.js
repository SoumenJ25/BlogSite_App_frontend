import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/api/v1/blogSite',
    headers: {
        'Content-Type': 'application/json',
        ...(sessionStorage.getItem('AccessToken') ? { 'Authorization': `Bearer ${sessionStorage.getItem('AccessToken')}` } : {})
}
})

export default api