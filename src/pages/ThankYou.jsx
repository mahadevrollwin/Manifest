import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const nextSteps = [
  {
    label: '01',
    title: 'Request received',
    copy: 'Your details are with our Dubai advisory desk.',
  },
  {
    label: '02',
    title: 'Advisor review',
    copy: 'We map the right jurisdiction and licensing path.',
  },
  {
    label: '03',
    title: 'Personal outreach',
    copy: 'Expect a call or email within one business day.',
  },
]

export default function ThankYou() {
  return (
    <div className="page thank-you">
      <Header />

      <main className="thank-you-main">
        <div className="thank-you-stage">
          <div className="thank-you-visual" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80"
              alt=""
            />
            <div className="thank-you-visual-shade" />
            <div className="thank-you-visual-caption">
              <span>Dubai</span>
              <p>Where your next chapter takes shape</p>
            </div>
          </div>

          <div className="thank-you-card">
            <div className="mark" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="thank-eyebrow">Consultation confirmed</span>
            <h1>Thank you</h1>
            <p className="thank-lead">
              Your consultation request has been received. A Manifest advisor will contact you
              within one business day to discuss your Dubai setup plans.
            </p>

            <div className="thank-next">
              {nextSteps.map((step) => (
                <div className="thank-next-item" key={step.label}>
                  <span>{step.label}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="thank-actions">
              <Link to="/" className="btn-primary">
                Return Home
              </Link>
              <a className="btn-text" href="mailto:hello@manifest.ae">
                Email our team
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
