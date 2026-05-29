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
    isRevealingCamera,
    enterBooth,
    takePhoto,
    openDetailView,
    resetToInterior,
  } = usePhotoBooth()

  const showExterior =
    boothState === BOOTH_STATE.EXTERIOR || boothState === BOOTH_STATE.ENTERING
  const showInterior =
    boothState === BOOTH_STATE.INTERIOR ||
    boothState === BOOTH_STATE.ENTERING ||
    boothState === BOOTH_STATE.DETAIL
  const isEntering = boothState === BOOTH_STATE.ENTERING
  const cameraActive = boothState !== BOOTH_STATE.EXTERIOR

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
          isRevealingCamera={isRevealingCamera}
          isEntering={isEntering}
          cameraActive={cameraActive}
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
          isRevealing={isRevealingCamera}
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
