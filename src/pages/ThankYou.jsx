import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ThankYou() {
  return (
    <div className="page thank-you">
      <Header solid />

      <main className="thank-you-main">
        <div className="thank-you-card">
          <div className="mark" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1>Thank you</h1>
          <p>
            Your consultation request has been received. A Manifest advisor will contact you
            within one business day to discuss your Dubai setup plans.
          </p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
