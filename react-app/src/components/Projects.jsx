import React, { useEffect } from 'react'
import RevealOnScroll from './RevealOnScroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Projects(){
  useEffect(()=>{
    if(typeof window === 'undefined') return
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if(!gsap) return
    try{ gsap.registerPlugin(ScrollTrigger) }catch(e){}
    const items = document.querySelectorAll('.projects-grid .project')
    if(!items || items.length===0) return
    const tl = gsap.timeline({ scrollTrigger:{ trigger: '.projects-grid', start:'top 75%', end:'bottom 25%', scrub:0.6 } })
    tl.to('.projects-grid .project', { scale:1.03, y:-8, stagger:{ each:0.08 }, duration:0.8, ease:'power1.out' }, 0)
    tl.to('.projects-grid .project', { scale:1, y:0, stagger:{ each:0.08 }, duration:0.8, ease:'power1.in' }, 0.6)
    return ()=>{ if(ScrollTrigger) ScrollTrigger.kill(); }
  },[])

  return (
    <div className="projects-grid grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
      <RevealOnScroll>
        <article className="project"><img src="/packgroup.jpg" alt="PackGroup" loading="lazy"/><div className="pbody"><strong>PackGroup CCTV system — Industrial Area</strong><p>22-camera HD system with remote access. Completed: Jan 2025</p></div></article>
      </RevealOnScroll>
      <RevealOnScroll>
        <article className="project"><img src="/automatic.jpg" alt="Automatic" loading="lazy"/><div className="pbody"><strong>Royal Mattresses — Automatic extinguishers</strong><p>Installation of 18 Automatic fire extinguishers. Completed: Mar 2025</p></div></article>
      </RevealOnScroll>
      <RevealOnScroll>
        <article className="project"><img src="/electric-fence-2.jpeg" alt="Fence" loading="lazy"/><div className="pbody"><strong>Institutional Perimeter Security</strong><p>Electric fencing and alarm. Completed: Nov 2024</p></div></article>
      </RevealOnScroll>
    </div>
  )
}
