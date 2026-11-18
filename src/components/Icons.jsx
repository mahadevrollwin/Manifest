const defaults = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

function Icon(props) {
  return <svg {...defaults} {...props} />
}

export function IconBuilding(props) {
  return (
    <Icon {...props}>
      <path d="M4 21h16" />
      <path d="M6 21V7l6-3 6 3v14" />
      <path d="M10 10h.01M14 10h.01M10 14h.01M14 14h.01M10 18h.01M14 18h.01" />
    </Icon>
  )
}

export function IconZones(props) {
  return (
    <Icon {...props}>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
    </Icon>
  )
}

export function IconGlobe(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 010 18 14 14 0 010-18" />
    </Icon>
  )
}

export function IconPassport(props) {
  return (
    <Icon {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M8 16.5c1.2-1.5 2.5-2 4-2s2.8.5 4 2" />
    </Icon>
  )
}

export function IconBank(props) {
  return (
    <Icon {...props}>
      <path d="M3 10l9-6 9 6" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
      <path d="M3 18h18M4 21h16" />
    </Icon>
  )
}

export function IconLedger(props) {
  return (
    <Icon {...props}>
      <path d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </Icon>
  )
}

export function IconCompass(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5l-1.8 4.7-4.7 1.8 1.8-4.7 4.7-1.8z" />
    </Icon>
  )
}

export function IconBlueprint(props) {
  return (
    <Icon {...props}>
      <path d="M4 6.5V19a1.5 1.5 0 001.5 1.5H19" />
      <path d="M8 4h11v12H8V4z" />
      <path d="M11 8h5M11 11h5M11 14h3" />
    </Icon>
  )
}

export function IconSeal(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="11" r="6" />
      <path d="M9.5 11.2l1.8 1.8 3.4-3.6" />
      <path d="M8 17.5L6.5 21M16 17.5L17.5 21" />
    </Icon>
  )
}

export function IconGrowth(props) {
  return (
    <Icon {...props}>
      <path d="M4 19h16" />
      <path d="M7 16V11M12 16V8M17 16V5" />
      <path d="M14.5 6.5L17 4l2.5 2.5" />
    </Icon>
  )
}
