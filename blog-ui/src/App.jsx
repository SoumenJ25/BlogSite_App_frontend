import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'

import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import PublicBlogsPage from './pages/PublicBlogsPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/publicBlogs' element={<PublicBlogsPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App