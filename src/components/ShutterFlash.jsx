import { AnimatePresence, motion } from 'framer-motion'

export default function ShutterFlash({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.85, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, times: [0, 0.08, 0.2, 1] }}
          style={{ background: '#fff' }}
        />
      )}
    </AnimatePresence>
  )
}
