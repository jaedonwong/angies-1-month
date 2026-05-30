import { useState } from 'react'

/**
 * Photo with gradient placeholder fallback until files exist in public/strips/.
 */
export default function FrameImage({ frame, className = '', alt = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`absolute inset-0 bg-gradient-to-br ${frame.gradient} ${className}`}
        aria-hidden
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="text-2xl opacity-30">♥</span>
          <p className="text-[10px] tracking-[0.25em] text-booth-cream/40 uppercase">
            {frame.label}
          </p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={frame.image}
      alt={alt || frame.label}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      onError={() => setFailed(true)}
      draggable={false}
    />
  )
}
