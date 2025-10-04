'use client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Tools from '@/components/Tools'
// import Testimonials from '@/components/Testimonials'
// import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Hero />
        <Projects />
        <Experience />
        <Tools />
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
      </main> 
      <Footer />
    </>
  )
}

