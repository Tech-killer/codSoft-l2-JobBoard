import React from 'react'
import Home from './components/Home'
import Jobs from './components/Jobs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pages from './components/Pages'
import Post from './components//Post'
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Login from './components/Login';
import Signup from './components/Sign';

function App() {
  return (
    <Router>
          <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/post" element={<Post />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
