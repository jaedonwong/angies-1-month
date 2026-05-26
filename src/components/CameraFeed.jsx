export default function CameraFeed({ videoRef, ready, error }) {
  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950/40 to-rose-950/30 px-6 text-center">
        <p className="text-xs tracking-[0.2em] text-booth-cream/50 uppercase">
          Camera unavailable
        </p>
        <p className="mt-2 text-[10px] text-booth-cream/30">
          Allow camera access to step inside
        </p>
      </div>
    )
  }

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.3s ease',
          transform: 'scaleX(-1)',
        }}
        playsInline
        muted
        autoPlay
      />
      {!ready && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950/40 to-rose-950/30">
          <div className="absolute inset-0 animate-pulse backdrop-blur-md" />
        </div>
      )}
    </>
  )
}
