import type { Metadata } from 'next'
import {Aside, Footer, Navbar} from '@components/index'
import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`wrapper ${inter.className}`}>
        <Navbar />
        <Aside />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
