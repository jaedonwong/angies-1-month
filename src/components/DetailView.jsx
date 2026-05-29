import { motion } from 'framer-motion'

function StripFrame({ frame, index }) {
  return (
    <motion.div
      className="w-full shrink-0"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`relative aspect-[3/4] w-full overflow-hidden rounded-lg border-2 border-booth-cream/15 bg-gradient-to-br ${frame.gradient} shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="text-4xl opacity-30">♥</span>
          <p className="text-xs tracking-[0.3em] text-booth-cream/50 uppercase">
            {frame.label}
          </p>
        </div>
        {/* Film grain overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />
      </div>
      <p className="mt-2 text-center text-[10px] tracking-[0.2em] text-booth-cream/30">
        {index + 1} / 4
      </p>
    </motion.div>
  )
}

export default function DetailView({ strip, onReset, visible }) {
  if (!strip) return null

  return (
    <motion.div
      className="fixed inset-0 z-40 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
      />

      {/* Close-up strip scroll */}
      <motion.div
        className="scrollable-y relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col px-6 pt-16 pb-32"
        initial={{ y: '100%' }}
        animate={{ y: visible ? 0 : '100%' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="mb-8 text-center">
          <p className="text-[10px] tracking-[0.4em] text-booth-gold/60 uppercase">
            Your Memories
          </p>
          <h2
            className="mt-2 text-3xl text-booth-cream"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {strip.title}
          </h2>
        </header>

        <div className="flex flex-col gap-8">
          {strip.frames.map((frame, index) => (
            <StripFrame key={frame.id} frame={frame} index={index} />
          ))}
        </div>

        <p className="mt-8 text-center text-[10px] tracking-[0.2em] text-booth-cream/25">
          Scroll to see every moment
        </p>
      </motion.div>

      {/* Reset / step out */}
      <motion.div
        className="fixed right-0 bottom-0 left-0 z-50 flex justify-center bg-gradient-to-t from-black via-black/80 to-transparent px-6 pt-12 pb-8"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: visible ? 0 : 80, opacity: visible ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.button
          type="button"
          onClick={onReset}
          className="rounded-full border border-booth-cream/20 bg-booth-wood/80 px-8 py-3 text-xs tracking-[0.25em] text-booth-cream uppercase backdrop-blur-sm transition-colors hover:border-booth-gold/40 hover:bg-booth-wood"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Take Another Photo
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
