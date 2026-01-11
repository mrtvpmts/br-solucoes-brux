'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Segments from '@/components/Segments'
import Catalog from '@/components/Catalog'
import Differentials from '@/components/Differentials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import QuoteModal from '@/components/QuoteModal'
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
        <Differentials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteModal />
    </QuoteProvider>
  )
}
