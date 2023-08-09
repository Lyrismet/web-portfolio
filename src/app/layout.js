import './layout.scss'
import {Fira_Code} from "next/font/google";

const firaCode = Fira_Code({subsets: ['latin']})

export const metadata = {
    title: 'Lyrismet Portfolio',
    description: 'Welcome to my web-portfolio',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={firaCode.className}>
        {children}
        </body>
        </html>
    )
}
