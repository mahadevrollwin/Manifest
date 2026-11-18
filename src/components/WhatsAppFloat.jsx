const WHATSAPP_URL =
  'https://wa.me/97140000000?text=' +
  encodeURIComponent('Hello Manifest, I would like to discuss UAE business setup.')

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Manifest on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.01 3.2C9.05 3.2 3.4 8.84 3.4 15.8c0 2.22.58 4.3 1.6 6.12L3.2 28.8l7.1-1.86a12.55 12.55 0 005.71 1.38h.01c6.96 0 12.6-5.64 12.6-12.6S22.97 3.2 16.01 3.2zm7.33 17.86c-.31.87-1.8 1.6-2.5 1.7-.64.1-1.45.14-2.34-.15-.54-.17-1.23-.4-2.12-.78-3.73-1.61-6.16-5.36-6.35-5.61-.19-.25-1.55-2.06-1.55-3.93s.98-2.79 1.33-3.17c.35-.38.76-.48 1.01-.48h.73c.23 0 .54-.09.84.64.31.76 1.05 2.56 1.14 2.75.09.19.15.41.03.66-.12.25-.18.41-.36.63-.18.22-.38.49-.54.66-.18.18-.36.37-.15.73.21.36.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.92 1.8.36.18.57.15.78-.09.21-.25.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.22 1.74z"
        />
      </svg>
    </a>
  )
}
