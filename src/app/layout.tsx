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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>John Cox - Developer</title>
        <meta property="og:image" content="<generated>" />
        <meta name="og:title" content="John Cox - Developer"/>
      </head>
      <body className={`${exo.variable} ${michroma.variable}`}>{children}</body>
    </html>
  )
}
