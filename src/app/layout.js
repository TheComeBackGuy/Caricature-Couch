import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "../app/globals.css";
import Pin from "./images/pin.gif";
import Image from "next/image";
import FooterCouch from "@/components/FooterCouch";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const montserratLight = Montserrat({
  weight: "200",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hartsyfartsy's Caricature Couch",
  description: "Chattanooga's Caricature Destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${montserratLight.variable}`}>
        {children}
        <FooterCouch />
        <Footer />
      </body>
    </html>
  );
}
