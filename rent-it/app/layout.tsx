import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from '@/app/components/navbar/Navbar';

export const metadata = {
  title: 'Rent it',
  description: 'This is an e-commerce project',
}


const font = Nunito({ 
  subsets: ['latin'], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"  rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </body>
    </html>
  )
}
