import { useCallback, useState } from 'react'
import Hero from './components/Hero'
import ProductSections from './components/ProductSections'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  const openWaitlist = useCallback(() => {
    setWaitlistOpen(true)
    if (window && window.posthog) {
      window.posthog.capture('hero_cta_clicked', { variant: 'primary', page: 'home' })
    }
  }, [])

  const closeWaitlist = useCallback(() => setWaitlistOpen(false), [])

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <Hero openWaitlist={openWaitlist} waitlistOpen={waitlistOpen} closeWaitlist={closeWaitlist} />
      <main>
        <ProductSections openWaitlist={openWaitlist} />
        <Pricing openWaitlist={openWaitlist} />
      </main>
      <Footer />
    </div>
  )
}
