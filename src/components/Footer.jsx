import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/">
            <img src="/manifest-logo.webp" alt="Manifest Business Services" />
          </Link>
          <p>
            Premium business setup and corporate services for founders and enterprises
            establishing a presence in Dubai and the wider UAE.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <a href="/#services">Company Formation</a>
          <a href="/#services">Licensing &amp; Compliance</a>
          <a href="/#services">Visa &amp; Immigration</a>
          <a href="/#services">Accounting &amp; Tax</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Dubai, United Arab Emirates</p>
          <a href="mailto:hello@manifest.ae">hello@manifest.ae</a>
          <a href="tel:+971400000000">+971 4 000 0000</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Manifest Business Services. All rights reserved.</span>
        <span>Crafted for Dubai entrepreneurs</span>
      </div>
    </footer>
  )
}
