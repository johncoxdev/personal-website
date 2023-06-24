import './globals.css'
import { Michroma, Exo } from 'next/font/google'

const michroma = Michroma({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--michroma'
})

const exo = Exo({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
  variable: '--exo'
})

export const metadata = {
  title: 'John Cox',
  description: 'John Cox website!',
  openGraph: {
    images: './opengraph-image.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${exo.variable} ${michroma.variable}`}>{children}</body>
    </html>
  )
}
