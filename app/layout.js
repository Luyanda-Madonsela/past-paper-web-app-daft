
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Past Paper Hub',
  description: 'Past paper web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <body>
        
        <Navigation />

        {children}
        
        <Footer />

      </body>

    </html>
  )
}
