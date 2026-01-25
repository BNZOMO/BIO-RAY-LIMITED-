import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import RevealOnScroll from './components/RevealOnScroll'

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section style={{ maxWidth:1100, margin:'40px auto', padding:'0 16px' }}>
          <h3 style={{ color:'var(--navy)' }}>Selected Projects</h3>
          <Projects />
        </section>
      </main>
    </div>
  )
}
