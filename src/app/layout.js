import './globals.scss'
import { Fira_Code} from "next/font/google";

const inter = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="header">header</header>
      {children}
      <footer>footer</footer>
      </body>
    </html>
  )
}
