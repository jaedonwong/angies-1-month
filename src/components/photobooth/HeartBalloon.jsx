import { useId } from 'react'
import { BOOTH } from './constants'

export default function HeartBalloon({
  className,
  size = 28,
  label,
  showHighlight = true,
}) {
  const uid = useId().replace(/:/g, '')
  const fillId = `heartFill-${uid}`
  const shineId = `heartShine-${uid}`
  const fontSize = label ? Math.max(7, size * 0.28) : 0

  return (
    <div className={`relative ${className ?? ''}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 32 36"
        width={size}
        height={size * 1.1}
        className="drop-shadow-[0_2px_4px_rgba(90,20,30,0.25)]"
        aria-hidden={!label}
      >
        <defs>
          <linearGradient id={fillId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f04a5a" />
            <stop offset="45%" stopColor={BOOTH.balloon} />
            <stop offset="100%" stopColor="#9b1830" />
          </linearGradient>
          {showHighlight && (
            <linearGradient id={shineId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          )}
        </defs>
        <path
          d="M16 30s-10-6.5-10-14a5.5 5.5 0 0 1 10-2.8A5.5 5.5 0 0 1 26 14c0 7.5-10 14-10 14z"
          fill={`url(#${fillId})`}
          stroke="#7a1428"
          strokeWidth="0.8"
        />
        {showHighlight && (
          <ellipse cx="12" cy="12" rx="4" ry="3" fill={`url(#${shineId})`} opacity="0.7" />
        )}
      </svg>
      {label && (
        <span
          className="absolute inset-0 flex items-center justify-center font-semibold text-white"
          style={{
            fontSize: `${fontSize}px`,
            fontFamily: 'var(--font-booth-sans)',
            letterSpacing: '0.02em',
            textShadow: '0 1px 2px rgba(60,10,20,0.5)',
            paddingTop: size * 0.08,
          }}
        >
          {label}
        </span>
      )}
    </div>
  )
}
