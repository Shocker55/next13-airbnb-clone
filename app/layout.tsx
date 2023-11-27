import { Nunito } from "next/font/google";
import "./globals.css";

import NextAuthProvider from "./_common/providers/NextAuth";

import Navbar from "./_components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import RegisterModal from "./_components/modals/RegisterModal";
import LoginModal from "./_components/modals/LoginModal";
import RentModal from "./_components/modals/RentModal";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Toaster />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
