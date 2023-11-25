import { Toaster } from "react-hot-toast";
import RegisterModal from "./_components/modals/RegisterModal";
import Navbar from "./_components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
