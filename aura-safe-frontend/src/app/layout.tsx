import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SolanaProviders } from '@/context/WalletContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AURA Safe',
  description: 'Tu asistente de seguridad personal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SolanaProviders>
          {children}
        </SolanaProviders>
      </body>
    </html>
  )
}