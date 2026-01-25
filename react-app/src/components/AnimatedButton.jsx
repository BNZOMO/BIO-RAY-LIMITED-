import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { buttonHover } from '../variants'

export default function AnimatedButton({ children, className='', ...props }){
  const reduce = useReducedMotion()
  return (
    <motion.button
      initial="rest"
      whileHover={reduce ? 'rest' : 'hover'}
      animate="rest"
      variants={buttonHover}
      className={className}
      style={{ borderRadius:10, padding:'10px 16px', fontWeight:600, cursor:'pointer', outline:'none', border:'none', background:'var(--navy)', color:'#fff' }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
