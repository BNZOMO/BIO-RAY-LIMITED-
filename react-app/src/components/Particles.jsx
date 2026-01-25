import React, { useEffect, useRef } from 'react'

export default function Particles(){
  const ref = useRef(null)
  useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if(window.innerWidth < 720) return
    const container = ref.current
    const canvas = document.createElement('canvas')
    canvas.style.position='absolute'; canvas.style.inset='0'; canvas.style.pointerEvents='none'; container.appendChild(canvas)
    const ctx = canvas.getContext('2d')
    const DPR = Math.max(1, window.devicePixelRatio || 1)
    let particles = []
    function resize(){ canvas.width = Math.floor(container.clientWidth * DPR); canvas.height = Math.floor(container.clientHeight * DPR); ctx.setTransform(DPR,0,0,DPR,0,0) }
    function createParticle(){ const w=container.clientWidth, h=container.clientHeight; return { x:Math.random()*w, y:Math.random()*h, r:1+Math.random()*2.8, vx:(Math.random()-0.5)*0.3, vy:-0.15-Math.random()*0.15, alpha:0.12+Math.random()*0.18 } }
    function init(){ resize(); particles = new Array(Math.min(60, Math.floor(container.clientWidth/12))).fill(0).map(createParticle) }
    let last = performance.now(); function frame(now){ const dt = Math.min(40, now-last); last = now; ctx.clearRect(0,0,canvas.width,canvas.height); ctx.save(); ctx.globalCompositeOperation='lighter'; particles.forEach(p=>{ p.x += p.vx * dt * 0.06; p.y += p.vy * dt * 0.06; if(p.y + p.r < -10 || p.x < -20 || p.x > container.clientWidth + 20){ Object.assign(p, createParticle()); p.y = container.clientHeight + 10 } ctx.beginPath(); ctx.fillStyle = 'rgba(198,40,40,'+p.alpha+')'; ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill(); }); ctx.restore(); requestAnimationFrame(frame) }
    window.addEventListener('resize', init, { passive:true })
    init(); requestAnimationFrame(frame)
    return ()=>{ window.removeEventListener('resize', init); container.removeChild(canvas) }
  },[])
  return <div ref={ref} style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }} aria-hidden />
}
