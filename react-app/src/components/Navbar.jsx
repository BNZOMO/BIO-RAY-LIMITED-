import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { navVariants } from '../variants'

export default function Navbar(){
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const reduce = useReducedMotion()

  useEffect(()=>{
    function onScroll(){
      const y = window.scrollY
      setHidden(y > lastY && y > 80)
      setLastY(y)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive:true })
    return ()=> window.removeEventListener('scroll', onScroll)
  },[lastY])

  return (
    <AnimatePresence>
      <motion.header
        initial={false}
        animate={hidden && !reduce ? 'hidden' : 'top'}
        variants={navVariants}
        style={{ position:'sticky', top:0, zIndex:60, background:'var(--white)', borderBottom:'1px solid rgba(10,42,77,0.06)'}}
      >
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'12px 16px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:44,height:44,borderRadius:8,background:'linear-gradient(135deg,var(--navy),var(--red))',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>BR</div>
            <div>
              <div style={{fontWeight:700}}>BR Shield Solutions</div>
              <div style={{fontSize:12,color:'rgba(33,33,33,0.6)'}}>Guarding Lives, Securing Property</div>
            </div>
          </div>
          <nav style={{display:'flex',gap:12,alignItems:'center'}}>
            <a href="#services" style={{color:'var(--navy)'}}>Services</a>
            <a href="#projects" style={{color:'var(--navy)'}}>Projects</a>
            <a href="#contact" style={{padding:'6px 10px',background:'var(--orange)',color:'#fff',borderRadius:8}}>Request Demo</a>
          </nav>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}
