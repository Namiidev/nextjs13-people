import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from "@/components/Navigation.jsx"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/vapor/bootstrap.min.css" />
      </head>
      <body className={inter.className}>
        <Navigation></Navigation>
        
        <div className='container'>
        {children}
        </div>
        </body>
    </html>
  )
}
