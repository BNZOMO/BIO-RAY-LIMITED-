import React from 'react'
import { motion } from 'framer-motion'
import AnimatedButton from './AnimatedButton'
import { fadeUp, stagger } from '../variants'
import ParallaxImage from './ParallaxImage'
import LottieHero from './LottieHero'
import Particles from './Particles'

export default function Hero(){
  return (
    <section className="hero" aria-label="hero" style={{ padding:'48px 16px', position:'relative', overflow:'hidden' }}>
      <Particles />
      <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 420px', gap:24, alignItems:'center' }}>
        <motion.div initial="hidden" animate="visible" variants={stagger} style={{ zIndex:2 }}>
          <motion.h2 variants={fadeUp} style={{ margin:0, fontSize:32, color:'var(--navy)' }}>Guarding Lives, Securing Property</motion.h2>
          <motion.p variants={fadeUp} style={{ marginTop:8, color:'rgba(33,33,33,0.8)' }}>BR Shield Solutions provides end-to-end security systems, surveillance, access control, and maintenance across Nairobi and beyond.</motion.p>
          <motion.div variants={fadeUp} style={{ display:'flex', gap:12, marginTop:16 }}>
            <AnimatedButton>Request Demo</AnimatedButton>
            <AnimatedButton style={{ background:'transparent', color:'var(--navy)', border:'2px solid var(--navy)' }}>View Projects</AnimatedButton>
          </motion.div>
        </motion.div>

        <aside style={{ zIndex:2 }}>
          <LottieHero path={'https://assets9.lottiefiles.com/packages/lf20_tfb3estd.json'} />
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <div style={{width:64,height:64,borderRadius:10,background:'linear-gradient(135deg,var(--navy),var(--red))',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/logo2.png" alt="logo" style={{width:56,height:56,objectFit:'contain'}} />
            </div>
            <div>
              <div style={{fontWeight:700,color:'var(--navy)'}}>BR Shield Solutions</div>
              <div style={{fontSize:13,color:'rgba(33,33,33,0.7)'}}>Fire, Security & Surveillance</div>
            </div>
          </div>
          <div style={{marginTop:12}}>
            <ParallaxImage src={'/packgroup.jpg'} alt={'example'} style={{borderRadius:8}} />
          </div>
        </aside>
      </div>
    </section>
  )
}
