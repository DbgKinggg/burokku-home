import type { Metadata } from 'next'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './custom-grid.css'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { GeistSans } from 'geist/font/sans';
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/base/navbar'
import HomeFooter from '@/components/home/footer'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import { WalletProvider } from '@/components/providers/wallet-provider'

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: new URL('https://burokku.one/'),
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: 'https://burokku.one/images/open-graph.png',
        width: 2400,
        height: 1260,
      }
    ]
  },
  twitter: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: 'https://burokku.one/images/open-graph.png',
        width: 2400,
        height: 1260,
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <WalletProvider>
            <Toaster theme='dark' />
            <main className="min-h-screen flex flex-col">
              <Navbar />
              {children}
              <HomeFooter />
            </main>
          </WalletProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
