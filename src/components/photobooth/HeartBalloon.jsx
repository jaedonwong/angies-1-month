import { BOOTH } from './constants'

export default function HeartBalloon({ className, size = 28 }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <path
        d="M16 28s-10-6.5-10-14a5.5 5.5 0 0 1 10-2.8A5.5 5.5 0 0 1 26 14c0 7.5-10 14-10 14z"
        fill={BOOTH.balloon}
        stroke="#9B1830"
        strokeWidth="1"
      />
    </svg>
  )
}
