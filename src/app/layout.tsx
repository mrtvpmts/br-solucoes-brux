import './globals.css'

export const metadata = {
  title: 'BRUX – Limpeza Industrial (Stitch Fidelity)',
  icons: {
    icon: '/textures/brux-emblem.png',
  }
}

import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased selection:bg-brand-green selection:text-black">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
