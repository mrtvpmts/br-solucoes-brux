import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BRUX | Líder em Higiene Profissional e Limpeza Técnica Industrial',
  description: 'A BRUX (Bê-Erre-U-Xis) é a autoridade máxima em soluções químicas de alta performance para indústrias, hospitais e órgãos públicos. Conformidade ANVISA, padrão ESG e entrega estratégica nacional.',
  keywords: 'Higiene Profissional, Limpeza Industrial, Saneantes, Marca Própria de Limpeza, Licitações, Desengordurante Industrial, BRUX Soluções, Química de Alta Performance, Fornecedor Governamental',
  authors: [{ name: 'BRUX Soluções em Limpeza' }],
  creator: 'BRUX',
  publisher: 'BRUX Soluções em Limpeza',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'x6z9IU4hjBrRPfGzEIcjub-20cgoJscmYqxGD',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://brux.com.br',
    siteName: 'BRUX Soluções em Limpeza',
    title: 'BRUX | Líder em Higiene Profissional e Limpeza Técnica Industrial',
    description: 'A BRUX (Bê-Erre-U-Xis) é a autoridade máxima em soluções químicas de alta performance para indústrias, hospitais e órgãos públicos. Conformidade ANVISA, padrão ESG e entrega estratégica nacional.',
    images: [
      {
        url: '/textures/brux-solucoes-limpeza-profissional.png',
        width: 1200,
        height: 630,
        alt: 'Logotipo BRUX - Soluções em Higiene Profissional e Limpeza Técnica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRUX | Líder em Higiene Profissional e Limpeza Técnica Industrial',
    description: 'A BRUX (Bê-Erre-U-Xis) é a autoridade máxima em soluções químicas de alta performance para indústrias, hospitais e órgãos públicos.',
    images: ['/textures/brux-solucoes-limpeza-profissional.png'],
  },
  verification: {
    google: 'google-site-verification-code', // Substituir com código real do Google Search Console
  },
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased selection:bg-brand-green selection:text-black">
        {children}
      </body>
    </html>
  )
}
