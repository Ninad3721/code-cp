import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import './globals.css'
import UniversalAlertModule from '@/components/ui/UniversalAlertModule'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn></SignedIn>
          </header>
        </body>
      </html>
    </ClerkProvider>
  )
}