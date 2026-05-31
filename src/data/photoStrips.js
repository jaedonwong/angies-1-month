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
    id: 'our-blind-boxes',
    title: 'Our Blind Boxes',
    accent: 'from-violet-900 via-fuchsia-800 to-rose-900',
    frames: [
      frame(
        'our-blind-boxes',
        1,
        'Frame I',
        'from-indigo-950 to-purple-800',
        'Hironos and Cybertrucks ... p.s. we still need to eat their happy meal together!',
      ),
      frame(
        'our-blind-boxes',
        2,
        'Frame II',
        'from-fuchsia-900 to-pink-700',
        'THE RED ONE! THE RED ONE!',
      ),
      frame(
        'our-blind-boxes',
        3,
        'Frame III',
        'from-rose-950 to-orange-900',
        'Hacipupu & two idiots hahaha',
      ),
      frame(
        'our-blind-boxes',
        4,
        'Frame IV',
        'from-violet-950 to-indigo-900',
        'Bruin (Blue) x Trojan (Red)',
      ),
    ],
  },
  {
    id: 'nights-in-with-you',
    title: 'Nights in with You',
    accent: 'from-amber-900 via-orange-800 to-red-900',
    frames: [
      frame(
        'nights-in-with-you',
        1,
        'Frame I',
        'from-amber-950 to-yellow-800',
        '3 AM Legos 😍',
      ),
      frame(
        'nights-in-with-you',
        2,
        'Frame II',
        'from-orange-900 to-amber-700',
        '🤓🤓🤓',
      ),
      frame(
        'nights-in-with-you',
        3,
        'Frame III',
        'from-red-950 to-orange-800',
        'Masterchef ... minus the tasting part 😅',
      ),
      frame(
        'nights-in-with-you',
        4,
        'Frame IV',
        'from-yellow-950 to-amber-900',
        'Maybe 1000 pieces next time ??',
      ),
    ],
  },
  {
    id: 'will-you-be-mine',
    title: 'Will You Be Mine?',
    accent: 'from-teal-900 via-cyan-800 to-blue-900',
    frames: [
      frame(
        'will-you-be-mine',
        1,
        'Frame I',
        'from-teal-950 to-cyan-800',
        'Two big backs 😍',
      ),
      frame(
        'will-you-be-mine',
        2,
        'Frame II',
        'from-cyan-900 to-sky-700',
        '5/8/26 celebrating 5/2/26',
      ),
      frame(
        'will-you-be-mine',
        3,
        'Frame III',
        'from-blue-950 to-indigo-800',
        'Sugarfish down. Nobu next??',
      ),
      frame(
        'will-you-be-mine',
        4,
        'Frame IV',
        'from-sky-950 to-teal-900',
        'A & J 🥰',
      ),
    ],
  },
  {
    id: 'selfies',
    title: 'Selfies',
    accent: 'from-violet-900 via-fuchsia-800 to-rose-900',
    frames: [
      frame(
        'selfies',
        1,
        'Frame I',
        'from-indigo-950 to-purple-800',
        'I am kicking your ass next time 😋',
      ),
      frame(
        'selfies',
        2,
        'Frame II',
        'from-fuchsia-900 to-pink-700',
        'Perfect Snoopies & Distorted Hironos hahaha',
      ),
      frame(
        'selfies',
        3,
        'Frame III',
        'from-rose-950 to-orange-900',
        'Longest two weeks of my life ... (plz come home 😭)',
      ),
      frame(
        'selfies',
        4,
        'Frame IV',
        'from-violet-950 to-indigo-900',
        'Nerds x2',
      ),
    ],
  },
  {
    id: 'yummy-bites',
    title: 'Yummy Bites',
    accent: 'from-amber-900 via-orange-800 to-red-900',
    frames: [
      frame(
        'yummy-bites',
        1,
        'Frame I',
        'from-amber-950 to-yellow-800',
        'Victim #1: that butter cake ...',
      ),
      frame(
        'yummy-bites',
        2,
        'Frame II',
        'from-orange-900 to-amber-700',
        'bb.q solving our hanger 😂',
      ),
      frame(
        'yummy-bites',
        3,
        'Frame III',
        'from-red-950 to-orange-800',
        'Koja first. Pop Mart second. 🙂‍↕️',
      ),
      frame(
        'yummy-bites',
        4,
        'Frame IV',
        'from-yellow-950 to-amber-900',
        'Before our one and ONLY bite HAHAHA',
      ),
    ],
  },
  {
    id: 'graduation',
    title: 'Graduation',
    accent: 'from-teal-900 via-cyan-800 to-blue-900',
    frames: [
      frame(
        'graduation',
        1,
        'Frame I',
        'from-teal-950 to-cyan-800',
        'One of my favorite pics with you ❤️',
      ),
      frame(
        'graduation',
        2,
        'Frame II',
        'from-cyan-900 to-sky-700',
        'Could not ask for any one else to celebrate with !!',
      ),
      frame(
        'graduation',
        3,
        'Frame III',
        'from-blue-950 to-indigo-800',
        'The bouquet I will cherish forever 🥰',
      ),
      frame(
        'graduation',
        4,
        'Frame IV',
        'from-sky-950 to-teal-900',
        'Mid-bite 🍴',
      ),
    ],
  },
  {
    id: 'may-2nd',
    title: 'May 2nd',
    accent: 'from-violet-900 via-fuchsia-800 to-rose-900',
    frames: [
      frame(
        'may-2nd',
        1,
        'Frame I',
        'from-indigo-950 to-purple-800',
        'Pen Pals ✏️',
      ),
      frame(
        'may-2nd',
        2,
        'Frame II',
        'from-fuchsia-900 to-pink-700',
        'Blue never looked so good 💙',
      ),
      frame(
        'may-2nd',
        3,
        'Frame III',
        'from-rose-950 to-orange-900',
        'Mad Happy with you 💕',
      ),
      frame(
        'may-2nd',
        4,
        'Frame IV',
        'from-violet-950 to-indigo-900',
        '📸 ✌️',
      ),
    ],
  },
  {
    id: 'everything-in-between',
    title: 'Everything in Between',
    accent: 'from-amber-900 via-orange-800 to-red-900',
    frames: [
      frame(
        'everything-in-between',
        1,
        'Frame I',
        'from-amber-950 to-yellow-800',
        'Our little doodles 🎨',
      ),
      frame(
        'everything-in-between',
        2,
        'Frame II',
        'from-orange-900 to-amber-700',
        'One final crawl 👶',
      ),
      frame(
        'everything-in-between',
        3,
        'Frame III',
        'from-red-950 to-orange-800',
        '😎 x 😎',
      ),
      frame(
        'everything-in-between',
        4,
        'Frame IV',
        'from-yellow-950 to-amber-900',
        'Claw Machine Professionals 😏',
      ),
    ],
  },
]

export function pickRandomStrip() {
  const index = Math.floor(Math.random() * PHOTO_STRIPS.length)
  return PHOTO_STRIPS[index]
}
