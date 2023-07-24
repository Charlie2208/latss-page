import NavBar from './components/nav/Navbar'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Head from './head'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','400', '700','800'],
})

export const metadata = {
  title: 'Latss',
  description: 'Página web de la banda chilena Los Animales También Se Suicidan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
