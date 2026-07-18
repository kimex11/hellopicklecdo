type IconProps = {
  className?: string;
};

const base = "h-6 w-6";

export function IconTimer({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 9v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 2h6M12 2v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconShuffle({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3 6h3.5c1.2 0 2.3.6 3 1.6l5 7.2c.7 1 1.8 1.6 3 1.6H21M17 3l4 3-4 3M3 18h3.5c1.2 0 2.3-.6 3-1.6l1-1.4M14.5 8.6L15.5 7.6c.7-1 1.8-1.6 3-1.6H21M17 21l4-3-4-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconTv({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 21h8M12 18.5V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="12" r="1.4" fill="currentColor" />
      <circle cx="16" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconUsers({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 4.5c1.7.4 3 2 3 3.9 0 1.9-1.3 3.5-3 3.9M18.5 14.3c2 .6 3.5 2.6 3.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconTrophy({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7 5H4.5A1.5 1.5 0 0 0 3 6.5c0 2 1.6 3.5 4 3.9M17 5h2.5A1.5 1.5 0 0 1 21 6.5c0 2-1.6 3.5-4 3.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 13v4M8.5 21h7M9.5 17h5l.5 4h-6l.5-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDatabase({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 5.5V12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 12v6.5c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V12" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconScale({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 3v18M8 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 7h6M14 7h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 7l-2.5 5a3 3 0 0 0 5 0L4 7ZM20 7l-2.5 5a3 3 0 0 0 5 0L20 7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTarget({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconMedal({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M8 3h8l-3 7h-2L8 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="15" r="6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 12v3l2 1.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHandshake({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M2 11l4-3 4 2.5 2.5-2 3 2.5 2-1.5 4.5 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8.5l4.5 4c.6.5 1.5.5 2 0l.3-.3M12.5 11.5l1.6 1.6c.6.5 1.5.5 2 0M15.5 10l1.4 1.4c.6.5 1.5.5 2 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 11v4.5M22 11v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconGrid({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconCrown({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3 18h18l-1.4-8-4.1 3-3.5-5.5-3.5 5.5-4.1-3L3 18Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M5 21h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 12.3l2.6 2.6L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGlobe({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconEye({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconCursorClick({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 3l4 15 2-5.5L17.5 17 19 15.5 13.5 11 19 9 6 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
