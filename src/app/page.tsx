'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Segments from '@/components/Segments'
import Government from '@/components/Government'
import Logistics from '@/components/Logistics'
import Catalog from '@/components/Catalog'
import Differentials from '@/components/Differentials'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import QuoteModal from '@/components/QuoteModal'
import SocialProofCarousel from '@/components/SocialProofCarousel'
import { QuoteProvider } from '@/components/QuoteContext'

export default function Page() {
  return (
    <QuoteProvider>
      <Header />
      <main className="relative selection:bg-brand-green selection:text-black">
        <Hero />
        <About />
        <Segments />
        <Catalog />
        <Government />
        <Logistics />
        <Differentials />
        <ContactForm />
        <SocialProofCarousel />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteModal />
    </QuoteProvider>
  )
}
