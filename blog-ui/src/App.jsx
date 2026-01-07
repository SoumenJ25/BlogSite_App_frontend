import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'

import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import PublicBlogsPage from './pages/PublicBlogsPage'
import UserDashboardPage from './pages/UserDashboardPage'
import CreateBlogPage from './pages/CreateBlogPage'
import UnderConstruction from './pages/UnderConstruction'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/publicBlogs' element={<PublicBlogsPage />} />
            <Route path='/user/dashboard' element={<UserDashboardPage />} />
            <Route path='/user/createBlog' element={<CreateBlogPage />} />
            <Route path='/community' element={<UnderConstruction />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App