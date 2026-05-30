import { useState } from 'react'
import { motion } from 'framer-motion'
import FrameImage from './FrameImage'

export default function FlipFrameCard({ frame, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="w-full shrink-0"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        onClick={() => setFlipped((prev) => !prev)}
        className="flip-card w-full text-left"
        aria-label={flipped ? `Show photo ${index + 1}` : `Read memory ${index + 1}`}
        aria-pressed={flipped}
      >
        <div className={`flip-card-inner ${flipped ? 'is-flipped' : ''}`}>
          {/* Front — photo */}
          <div className="flip-card-face flip-card-front">
            <div className="relative h-full w-full overflow-hidden rounded-lg border-2 border-booth-cream/15 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <FrameImage frame={frame} alt={frame.label} />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />
            </div>
          </div>

          {/* Back — caption */}
          <div className="flip-card-face flip-card-back">
            <div
              className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-booth-gold/25 bg-gradient-to-br ${frame.gradient} px-6 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.1)_0%,transparent_55%)]" />
              <p
                className="relative z-[1] text-center text-sm leading-relaxed text-booth-cream/90 sm:text-base"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {frame.caption}
              </p>
              <p className="relative z-[1] mt-4 text-[9px] tracking-[0.25em] text-booth-cream/35 uppercase">
                Tap to flip back
              </p>
            </div>
          </div>
        </div>
      </button>

      <p className="mt-2 text-center text-[10px] tracking-[0.2em] text-booth-cream/30">
        {index + 1} / 4
        <span className="mx-2 text-booth-cream/15">·</span>
        <span className="text-booth-cream/25">Tap to read the story</span>
      </p>
    </motion.div>
  )
}
