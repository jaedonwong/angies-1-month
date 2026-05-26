import { motion } from 'framer-motion'

export default function Exterior({ onEnter, isEntering }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 30%, #1a1218 0%, #0d0a0b 55%, #050405 100%)',
      }}
      animate={
        isEntering
          ? { scale: 4.5, opacity: 0, filter: 'blur(8px)' }
          : { scale: 1, opacity: 1, filter: 'blur(0px)' }
      }
      transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Ambient booth glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(201,162,39,0.08)_0%,transparent_50%)]" />

      <div className="relative flex flex-col items-center px-6">
        {/* Vintage booth shell */}
        <div className="relative">
          {/* Curtain hint at top */}
          <div className="absolute -top-8 left-1/2 h-10 w-[110%] -translate-x-1/2 rounded-b-full bg-gradient-to-b from-booth-red/80 to-booth-red/30 shadow-[0_4px_20px_rgba(139,30,45,0.5)]" />

          <div className="relative w-[min(90vw,340px)] rounded-t-2xl border-4 border-booth-wood bg-gradient-to-b from-booth-wood via-[#3d2418] to-booth-wood p-1 shadow-[0_0_60px_rgba(201,162,39,0.15),inset_0_2px_0_rgba(255,255,255,0.08)]">
            {/* Marquee */}
            <div className="rounded-t-xl border-b-2 border-booth-gold/30 bg-booth-red/90 px-4 py-3 text-center">
              <h1
                className="text-3xl tracking-[0.2em] text-booth-cream sm:text-4xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                A&amp;J Photos
              </h1>
              <p className="mt-1 text-[10px] tracking-[0.35em] text-booth-gold/80 uppercase">
                Est. Forever
              </p>
            </div>

            {/* Booth window */}
            <div className="relative m-3 aspect-[4/5] overflow-hidden rounded-lg border-2 border-booth-gold/20 bg-black/80">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_40%)]" />
              <div className="flex h-full flex-col items-center justify-center gap-2 p-4">
                <div className="h-16 w-16 rounded-full border-2 border-booth-gold/40 bg-booth-gold/10" />
                <p className="text-xs tracking-widest text-booth-cream/50 uppercase">
                  Photo Booth
                </p>
              </div>
              {/* Side bulbs */}
              {[0, 1].map((side) => (
                <div
                  key={side}
                  className={`absolute top-1/2 ${side === 0 ? 'left-2' : 'right-2'} flex -translate-y-1/2 flex-col gap-3`}
                >
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-full bg-booth-gold shadow-[0_0_8px_rgba(201,162,39,0.8)]"
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Base panel */}
            <div className="mx-3 mb-3 h-3 rounded-full bg-booth-wood/80" />
          </div>
        </div>

        {/* Enter prompt */}
        <motion.button
          type="button"
          onClick={onEnter}
          disabled={isEntering}
          className="animate-neon-pulse mt-10 rounded-full border border-booth-neon/50 bg-booth-neon/10 px-8 py-3 text-sm tracking-[0.25em] text-booth-neon uppercase transition-colors hover:bg-booth-neon/20 disabled:pointer-events-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Click to Enter
        </motion.button>

        <p className="mt-4 text-[10px] tracking-[0.2em] text-booth-cream/30 uppercase">
          Pull back the curtain
        </p>
      </div>
    </motion.div>
  )
}
