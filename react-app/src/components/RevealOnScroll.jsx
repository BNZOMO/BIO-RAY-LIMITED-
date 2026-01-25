import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cardReveal } from '../variants'

export default function RevealOnScroll({ children, threshold=0.15, className='' }){
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, amount: threshold })
  return (
    <motion.div ref={ref} variants={cardReveal} initial="hidden" animate={inView? 'visible':'hidden'} className={className} style={{ willChange:'transform, opacity' }}>
      {children}
    </motion.div>
  )
}
