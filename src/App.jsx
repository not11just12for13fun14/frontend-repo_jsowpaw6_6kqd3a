import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsWidget from './components/StatsWidget'
import NewsList from './components/NewsList'

function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-2xl font-semibold">Live Cyber Stats</h2>
          <p className="text-gray-400 mt-1">A quick glance at what's happening right now.</p>
          <StatsWidget />

          <div className="mt-14 flex items-center justify-between">
            <h2 className="text-white text-2xl font-semibold">Cyber News</h2>
          </div>
          <div className="mt-4">
            <NewsList />
          </div>
        </div>
      </section>
    </main>
  )
}

function Placeholder({ title }) {
  return (
    <div className="min-h-screen bg-black pt-24 px-6 text-gray-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="mt-2 text-gray-400">This page will include full functionality in the next step.</p>
      </div>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <div className="font-sans bg-black min-h-screen">
      <Navbar theme={theme} onToggleTheme={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))} />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Placeholder title="Cyber Tools" />} />
          <Route path="/tutorials" element={<Placeholder title="Tutorials & Courses" />} />
          <Route path="/news" element={<Placeholder title="Cyber News" />} />
          <Route path="/dashboard" element={<Placeholder title="Live Threat Dashboard" />} />
          <Route path="/labs" element={<Placeholder title="Cyber Labs" />} />
          <Route path="/podcast" element={<Placeholder title="Podcast & Media" />} />
          <Route path="/contact" element={<Placeholder title="Contact & Community" />} />
        </Routes>
      </div>
    </div>
  )
}
