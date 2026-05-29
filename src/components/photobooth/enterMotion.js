/**
 * Shared enter-transition motion — one curve, one clock, no staggered steps.
 */
export const ENTER_DURATION_S = 1.6

/** Gentle acceleration with soft landing — continuous forward momentum */
export const ENTER_EASE = [0.38, 0.02, 0.22, 1]

export const enterTransition = {
  duration: ENTER_DURATION_S,
  ease: ENTER_EASE,
}

/** Curtain + zoom share identical transform transition */
export const enterTransformTransition = {
  ...enterTransition,
  type: 'tween',
}

/** Interior / landing fade — starts mid-flight, overlaps through arrival */
export const enterFadeTransition = {
  duration: ENTER_DURATION_S,
  ease: ENTER_EASE,
  times: [0, 0.42, 1],
}

/** Compositor hints — do not set transform here (conflicts with motion scale) */
export const GPU_LAYER = {
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
}
