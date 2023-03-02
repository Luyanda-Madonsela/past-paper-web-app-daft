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

      <body>
        <Navigation />

        {children}
        
        <Footer />

        </body>

    </html>
  )
}
