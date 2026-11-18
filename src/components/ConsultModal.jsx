import { useEffect, useRef } from 'react'
import LeadForm from './LeadForm'

export default function ConsultModal({ open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="consult-modal" role="presentation">
      <button type="button" className="consult-modal-backdrop" aria-label="Close consultation form" onClick={onClose} />
      <div
        className="consult-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consult-modal-title"
      >
        <button
          ref={closeRef}
          type="button"
          className="consult-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>
        <LeadForm
          id="consult-modal-form"
          idPrefix="modal"
          className="lead-form consult-modal-form"
        />
        <span id="consult-modal-title" className="sr-only">
          Consultation form
        </span>
      </div>
    </div>
  )
}
