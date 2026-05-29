import Exterior from './components/Exterior'
import Interior from './components/Interior'
import DetailView from './components/DetailView'
import ShutterFlash from './components/ShutterFlash'
import { BOOTH_STATE, usePhotoBooth } from './hooks/usePhotoBooth'

export default function App() {
  const {
    boothState,
    selectedStrip,
    isCountingDown,
    countdownValue,
    showFlash,
    isDispensing,
    hasDispensedStrip,
    enterBooth,
    exitBooth,
    takePhoto,
    openDetailView,
    resetToInterior,
  } = usePhotoBooth()

  const showExterior =
    boothState === BOOTH_STATE.EXTERIOR ||
    boothState === BOOTH_STATE.ENTERING ||
    boothState === BOOTH_STATE.EXITING
  const showInterior =
    boothState === BOOTH_STATE.INTERIOR ||
    boothState === BOOTH_STATE.ENTERING ||
    boothState === BOOTH_STATE.EXITING ||
    boothState === BOOTH_STATE.DETAIL
  const isEntering = boothState === BOOTH_STATE.ENTERING
  const isExiting = boothState === BOOTH_STATE.EXITING

  const canTakePhoto =
    !isCountingDown &&
    !isDispensing &&
    !hasDispensedStrip &&
    boothState === BOOTH_STATE.INTERIOR

  return (
    <div className="relative h-full w-full overflow-hidden">
      <ShutterFlash active={showFlash} />

      {showInterior && (
        <Interior
          isInside={
            boothState === BOOTH_STATE.INTERIOR ||
            boothState === BOOTH_STATE.DETAIL
          }
          isEntering={isEntering}
          isExiting={isExiting}
          onStepOut={exitBooth}
          showStepOut={
            boothState === BOOTH_STATE.INTERIOR &&
            !isCountingDown &&
            !isDispensing
          }
          isCountingDown={isCountingDown}
          countdownValue={countdownValue}
          isDispensing={isDispensing}
          hasDispensedStrip={hasDispensedStrip}
          selectedStrip={selectedStrip}
          onTakePhoto={takePhoto}
          onStripClick={openDetailView}
          canTakePhoto={canTakePhoto}
        />
      )}

      {showExterior && (
        <Exterior
          onEnter={enterBooth}
          isEntering={isEntering}
          isExiting={isExiting}
        />
      )}

      <DetailView
        strip={selectedStrip}
        onReset={resetToInterior}
        visible={boothState === BOOTH_STATE.DETAIL}
      />
    </div>
  )
}
