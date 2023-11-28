import './globals.css'
import { Exo, Julius_Sans_One } from 'next/font/google'

const julius = Julius_Sans_One({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--julius'
})

const exo = Exo({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
  variable: '--exo'
})

export const metadata = {
  title: 'John Cox',
  description: "Software Developer & Astronomy Enthusiast",
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
      <body className={`${exo.variable} ${julius.variable}`}>{children}</body>
    </html>
  )
}
