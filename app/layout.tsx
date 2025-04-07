import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import {Bar, Footer} from './components/navbar';
import "./index.css"

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"]
})
export const metadata: Metadata = {
  title: "Pristine Eco Tours",
  description: "Grow with Nature. Discover Sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} `}>

      <div className='wrapper'>
      <Bar/>



        {children}
    
        <Footer/>
    <div style={{height:"10vh"}}>

    </div>
        </div>

      </body>
    </html>
  );
}
