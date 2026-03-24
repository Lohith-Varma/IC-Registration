import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
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
          <main className="pt-24 min-h-screen">
            <Committees />
          </main>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
