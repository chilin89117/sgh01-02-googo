import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'sgh01-02-googo',
  description: 'sgh01-02-googo'
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className='relative min-h-screen'>
        {children}
        <Footer />
      </body>
    </html>
  )
}
