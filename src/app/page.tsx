'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Comparison from '@/components/Comparison'
import Catalog from '@/components/Catalog'
import LogicalProof from '@/components/LogicalProof'

import DirectImpact from '@/components/DirectImpact'
import Government from '@/components/Government'
import Logistics from '@/components/Logistics'
import MicroProof from '@/components/MicroProof'
import RiskReduction from '@/components/RiskReduction'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import FinalCTA from '@/components/FinalCTA'
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
          <Comparison />
          <Catalog />
          <LogicalProof />

          <Government />
          <Logistics />
          <DirectImpact />
          <MicroProof />
          <RiskReduction />
          <FAQ />
          <FinalCTA />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteModal />
    </QuoteProvider>
  )
}
