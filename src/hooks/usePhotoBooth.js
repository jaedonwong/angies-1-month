import { useCallback, useEffect, useState } from 'react'
import { pickRandomStrip } from '../data/photoStrips'
import { ENTER_DURATION_MS } from '../components/photobooth/constants'

export const BOOTH_STATE = {
  EXTERIOR: 'exterior',
  ENTERING: 'entering',
  EXITING: 'exiting',
  INTERIOR: 'interior',
  DETAIL: 'detail',
}

function clearSessionState(setters) {
  const {
    setSelectedStrip,
    setIsCountingDown,
    setCountdownValue,
    setShowFlash,
    setIsDispensing,
    setHasDispensedStrip,
  } = setters
  setSelectedStrip(null)
  setIsCountingDown(false)
  setCountdownValue(null)
  setShowFlash(false)
  setIsDispensing(false)
  setHasDispensedStrip(false)
}

export function usePhotoBooth() {
  const [boothState, setBoothState] = useState(BOOTH_STATE.EXTERIOR)
  const [selectedStrip, setSelectedStrip] = useState(null)
  const [isCountingDown, setIsCountingDown] = useState(false)
  const [countdownValue, setCountdownValue] = useState(null)
  const [showFlash, setShowFlash] = useState(false)
  const [isDispensing, setIsDispensing] = useState(false)
  const [hasDispensedStrip, setHasDispensedStrip] = useState(false)

  const enterBooth = useCallback(() => {
    setBoothState(BOOTH_STATE.ENTERING)

    setTimeout(() => {
      setBoothState(BOOTH_STATE.INTERIOR)
    }, ENTER_DURATION_MS)
  }, [])

  const exitBooth = useCallback(() => {
    setBoothState((current) =>
      current === BOOTH_STATE.INTERIOR ? BOOTH_STATE.EXITING : current,
    )
  }, [])

  useEffect(() => {
    if (boothState !== BOOTH_STATE.EXITING) return undefined

    clearSessionState({
      setSelectedStrip,
      setIsCountingDown,
      setCountdownValue,
      setShowFlash,
      setIsDispensing,
      setHasDispensedStrip,
    })

    const timer = setTimeout(() => {
      setBoothState(BOOTH_STATE.EXTERIOR)
    }, ENTER_DURATION_MS)

    return () => clearTimeout(timer)
  }, [boothState])

  const takePhoto = useCallback(() => {
    if (isCountingDown || isDispensing) return

    const strip = pickRandomStrip()
    setSelectedStrip(strip)
    setHasDispensedStrip(false)
    setIsDispensing(false)
    setIsCountingDown(true)
    setCountdownValue(3)

    let current = 3
    const tick = () => {
      current -= 1
      if (current > 0) {
        setCountdownValue(current)
        setTimeout(tick, 900)
      } else {
        setCountdownValue(0)
        setTimeout(() => {
          setIsCountingDown(false)
          setCountdownValue(null)
          setShowFlash(true)

          setTimeout(() => {
            setShowFlash(false)
            setIsDispensing(true)
          }, 320)

          setTimeout(() => {
            setHasDispensedStrip(true)
          }, 2600)
        }, 450)
      }
    }

    setTimeout(tick, 900)
  }, [isCountingDown, isDispensing])

  const openDetailView = useCallback(() => {
    if (!hasDispensedStrip) return
    setBoothState(BOOTH_STATE.DETAIL)
  }, [hasDispensedStrip])

  const resetToInterior = useCallback(() => {
    setBoothState(BOOTH_STATE.INTERIOR)
    setSelectedStrip(null)
    setIsCountingDown(false)
    setCountdownValue(null)
    setShowFlash(false)
    setIsDispensing(false)
    setHasDispensedStrip(false)
  }, [])

  return {
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
  }
}
