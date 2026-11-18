import { useCallback, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LeadForm from '../components/LeadForm'
import ConsultModal from '../components/ConsultModal'
import PricingPlans from '../components/PricingPlans'
import WhatsAppFloat from '../components/WhatsAppFloat'
import {
  IconBuilding,
  IconZones,
  IconGlobe,
  IconPassport,
  IconBank,
  IconLedger,
  IconCompass,
  IconBlueprint,
  IconSeal,
  IconGrowth,
} from '../components/Icons'

const services = [
  {
    title: 'Mainland Company Setup',
    copy: 'End-to-end mainland incorporation with trade name, licensing, and office solutions tailored to your activity.',
    Icon: IconBuilding,
  },
  {
    title: 'Free Zone Formation',
    copy: 'Strategic free zone structuring across DIFC, DMCC, and specialist zones—with clear cost and timeline guidance.',
    Icon: IconZones,
  },
  {
    title: 'Offshore Structures',
    copy: 'Discrete offshore company formation for holding, trading, and asset protection with full documentation support.',
    Icon: IconGlobe,
  },
  {
    title: 'Visa & PRO Services',
    copy: 'Investor, partner, and employment visas handled with dedicated PRO support through every government step.',
    Icon: IconPassport,
  },
  {
    title: 'Banking Introductions',
    copy: 'Warm introductions to leading UAE banks and preparation of the corporate banking package your relationship managers expect.',
    Icon: IconBank,
  },
  {
    title: 'Accounting & Tax',
    copy: 'Bookkeeping, VAT, corporate tax readiness, and ongoing compliance so your Dubai entity stays audit-ready.',
    Icon: IconLedger,
  },
]

const steps = [
  {
    num: '01',
    title: 'Discovery',
    copy: 'A private consultation to clarify activity, ownership, and the right jurisdiction for your goals.',
    Icon: IconCompass,
  },
  {
    num: '02',
    title: 'Structure',
    copy: 'We design your licensing path, shareholding, and visa plan with transparent timelines and fees.',
    Icon: IconBlueprint,
  },
  {
    num: '03',
    title: 'Execute',
    copy: 'Our team manages authorities, documentation, and follow-ups until your license is issued.',
    Icon: IconSeal,
  },
  {
    num: '04',
    title: 'Operate',
    copy: 'Banking, visas, and compliance continue under one dedicated advisor as you scale in the UAE.',
    Icon: IconGrowth,
  },
]

export default function Home() {
  const [consultOpen, setConsultOpen] = useState(false)
  const closeConsult = useCallback(() => setConsultOpen(false), [])
  const openConsult = useCallback(() => setConsultOpen(true), [])

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [])

  return (
    <div className="page">
      <Header />
      <ConsultModal open={consultOpen} onClose={closeConsult} />
      <WhatsAppFloat />

      <section className="hero" aria-label="Manifest hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80"
            alt=""
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-brand">
              <img src="/manifest-logo.webp" alt="Manifest Business Services" />
            </div>
            <span className="hero-eyebrow">Dubai · Business Setup · Corporate Services</span>
            <h1>Establish with clarity in the UAE</h1>
            <p className="hero-lead">
              Manifest guides founders and corporates through company formation, licensing,
              visas, and compliance—with the precision expected of Dubai&apos;s most discerning
              advisors.
            </p>
            <div className="hero-actions">
              <a className="btn-ghost" href="#services">
                Explore services
              </a>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-eyebrow">Capabilities</span>
            <h2>Corporate services refined for the Emirates</h2>
            <p>
              From first license to lasting compliance, every engagement is led by specialists who
              understand both regulation and reputation.
            </p>
          </div>

          <div className="services-grid">
            {services.map((item, i) => (
              <article className="service-item" key={item.title}>
                <div className="service-icon" aria-hidden="true">
                  <item.Icon />
                </div>
                <span className="service-index">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingPlans onSelect={openConsult} />

      <section className="section why" id="process">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-eyebrow">The Manifest method</span>
            <h2>A composed path from intent to incorporation</h2>
            <p>
              Four deliberate stages—designed to remove friction and keep every decision
              transparent.
            </p>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.num}>
                <div className="step-icon" aria-hidden="true">
                  <step.Icon />
                </div>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section presence" id="presence">
        <div className="section-inner presence-layout">
          <div className="presence-copy">
            <div className="section-head">
              <span className="section-eyebrow">Dubai presence</span>
              <h2>Grounded locally. Oriented globally.</h2>
              <p>
                Based in Dubai, Manifest combines on-the-ground authority relationships with the
                discretion international clients expect when entering the UAE market.
              </p>
            </div>
            <ul className="presence-points">
              <li>Licensed activity mapping across mainland and free zones</li>
              <li>Dedicated advisor through formation, banking, and visas</li>
              <li>Transparent timelines with no opaque intermediary markups</li>
              <li>Ongoing corporate secretarial and tax-ready support</li>
            </ul>
          </div>
          <div className="presence-visual">
            <img
              src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1400&q=80"
              alt="Dubai skyline at dusk"
            />
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Ready to manifest your UAE venture?</h2>
        <p>
          Tell us about your business and we will prepare a clear setup roadmap—license options,
          costs, and next steps—within one business day.
        </p>
        <button type="button" className="btn-primary" onClick={openConsult}>
          Start Your Consultation
        </button>
      </section>

      <Footer />
    </div>
  )
}
