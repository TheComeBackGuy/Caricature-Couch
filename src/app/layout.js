import { Montserrat, Mynerve } from "next/font/google";
import "../app/globals.css";
import FooterCouch from "@/components/FooterCouch";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import MobileMenu from "@/components/MobileMenu";
import Rainbow from "@/components/Rainbow";
import Header from "@/components/Header";
import { Suspense } from "react";
import Loading from "./Loading";

const mynerve = Mynerve({
  weight: "400",
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const montserratLight = Montserrat({
  weight: "200",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hartsyfartsy's Caricature Couch",
  description: "Chattanooga's Caricature Destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratLight.variable}`}
        style={{
          display: "flex",
          justifyContent: "center",
          // border: "5px dashed black",
          backgroundColor: "var(--tanShadow)",
        }}
      >
        <div className={styles.siteContainer}>
          <div className={styles.mainContainer}>
            <MobileMenu />
            <>
              <Rainbow side="left" />
            </>
            <div className="contentArea">
              <Header />
              <Suspense fallback={<Loading />}>{children}</Suspense>
              {/* <NavigationEvents /> */}
            </div>
            <Rainbow side="right" />
          </div>
          <div className={styles.footerContainer}>
            <FooterCouch />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
