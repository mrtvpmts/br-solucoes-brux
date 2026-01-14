import './globals.css'

export const metadata = {
  title: 'BRUX – Limpeza Industrial (Stitch Fidelity)',
  // icons are handled by src/app/icon.png automatically
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
