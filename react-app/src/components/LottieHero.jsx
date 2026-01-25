import React, { useEffect, useRef } from 'react'

export default function LottieHero({ path, style={} }){
  const ref = useRef(null)
  useEffect(()=>{
    let anim = null
    let mounted = true
    async function load(){
      if(!ref.current) return
      const lottie = await import('lottie-web')
      try{
        anim = lottie.loadAnimation({ container: ref.current, renderer:'svg', loop:true, autoplay:true, path })
      }catch(e){}
    }
    // only load when intersecting
    const obs = new IntersectionObserver(function(entries, o){
      entries.forEach(e=>{
        if(e.isIntersecting && mounted){ load(); o.unobserve(ref.current); }
      })
    }, { threshold: 0.05 })
    if(ref.current) obs.observe(ref.current)
    return ()=>{ mounted = false; if(anim) anim.destroy(); }
  },[path])

  return <div ref={ref} style={{ width:'100%', height:160, ...style }} aria-hidden />
}
