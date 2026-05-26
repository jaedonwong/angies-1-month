import { BOOTH } from './constants'
import HeartBalloon from './HeartBalloon'

function PhotoStripDots() {
  return (
    <div className="flex flex-col gap-[3px]">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="h-2 w-2 bg-black" />
      ))}
    </div>
  )
}

function CurtainPleats() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `repeating-linear-gradient(
          90deg,
          ${BOOTH.curtain} 0px,
          ${BOOTH.curtain} 8px,
          ${BOOTH.curtainFold} 8px,
          ${BOOTH.curtainFold} 16px
        )`,
      }}
    />
  )
}

function LeftPanel() {
  return (
    <div
      className="flex flex-col items-center border-r border-white/30 px-2 py-3"
      style={{ backgroundColor: BOOTH.brown }}
    >
      {/* Yellow PHOTOS sign */}
      <div
        className="mb-3 w-full border-2 border-black px-1 py-2 text-center"
        style={{ backgroundColor: BOOTH.yellow }}
      >
        <p
          className="text-[11px] leading-tight font-bold text-black"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          PHOTOS
        </p>
        <div className="mt-1 flex items-center justify-center gap-2">
          <PhotoStripDots />
          <p className="text-[8px] font-bold tracking-wide text-black">4 POSES</p>
          <PhotoStripDots />
        </div>
      </div>

      {/* Delivery sign + slot */}
      <div className="mt-auto flex w-full flex-col items-center gap-1">
        <div
          className="w-full px-1 py-1 text-center text-[6px] leading-tight font-bold text-white"
          style={{ backgroundColor: BOOTH.black }}
        >
          PHOTOS
          <br />
          DELIVERED
          <br />
          HERE
        </div>
        <div
          className="h-14 w-8 rounded-sm border border-black/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.35)]"
          style={{
            background: `linear-gradient(90deg, ${BOOTH.slot} 0%, #d4d4d4 45%, ${BOOTH.slot} 100%)`,
          }}
        />
      </div>
    </div>
  )
}

function CurtainOpening() {
  const balloons = [
    { left: '18%', top: '12%', size: 26, delay: 0 },
    { left: '55%', top: '8%', size: 22, delay: 0.1 },
    { left: '35%', top: '28%', size: 30, delay: 0.05 },
    { left: '68%', top: '22%', size: 24, delay: 0.15 },
  ]

  return (
    <div
      data-curtain-anchor
      className="relative flex min-h-[220px] flex-col border-x border-white/20 sm:min-h-[260px]"
    >
      {/* Curtain chamber */}
      <div className="relative flex-1 overflow-hidden">
        <CurtainPleats />
        {/* Depth vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />

        {/* Heart balloons */}
        {balloons.map((b, i) => (
          <div
            key={i}
            className="absolute z-10 flex flex-col items-center"
            style={{ left: b.left, top: b.top }}
          >
            <HeartBalloon size={b.size} />
            <div
              className="mt-0.5 w-px origin-top"
              style={{
                height: `${48 + i * 8}px`,
                backgroundColor: BOOTH.red,
              }}
            />
          </div>
        ))}
      </div>

      {/* Interior floor */}
      <div className="h-5 shrink-0" style={{ backgroundColor: BOOTH.greyFloor }} />
    </div>
  )
}

function RightPanel() {
  return (
    <div
      className="flex flex-col items-center justify-between border-l border-white/30 px-2 py-4"
      style={{ backgroundColor: BOOTH.cream }}
    >
      <div
        className="mt-6 border-2 px-2 py-1 text-center"
        style={{ borderColor: BOOTH.red, backgroundColor: BOOTH.white }}
      >
        <p
          className="text-[9px] font-bold tracking-[0.15em]"
          style={{ color: BOOTH.red, fontFamily: 'var(--font-booth)' }}
        >
          A &amp; J PHOTOS
        </p>
      </div>

      <div
        className="mb-2 h-20 w-[85%] rounded-sm border border-black/10"
        style={{ backgroundColor: BOOTH.brown }}
      />
    </div>
  )
}

/**
 * Deterministic rebuild of photobooth.png as a scalable DOM structure.
 */
export default function PhotoboothCabinet() {
  return (
    <div className="select-none" aria-label="A and J Photos booth exterior">
      {/* Header marquee */}
      <div
        className="border-2 px-3 py-2.5 text-center sm:py-3"
        style={{ borderColor: BOOTH.red, backgroundColor: BOOTH.white }}
      >
        <h1
          className="text-xl font-bold tracking-[0.18em] sm:text-2xl"
          style={{ color: BOOTH.red, fontFamily: 'var(--font-booth)' }}
        >
          A &amp; J PHOTOS
        </h1>
      </div>

      {/* Top beam */}
      <div className="h-2.5 sm:h-3" style={{ backgroundColor: BOOTH.brownDark }} />

      {/* Three-column body */}
      <div
        className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)_minmax(0,1fr)]"
        style={{ backgroundColor: BOOTH.brownDark }}
      >
        <LeftPanel />
        <CurtainOpening />
        <RightPanel />
      </div>

      {/* Base */}
      <div className="h-3 sm:h-4" style={{ backgroundColor: BOOTH.black }} />
    </div>
  )
}
