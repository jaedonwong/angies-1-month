import { motion } from 'framer-motion'
import { BOOTH } from './constants'
import { enterTransformTransition, GPU_LAYER } from './enterMotion'
import HeartBalloon from './HeartBalloon'
import './booth-illustration.css'

function PhotoStripDots() {
  return (
    <div className="flex flex-col gap-[3px] opacity-90">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-2 w-2 rounded-[1px] bg-black shadow-[inset_0_0.5px_0_rgba(255,255,255,0.15)]"
        />
      ))}
    </div>
  )
}

function CurtainHalf({ side, isOpen }) {
  const isLeft = side === 'left'

  return (
    <motion.div
      className={`absolute top-0 z-20 h-full w-1/2 overflow-hidden ${
        isLeft ? 'left-0' : 'right-0'
      }`}
      style={{
        ...GPU_LAYER,
        willChange: isOpen ? 'transform' : 'auto',
      }}
      initial={false}
      animate={{ x: isOpen ? (isLeft ? '-100%' : '100%') : 0 }}
      transition={enterTransformTransition}
    >
      <div
        className={`curtain-pleats absolute top-0 h-full w-[200%] ${
          isLeft ? 'left-0' : 'right-0'
        }`}
      />
      <div
        className={`pointer-events-none absolute top-0 h-full w-3 ${
          isLeft ? 'right-0' : 'left-0'
        }`}
        style={{
          background: isLeft
            ? 'linear-gradient(90deg, transparent, rgba(0,0,0,0.22))'
            : 'linear-gradient(270deg, transparent, rgba(0,0,0,0.22))',
        }}
      />
    </motion.div>
  )
}

function LeftPanel() {
  return (
    <div className="wood-panel relative flex flex-col items-center border-r border-black/15 px-2.5 py-3">
      {/* Yellow PHOTOS sign */}
      <div className="panel-sign-yellow panel-sign mb-3 w-full rounded-sm px-1.5 py-2 text-center">
        <p
          className="text-panel-sharp text-[11px] leading-tight text-black"
          style={{ fontFamily: 'var(--font-booth-serif)', fontWeight: 700 }}
        >
          PHOTOS
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <PhotoStripDots />
          <p className="text-panel-sharp text-[7.5px] text-black">4 POSES</p>
          <PhotoStripDots />
        </div>
      </div>

      {/* Camera reel accent */}
      <div className="relative mb-3">
        <div className="reel-accent relative" aria-hidden />
      </div>

      {/* Delivery sign + slot */}
      <div className="mt-auto flex w-full flex-col items-center gap-1.5">
        <div className="panel-label-dark panel-sign w-full rounded-sm px-1 py-1.5 text-center">
          <p className="text-panel-sharp text-[5.5px] leading-[1.35] font-semibold text-white/95">
            PHOTOS
            <br />
            DELIVERED
            <br />
            HERE
          </p>
        </div>
        <div className="dispense-slot h-14 w-8 rounded-sm border border-black/25" />
      </div>
    </div>
  )
}

function CurtainOpening({ isEntering = false }) {
  const balloons = [
    { left: '14%', top: '10%', size: 24 },
    { left: '58%', top: '6%', size: 20 },
    { left: '38%', top: '24%', size: 34 },
    { left: '70%', top: '18%', size: 22 },
    { left: '26%', top: '38%', size: 18 },
  ]

  return (
    <div
      data-curtain-anchor
      className="relative flex min-h-[220px] flex-col border-x border-black/10 sm:min-h-[268px]"
    >
      <div className="curtain-chamber relative flex-1 overflow-hidden">
        <CurtainHalf side="left" isOpen={isEntering} />
        <CurtainHalf side="right" isOpen={isEntering} />

        <motion.div
          className="pointer-events-none absolute inset-0 z-30"
          initial={false}
          animate={{ opacity: isEntering ? [1, 0] : 1 }}
          transition={{
            ...enterTransformTransition,
            times: [0, 0.28],
          }}
        >
          {balloons.map((b, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left: b.left, top: b.top }}
            >
              <HeartBalloon size={b.size} />
              <div
                className="mt-0.5 w-px rounded-full"
                style={{
                  height: `${40 + i * 10}px`,
                  background: `linear-gradient(180deg, ${BOOTH.redDark}, ${BOOTH.red})`,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="booth-floor h-5 shrink-0" />
    </div>
  )
}

function RightPanel() {
  return (
    <div className="cream-panel relative flex flex-col items-center justify-between border-l border-black/8 px-2.5 py-4">
      <div
        className="panel-sign mt-5 rounded-sm border-2 px-2.5 py-1.5 text-center"
        style={{ borderColor: BOOTH.red, backgroundColor: BOOTH.white }}
      >
        <p
          className="text-[8px] font-semibold tracking-[0.14em]"
          style={{
            color: BOOTH.red,
            fontFamily: 'var(--font-booth-serif)',
          }}
        >
          A &amp; J PHOTOS
        </p>
      </div>

      <div className="frame-inset panel-sign mb-2 h-[88px] w-[88%] rounded-sm border border-black/15" />
    </div>
  )
}

export default function PhotoboothCabinet({ isEntering = false }) {
  return (
    <div className="booth-unit select-none" aria-label="A and J Photos booth exterior">
      {/* Header marquee */}
      <div className="booth-marquee rounded-t-sm px-4 py-3 text-center sm:py-3.5">
        <h1 className="booth-title-pearl relative z-[1] text-xl sm:text-[1.65rem]">
          A &amp; J PHOTOS
        </h1>
      </div>

      <div className="booth-beam h-2.5 sm:h-3" />

      {/* Three-column body */}
      <div
        className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)_minmax(0,1fr)] rounded-b-sm overflow-hidden"
        style={{ backgroundColor: BOOTH.brownDark }}
      >
        <LeftPanel />
        <CurtainOpening isEntering={isEntering} />
        <RightPanel />
      </div>

      <div
        className="h-3 sm:h-4 rounded-b-sm"
        style={{
          background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.25)',
        }}
      />
    </div>
  )
}
