export const PHOTO_STRIPS = [
  {
    id: 'strip-aurora',
    title: 'Midnight Aurora',
    accent: 'from-violet-900 via-fuchsia-800 to-rose-900',
    frames: [
      { id: 1, label: 'Frame I', gradient: 'from-indigo-950 to-purple-800' },
      { id: 2, label: 'Frame II', gradient: 'from-fuchsia-900 to-pink-700' },
      { id: 3, label: 'Frame III', gradient: 'from-rose-950 to-orange-900' },
      { id: 4, label: 'Frame IV', gradient: 'from-violet-950 to-indigo-900' },
    ],
  },
  {
    id: 'strip-golden',
    title: 'Golden Hour',
    accent: 'from-amber-900 via-orange-800 to-red-900',
    frames: [
      { id: 1, label: 'Frame I', gradient: 'from-amber-950 to-yellow-800' },
      { id: 2, label: 'Frame II', gradient: 'from-orange-900 to-amber-700' },
      { id: 3, label: 'Frame III', gradient: 'from-red-950 to-orange-800' },
      { id: 4, label: 'Frame IV', gradient: 'from-yellow-950 to-amber-900' },
    ],
  },
  {
    id: 'strip-ocean',
    title: 'Ocean Breeze',
    accent: 'from-teal-900 via-cyan-800 to-blue-900',
    frames: [
      { id: 1, label: 'Frame I', gradient: 'from-teal-950 to-cyan-800' },
      { id: 2, label: 'Frame II', gradient: 'from-cyan-900 to-sky-700' },
      { id: 3, label: 'Frame III', gradient: 'from-blue-950 to-indigo-800' },
      { id: 4, label: 'Frame IV', gradient: 'from-sky-950 to-teal-900' },
    ],
  },
]

export function pickRandomStrip() {
  const index = Math.floor(Math.random() * PHOTO_STRIPS.length)
  return PHOTO_STRIPS[index]
}
