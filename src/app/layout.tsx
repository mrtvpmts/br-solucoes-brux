import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BRUX | Higiene Profissional e Limpeza de Alta Performance',
  description: 'A BRUX oferece soluções químicas de alto desempenho para empresas, condomínios e setor público. Produtos concentrados que garantem máxima eficiência.',
  keywords: 'Higiene Profissional, Limpeza de Alta Performance, Saneantes, Produtos de Limpeza Profissional, Limpeza Pesada, BRUX Soluções, Química Eficiente, Fornecedor de Limpeza',
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
    title: 'BRUX | Higiene Profissional e Limpeza de Alta Performance',
    description: 'Soluções químicas de alto desempenho para empresas, condomínios e setor público. Máxima eficiência para todos os ambientes.',
    images: [
      {
        url: '/textures/brux-solucoes-limpeza-profissional.png',
        width: 1200,
        height: 630,
        alt: 'BRUX - Higiene Profissional e Limpeza de Alta Performance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRUX | Higiene Profissional e Limpeza de Alta Performance',
    description: 'Soluções químicas de alto desempenho para empresas e setor público.',
    images: ['/textures/brux-solucoes-limpeza-profissional.png'],
  },
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased selection:bg-brand-green selection:text-black`}>
        {children}
      </body>
    </html>
  )
}
