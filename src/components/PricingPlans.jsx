const plans = [
  {
    id: 'mainland',
    badge: 'Widest market access',
    num: '01',
    title: 'Dubai Mainland',
    bestFor: 'Best for businesses wanting broad access to the UAE market.',
    priceLabel: 'From',
    price: 'AED 10,999',
    featured: false,
    features: [
      '100% foreign ownership for eligible activities',
      'Wider business activity options',
      'Trade licence & initial approval',
      'MOA & tenancy (Ejari)',
      'Corporate bank account assistance',
      'Residency Permit quota eligibility',
    ],
  },
  {
    id: 'uae-freezone',
    badge: 'Best value',
    num: '02',
    title: 'UAE Free Zone',
    bestFor: 'Best for consultants, digital businesses, e-commerce and international trading.',
    priceLabel: 'All inclusive',
    price: 'AED 9,599',
    featured: true,
    ribbon: 'Most selected',
    features: [
      '100% ownership',
      'Trade licence',
      'Certificate of formation',
      'Share certificate & MOA',
      'E-channel registration',
      'Assistance with Residency Permit',
    ],
  },
  {
    id: 'dubai-freezone',
    badge: 'Most flexible',
    num: '03',
    title: 'Dubai Free Zone',
    bestFor: 'Best for entrepreneurs wanting a Dubai-based Free Zone setup.',
    priceLabel: 'From',
    price: 'AED 14,900',
    featured: false,
    features: [
      'Dubai-based Free Zone licence',
      'Assistance with Residency Permit package',
      'Trade licence & MOA',
      'Lease agreement',
      'Establishment card',
      'Corporate bank account assistance',
      'Assistance with Residency Permit',
    ],
  },
]

export default function PricingPlans({ onSelect }) {
  return (
    <section className="section pricing" id="pricing">
      <div className="section-inner">
        <div className="pricing-head">
          <h2>
            Choose the Right <em>UAE Setup</em> for Your Business
          </h2>
          <p>
            Not sure which jurisdiction fits? Compare what each setup allows, who it suits and what
            it includes.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`pricing-card ${plan.featured ? 'is-featured' : ''}`}
            >
              {plan.ribbon ? <span className="pricing-ribbon">{plan.ribbon}</span> : null}
              <div className="pricing-card-top">
                <span className="pricing-badge">{plan.badge}</span>
                <span className="pricing-num">{plan.num}</span>
              </div>
              <h3>{plan.title}</h3>
              <p className="pricing-best">{plan.bestFor}</p>
              <p className={`pricing-price ${plan.featured ? 'is-accent' : ''}`}>
                <span className="pricing-price-label">{plan.priceLabel}</span>{' '}
                {plan.price}
                <sup>*</sup>
              </p>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                type="button"
                className={`pricing-cta ${plan.featured ? 'is-solid' : ''}`}
                onClick={() => onSelect?.(plan.id)}
              >
                Get This Offer
              </button>
              <p className="pricing-note">*T&amp;C&apos;s Apply</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
