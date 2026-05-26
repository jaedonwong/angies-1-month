import { AnimatePresence, motion } from 'framer-motion'
import Countdown from './Countdown'
import PhotoStripSilhouette from './PhotoStripSilhouette'

export default function Interior({
  visible,
  isCountingDown,
  countdownValue,
  isDispensing,
  hasDispensedStrip,
  selectedStrip,
  onTakePhoto,
  onStripClick,
  canTakePhoto,
}) {
  return (
    <motion.div
      className="fixed inset-0 z-10 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Interior ambience */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 20%, #2a1810 0%, #1a100c 40%, #0d0a0b 100%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,200,100,0.06)_0%,transparent_45%)]" />

      {/* Booth frame */}
      <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-4">
        <p className="mb-4 text-[10px] tracking-[0.4em] text-booth-gold/60 uppercase">
          A&amp;J Photos — Interior
        </p>

        {/* Main booth cabinet */}
        <div className="relative w-full rounded-2xl border-4 border-[#4a2f1f] bg-gradient-to-b from-[#3d2418] to-[#2a1810] p-4 shadow-[inset_0_4px_20px_rgba(0,0,0,0.5),0_20px_60px_rgba(0,0,0,0.5)]">
          {/* Screen area */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border-2 border-booth-gold/25 bg-black">
            {/* Camera placeholder / blurred overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950/40 to-rose-950/30">
              <div className="absolute inset-0 backdrop-blur-md" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-50" />
            </div>

            {/* Screen message */}
            <AnimatePresence>
              {!isCountingDown && countdownValue === null && !hasDispensedStrip && (
                <motion.div
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p
                    className="text-2xl leading-snug text-booth-cream sm:text-3xl"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Happy 1 Month Baby
                  </p>
                  <p className="mt-3 text-[10px] tracking-[0.3em] text-booth-cream/40 uppercase">
                    Smile for the camera
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <Countdown value={isCountingDown ? countdownValue : null} />

            {/* Post-capture message */}
            <AnimatePresence>
              {hasDispensedStrip && !isCountingDown && (
                <motion.p
                  className="absolute top-4 left-0 right-0 z-10 text-center text-[10px] tracking-[0.25em] text-booth-gold/70 uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Collect your strip below
                </motion.p>
              )}
            </AnimatePresence>

            {/* Viewfinder corners */}
            <div className="pointer-events-none absolute inset-4 border border-booth-cream/10">
              <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-booth-cream/30" />
              <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-booth-cream/30" />
              <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-booth-cream/30" />
              <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-booth-cream/30" />
            </div>
          </div>

          {/* Dispense slot */}
          <div className="relative mt-2 flex flex-col items-center">
            <div className="h-2 w-32 rounded-b-md bg-black/80 shadow-[inset_0_3px_8px_rgba(0,0,0,0.9)]" />
            <div className="relative -mt-1 h-28 w-full overflow-hidden">
              <AnimatePresence>
                {(isDispensing || hasDispensedStrip) && selectedStrip && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    initial={{ y: '100%' }}
                    animate={{ y: hasDispensedStrip ? 0 : '60%' }}
                    transition={{
                      duration: hasDispensedStrip ? 2.2 : 1.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <PhotoStripSilhouette
                      strip={selectedStrip}
                      onClick={onStripClick}
                      isDispensing={isDispensing}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Take Photo button */}
        <motion.button
          type="button"
          onClick={onTakePhoto}
          disabled={!canTakePhoto}
          className="mt-8 flex items-center gap-3 rounded-full border-2 border-booth-cream/20 bg-gradient-to-b from-booth-red to-[#6b1520] px-10 py-4 text-sm tracking-[0.2em] text-booth-cream uppercase shadow-[0_6px_0_#4a0f16,0_12px_30px_rgba(0,0,0,0.4)] transition-all hover:brightness-110 active:translate-y-1 active:shadow-[0_2px_0_#4a0f16] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
          whileHover={canTakePhoto ? { scale: 1.02 } : {}}
          whileTap={canTakePhoto ? { scale: 0.98 } : {}}
        >
          <span className="inline-block h-3 w-3 rounded-full bg-red-400 shadow-[0_0_8px_#f87171]" />
          Take Photo
        </motion.button>
      </div>
    </motion.div>
  )
}
