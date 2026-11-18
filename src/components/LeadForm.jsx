import { useNavigate } from 'react-router-dom'

export default function LeadForm({ id = 'consult', idPrefix = '', className = 'lead-form' }) {
  const navigate = useNavigate()
  const prefix = idPrefix ? `${idPrefix}-` : ''

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = Object.fromEntries(data.entries())
    sessionStorage.setItem('manifestLead', JSON.stringify(payload))
    navigate('/thank-you')
  }

  return (
    <form className={className} id={id} onSubmit={handleSubmit}>
      <h2>Begin your consultation</h2>
      <p className="lead-form-sub">
        Share a few details and our Dubai advisors will respond within one business day.
      </p>

      <div className="form-grid">
        <div className="form-row">
          <div className="field">
            <label htmlFor={`${prefix}fullName`}>Full name</label>
            <input
              id={`${prefix}fullName`}
              name="fullName"
              type="text"
              required
              autoComplete="name"
            />
          </div>
          <div className="field">
            <label htmlFor={`${prefix}email`}>Email</label>
            <input
              id={`${prefix}email`}
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor={`${prefix}phone`}>Phone / WhatsApp</label>
            <input
              id={`${prefix}phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
            />
          </div>
          <div className="field">
            <label htmlFor={`${prefix}interest`}>Interest</label>
            <select id={`${prefix}interest`} name="interest" required defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option value="mainland">Mainland Company Setup</option>
              <option value="freezone">Free Zone Company</option>
              <option value="offshore">Offshore Company</option>
              <option value="visa">Visa &amp; PRO Services</option>
              <option value="accounting">Accounting &amp; Tax</option>
              <option value="other">Other Corporate Services</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor={`${prefix}message`}>How can we help?</label>
          <textarea
            id={`${prefix}message`}
            name="message"
            placeholder="Tell us about your business goals in the UAE…"
          />
        </div>

        <button type="submit" className="btn-primary">
          Request Consultation
        </button>
      </div>

      <p className="form-note">Confidential · No obligation · Dubai-based advisors</p>
    </form>
  )
}
