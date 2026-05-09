import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToHash from './components/ScrollToHash'
import ScrollToTop from './components/ScrollToTop'
import BlogPage from './pages/BlogPage'
import EventsPage from './pages/EventsPage'
import HomePage from './pages/HomePage'
import { ContactFooter } from './components/ContactFooter'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <ScrollToTop />
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 md:px-6 md:py-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/evenimente" element={<EventsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <ContactFooter />
    </div>
  )
}

export default App
