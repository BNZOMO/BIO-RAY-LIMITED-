export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2,0.8,0.2,1] } }
}

export const stagger = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
  hidden: {}
}

export const buttonHover = {
  rest: { scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: { scale: 1.035, boxShadow: '0 12px 30px rgba(6,30,70,0.12), 0 2px 6px rgba(198,40,40,0.06)', transition: { duration: 0.25 } }
}

export const cardReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export const navVariants = {
  top: { y: 0, opacity: 1, transition: { duration: 0.35 } },
  hidden: { y: -94, opacity: 0, transition: { duration: 0.28, ease: [0.2,0.8,0.2,1] } }
}
