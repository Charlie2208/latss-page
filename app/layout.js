import NavBar from './components/nav/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from './head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Latss',
  description: 'Página web de la banda chilena Los Animales También Se Suicidan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
