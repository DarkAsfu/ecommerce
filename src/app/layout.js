import { Inter, Prata, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load fonts
const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] }); // Lato has multiple weights
const prata = Prata({ subsets: ["latin"], weight: "400" }); // Prata only supports 400

export const metadata = {
  title: "Mohammed Nash - E-commerce",
  description: "A modern e-commerce website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  ${lato.className} ${prata.className}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
