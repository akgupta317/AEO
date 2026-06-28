import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Deliverables from '@/components/Deliverables'
import HowItWorks from '@/components/HowItWorks'
import Compare from '@/components/Compare'
import Pricing from '@/components/Pricing'
import Problems from '@/components/Problems'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Deliverables />
        <HowItWorks />
        <Compare />
        <Pricing />
        <Problems />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
