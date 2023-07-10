import './layout.scss'
import {Fira_Code} from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Marquee from "@/components/Marquee/Marquee";

const firaCode = Fira_Code({subsets: ['latin']})

export const metadata = {
    title: 'Lyrismet Portfolio',
    description: 'Welcome to my web-portfolio',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={firaCode.className}>
        <div className="bg-right-fixed"/>
        <Navbar/>
        {children}
        <Marquee/>
        </body>
        </html>
    )
}
