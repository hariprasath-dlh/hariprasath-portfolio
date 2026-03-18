/**
 * Home.jsx
 * --------
 * The main single-page layout that stacks all section components.
 * Lenis smooth scrolling is initialised here via useSmoothScroll().
 */

import Navbar     from '../components/Navbar'
import Hero       from '../components/Hero'
import About      from '../components/About'
import Projects   from '../components/Projects'
import Skills     from '../components/Skills'
import Activities from '../components/Activities'
import Contact    from '../components/Contact'
import Footer     from '../components/Footer'
import useSmoothScroll from '../hooks/useSmoothScroll'

const Home = () => {
  useSmoothScroll()

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Activities />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
