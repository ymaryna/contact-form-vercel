import { Toaster } from '@/components/Toaster'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Form React Typescript | Marina Cid',
  description: 'Form created with React and Typescript'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  )
}
