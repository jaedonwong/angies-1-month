import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PhotoboothCabinet from './photobooth/PhotoboothCabinet'
import {
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
      className="landing-canvas fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      animate={{ opacity: isRevealing ? 0 : 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="landing-grain" aria-hidden />
      <div className="landing-weave" aria-hidden />

      <div className="relative flex flex-1 items-center justify-center px-4 pb-2">
        <motion.div
          ref={cabinetRef}
          className="w-[min(92vw,500px)] will-change-transform"
          style={{ transformOrigin }}
          animate={isEntering ? { scale: ENTER_ZOOM_SCALE } : { scale: 1 }}
          transition={{
            duration: ENTER_ZOOM_MS / 1000,
            ease: [0.42, 0, 0.18, 1],
          }}
        >
          <PhotoboothCabinet />
        </motion.div>
      </div>

      <AnimatePresence>
        {!isEntering && (
          <motion.div
            className="relative z-[60] flex flex-col items-center gap-3 px-6 pb-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            <p className="enter-instruction">4 Poses | Click to Enter</p>

            <motion.button
              type="button"
              onClick={handleEnter}
              className="btn-pearl-enter relative rounded-full px-10 py-3.5"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98, y: 2 }}
            >
              Click to Enter
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
