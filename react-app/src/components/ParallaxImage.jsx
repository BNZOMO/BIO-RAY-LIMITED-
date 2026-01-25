import React from 'react'
import { motion } from 'framer-motion'

export default function ParallaxImage({ src, alt='', style={}, ...props }){
  return (
    <motion.div whileHover={{ scale:1.03 }} style={{ overflow:'hidden', borderRadius:8, width:'100%', height:160, ...style }} {...props}>
      <motion.img src={src} alt={alt} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', willChange:'transform' }} initial={{ scale:1 }} whileHover={{ scale:1.06 }} transition={{ duration:0.6 }} draggable="false"/>
    </motion.div>
  )
}
