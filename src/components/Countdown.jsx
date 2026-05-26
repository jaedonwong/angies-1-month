import { AnimatePresence, motion } from 'framer-motion'

export default function Countdown({ value }) {
  const display = value

  return (
    <AnimatePresence mode="wait">
      {value !== null && (
        <motion.div
          key={value}
          className="absolute inset-0 z-20 flex items-center justify-center"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="font-display text-7xl font-bold tracking-wider text-booth-cream drop-shadow-[0_0_30px_rgba(255,107,157,0.6)] sm:text-8xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {display}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
