import './globals.css'
import { Geist, Geist_Mono } from "next/font/google"
import { I18nProvider } from '@/providers/i18n-provider'
import { ToastProvider } from '@/providers/ToastProvider'
import { Wrapper } from '@/components/layout'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProvider>
          <Wrapper>
            {children}
            <ToastProvider />
          </Wrapper>
        </I18nProvider>
      </body>
    </html>
  )
}
