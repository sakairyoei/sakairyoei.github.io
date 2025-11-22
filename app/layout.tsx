import type { Metadata } from 'next'
import { Noto_Sans_JP, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-jp',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Portfolio - AI × DX Consultant',
  description: 'AI × DXコンサルタント | Power Platform スペシャリスト | ERPコンサルタント',
  keywords: 'AI, DX, コンサルタント, Power Platform, ERP, AWS, Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
