import { motion } from 'framer-motion'

export default function PhotoStripSilhouette({ strip, onClick, isDispensing }) {
  if (!strip) return null

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group relative mx-auto block w-[88px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-booth-neon/80 sm:w-[100px]"
      initial={false}
      animate={
        isDispensing
          ? { y: 0, opacity: 1 }
          : { y: 0, opacity: 1 }
      }
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`View ${strip.title} photo strip`}
    >
      <div
        className={`relative overflow-hidden rounded-sm border-2 border-booth-cream/20 bg-gradient-to-b ${strip.accent} p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)]`}
      >
        <div className="flex flex-col gap-1">
          {strip.frames.map((frame) => (
            <div
              key={frame.id}
              className={`h-10 w-full rounded-[2px] bg-gradient-to-br sm:h-12 ${frame.gradient} opacity-70 transition-opacity group-hover:opacity-90`}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/50 to-transparent" />
        <p className="mt-1 text-center text-[8px] tracking-widest text-booth-cream/60 uppercase">
          tap to open
        </p>
      </div>
    </motion.button>
  )
}
