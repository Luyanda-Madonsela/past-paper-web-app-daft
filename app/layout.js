import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Poppins } from '@next/font/google'



export const metadata = {
  title: 'Past Paper Hub',
  description: 'Past paper web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
      
      </head>

      <body>
        
        <Navigation />

        {children}
        
        <Footer />

        </body>

    </html>
  )
}
