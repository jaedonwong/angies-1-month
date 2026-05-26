import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PhotoboothCabinet from './photobooth/PhotoboothCabinet'
import {
  LANDING_BG,
  ENTER_ZOOM_SCALE,
  ENTER_ZOOM_MS,
} from './photobooth/constants'

export default function Exterior({ onEnter, isEntering, isRevealing }) {
  const cabinetRef = useRef(null)
  const [transformOrigin, setTransformOrigin] = useState('50% 52%')

  useLayoutEffect(() => {
    const cabinet = cabinetRef.current
    const curtain = cabinet?.querySelector('[data-curtain-anchor]')
    if (!cabinet || !curtain) return

    const cabinetRect = cabinet.getBoundingClientRect()
    const curtainRect = curtain.getBoundingClientRect()

    const originX =
      ((curtainRect.left + curtainRect.width / 2 - cabinetRect.left) /
        cabinetRect.width) *
      100
    const originY =
      ((curtainRect.top + curtainRect.height / 2 - cabinetRect.top) /
        cabinetRect.height) *
      100

    setTransformOrigin(`${originX}% ${originY}%`)
  }, [])

  const handleEnter = () => {
    if (isEntering) return
    onEnter()
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: LANDING_BG }}
      animate={{ opacity: isRevealing ? 0 : 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Zoom layer — only the cabinet scales; background stays fixed */}
      <div className="flex flex-1 items-center justify-center px-4 pb-4">
        <motion.div
          ref={cabinetRef}
          className="w-[min(92vw,480px)] will-change-transform"
          style={{ transformOrigin }}
          animate={
            isEntering
              ? { scale: ENTER_ZOOM_SCALE }
              : { scale: 1 }
          }
          transition={{
            duration: ENTER_ZOOM_MS / 1000,
            ease: [0.42, 0, 0.18, 1],
          }}
        >
          <PhotoboothCabinet />
        </motion.div>
      </div>

      {/* Enter control — outside zoom transform; button-only trigger */}
      <AnimatePresence>
        {!isEntering && (
          <motion.div
            className="relative z-[60] flex flex-col items-center px-6 pb-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              type="button"
              onClick={handleEnter}
              className="rounded-full border-2 border-white/80 bg-white/30 px-8 py-3 text-sm tracking-[0.25em] text-[#9B1830] uppercase shadow-[0_4px_24px_rgba(155,24,48,0.15)] backdrop-blur-sm transition-colors hover:bg-white/50"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Click to Enter
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
