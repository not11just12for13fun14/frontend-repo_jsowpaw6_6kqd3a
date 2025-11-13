import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X, Shield, Moon, SunMedium } from 'lucide-react'

export default function Navbar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/20">
            <Shield className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="font-semibold tracking-wide text-white">MRM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItem('/', 'Home')}
          {navItem('/tools', 'Tools')}
          {navItem('/tutorials', 'Tutorials')}
          {navItem('/news', 'News')}
          {navItem('/dashboard', 'Dashboard')}
          {navItem('/labs', 'Labs')}
          {navItem('/podcast', 'Podcast')}
          {navItem('/contact', 'Contact')}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-md border border-white/10 text-gray-200 hover:text-white hover:border-white/20"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            className="md:hidden p-2 text-gray-200"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="px-4 py-3 flex flex-col">
            {navItem('/', 'Home')}
            {navItem('/tools', 'Tools')}
            {navItem('/tutorials', 'Tutorials')}
            {navItem('/news', 'News')}
            {navItem('/dashboard', 'Dashboard')}
            {navItem('/labs', 'Labs')}
            {navItem('/podcast', 'Podcast')}
            {navItem('/contact', 'Contact')}
          </div>
        </div>
      )}
    </header>
  )
}
