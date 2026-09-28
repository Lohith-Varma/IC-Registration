import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AboutCollege from './components/AboutCollege'
import WhyAttend from './components/WhyAttend'
import WhoCanAttend from './components/WhoCanAttend'
import Dates from './components/Dates'
import Speakers from './components/Speakers'
import Submission from './components/Submission'
import Contact from './components/Contact'
import Committees from './components/Committees'
import Footer from './components/Footer'
import './App.css'
import ConferenceTracks from './components/ConferenceTracks'

const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    let cancelled = false
    let frame

    const scrollToLocation = () => {
      if (cancelled) return

      frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(hash.slice(1))
        if (target) {
          target.scrollIntoView({ block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0 })
      })
    }

    scrollToLocation()
    const timeouts = [250, 750].map((delay) => window.setTimeout(scrollToLocation, delay))
    window.addEventListener('load', scrollToLocation)
    document.fonts?.ready.then(scrollToLocation)

    return () => {
      cancelled = true
      timeouts.forEach((timeout) => window.clearTimeout(timeout))
      window.removeEventListener('load', scrollToLocation)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <ConferenceTracks />
            <AboutCollege />
            <WhyAttend />
            <WhoCanAttend />
            <Dates />
            <Speakers />
            <Submission />
            <Contact />
          </main>
        } />
        <Route path="/committees" element={
          <main className="page-main page-main--committees">
            <Committees />
          </main>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
