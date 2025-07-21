import { Inter, Prata, Lato, Kaisei_HarunoUmi } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load fonts
const inter = Inter({ subsets: ["latin"] });
const prata = Prata({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const kaiseiHarunoUmi = Kaisei_HarunoUmi({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Mohammed Nash - E-commerce",
  description: "A modern e-commerce website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${prata.className} ${lato.className} ${kaiseiHarunoUmi.className}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
