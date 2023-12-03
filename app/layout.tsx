import { Nunito } from "next/font/google";
import "./globals.css";

import NextAuthProvider from "./_common/providers/NextAuth";

import Navbar from "./_components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import RegisterModal from "./_components/modals/RegisterModal";
import LoginModal from "./_components/modals/LoginModal";
import RentModal from "./_components/modals/RentModal";
import SearchModal from "./_components/modals/SearchModal";

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
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar />
          <div className="pb-20 pt-28">{children}</div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
