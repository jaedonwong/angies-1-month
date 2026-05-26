import { useEffect, useRef, useState } from 'react'

export function useCamera(active) {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!active) {
      setReady(false)
      setError(null)
      return undefined
    }

    let stream = null
    let cancelled = false

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        })

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop())
          return
        }

        const video = videoRef.current
        if (video) {
          video.srcObject = stream
          await video.play()
          setReady(true)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err)
          setReady(false)
        }
      }
    }

    startCamera()

    return () => {
      cancelled = true
      stream?.getTracks().forEach((track) => track.stop())
      if (videoRef.current) {
        videoRef.current.srcObject = null
      }
    }
  }, [active])

  return { videoRef, ready, error }
}
