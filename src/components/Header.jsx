import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const PHONE_DISPLAY = '+971 4 000 0000'
const PHONE_HREF = 'tel:+97140000000'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Manifest home">
          <img src="/manifest-logo.webp" alt="Manifest Business Services" />
        </Link>

        <a className="header-phone" href={PHONE_HREF}>
          <span className="header-phone-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.6 4.8c.4-.4 1-.5 1.5-.3l2.2.7c.5.2.8.7.8 1.2l-.2 2.1c0 .4-.2.7-.5.9l-1.1.8a12.4 12.4 0 006.4 6.4l.8-1.1c.2-.3.5-.5.9-.5l2.1-.2c.5 0 1 .3 1.2.8l.7 2.2c.2.5.1 1.1-.3 1.5l-1.1 1.1c-.4.4-1 .6-1.5.5C11.2 20.5 3.5 12.8 2.1 5.9c-.1-.5.1-1.1.5-1.5L6.6 4.8z"
              />
            </svg>
          </span>
          <span className="header-phone-number">{PHONE_DISPLAY}</span>
        </a>
      </div>
    </header>
  )
}
