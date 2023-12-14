import type { Metadata } from 'next'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './custom-grid.css'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { GeistSans } from 'geist/font/sans';


export const metadata: Metadata = {
  title: 'Kazu',
  description: 'Kazu, the all-in-one Web3 dashboard.',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
