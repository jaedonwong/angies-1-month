/** Build image path: /strips/{collection-folder}/{1-4}.jpg */
export function stripImagePath(collectionFolder, frameNumber) {
  return `/strips/${collectionFolder}/${frameNumber}.jpg`
}

function frame(collectionFolder, number, label, gradient, caption) {
  return {
    id: number,
    label,
    gradient,
    image: stripImagePath(collectionFolder, number),
    caption,
  }
}

export const PHOTO_STRIPS = [
  {
    id: 'midnight-aurora',
    title: 'Midnight Aurora',
    accent: 'from-violet-900 via-fuchsia-800 to-rose-900',
    frames: [
      frame(
        'midnight-aurora',
        1,
        'Frame I',
        'from-indigo-950 to-purple-800',
        'Replace this with your first memory — one or two sentences about what was happening.',
      ),
      frame(
        'midnight-aurora',
        2,
        'Frame II',
        'from-fuchsia-900 to-pink-700',
        'Replace this with your second memory for this collection.',
      ),
      frame(
        'midnight-aurora',
        3,
        'Frame III',
        'from-rose-950 to-orange-900',
        'Replace this with your third memory for this collection.',
      ),
      frame(
        'midnight-aurora',
        4,
        'Frame IV',
        'from-violet-950 to-indigo-900',
        'Replace this with your fourth memory for this collection.',
      ),
    ],
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    accent: 'from-amber-900 via-orange-800 to-red-900',
    frames: [
      frame(
        'golden-hour',
        1,
        'Frame I',
        'from-amber-950 to-yellow-800',
        'Replace this with your first memory — one or two sentences about what was happening.',
      ),
      frame(
        'golden-hour',
        2,
        'Frame II',
        'from-orange-900 to-amber-700',
        'Replace this with your second memory for this collection.',
      ),
      frame(
        'golden-hour',
        3,
        'Frame III',
        'from-red-950 to-orange-800',
        'Replace this with your third memory for this collection.',
      ),
      frame(
        'golden-hour',
        4,
        'Frame IV',
        'from-yellow-950 to-amber-900',
        'Replace this with your fourth memory for this collection.',
      ),
    ],
  },
  {
    id: 'ocean-breeze',
    title: 'Ocean Breeze',
    accent: 'from-teal-900 via-cyan-800 to-blue-900',
    frames: [
      frame(
        'ocean-breeze',
        1,
        'Frame I',
        'from-teal-950 to-cyan-800',
        'Replace this with your first memory — one or two sentences about what was happening.',
      ),
      frame(
        'ocean-breeze',
        2,
        'Frame II',
        'from-cyan-900 to-sky-700',
        'Replace this with your second memory for this collection.',
      ),
      frame(
        'ocean-breeze',
        3,
        'Frame III',
        'from-blue-950 to-indigo-800',
        'Replace this with your third memory for this collection.',
      ),
      frame(
        'ocean-breeze',
        4,
        'Frame IV',
        'from-sky-950 to-teal-900',
        'Replace this with your fourth memory for this collection.',
      ),
    ],
  },
]

export function pickRandomStrip() {
  const index = Math.floor(Math.random() * PHOTO_STRIPS.length)
  return PHOTO_STRIPS[index]
}
