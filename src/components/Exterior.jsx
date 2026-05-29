import { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PhotoboothCabinet from './photobooth/PhotoboothCabinet'
import { ENTER_ZOOM_SCALE } from './photobooth/constants'
import {
  enterTransformTransition,
  enterFadeTransition,
  exitFadeTransition,
  GPU_LAYER,
} from './photobooth/enterMotion'

export default function Exterior({ onEnter, isEntering, isExiting }) {
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
    if (isEntering || isExiting) return
    onEnter()
  }

  const showCta = !isEntering && !isExiting

  return (
    <motion.div
      className="landing-canvas fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={false}
      animate={{
        opacity: isEntering ? [1, 1, 0] : isExiting ? [0, 0, 1] : 1,
      }}
      transition={
        isEntering ? enterFadeTransition : isExiting ? exitFadeTransition : { duration: 0 }
      }
    >
      <div className="landing-grain" aria-hidden />
      <div className="landing-weave" aria-hidden />

      <div className="relative flex flex-1 items-center justify-center px-4 pb-2">
        <motion.div
          ref={cabinetRef}
          className="w-[min(92vw,500px)]"
          style={{
            transformOrigin,
            ...GPU_LAYER,
            willChange: isEntering || isExiting ? 'transform' : 'auto',
          }}
          initial={isExiting ? { scale: ENTER_ZOOM_SCALE } : false}
          animate={{
            scale: isEntering ? ENTER_ZOOM_SCALE : 1,
          }}
          transition={enterTransformTransition}
        >
          <PhotoboothCabinet isEntering={isEntering} isExiting={isExiting} />
        </motion.div>
      </div>

      <AnimatePresence>
        {showCta && (
          <motion.div
            className="relative z-[60] flex flex-col items-center gap-3 px-6 pb-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
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
