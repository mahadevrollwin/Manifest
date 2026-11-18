import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Manifest home">
          <img src="/manifest-logo.webp" alt="Manifest Business Services" />
        </Link>

        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          <button type="button" className="nav-link" onClick={() => scrollTo('services')}>
            Services
          </button>
          <button type="button" className="nav-link" onClick={() => scrollTo('process')}>
            Process
          </button>
          <button type="button" className="nav-link" onClick={() => scrollTo('presence')}>
            Dubai
          </button>
          <button type="button" className="nav-link" onClick={() => scrollTo('consult')}>
            Consult
          </button>
        </nav>

        <button type="button" className="header-cta" onClick={() => scrollTo('consult')}>
          Free Consultation
        </button>

        <button
          type="button"
          className={`menu-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
