'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Government from '@/components/Government'
import Logistics from '@/components/Logistics'
import Catalog from '@/components/Catalog'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
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
        <div className="paper-background-texture relative z-10">
          <Catalog />
          <Government />
          <Logistics />
          <ContactForm />
          <FAQ />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteModal />
    </QuoteProvider>
  )
}
