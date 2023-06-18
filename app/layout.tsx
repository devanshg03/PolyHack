import { Toaster } from "react-hot-toast";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import "./globals.css";
import { Inter } from "next/font/google";
import OnBoardModal from "./components/modals/OnBoardModal";
import NotAvailableModal from "./components/modals/NotAvailableModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AudaIQ",
  description: "AI-powered social sentiment analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>
        <LoginModal/>
        <RegisterModal/>
        <OnBoardModal/>
        <Toaster/>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
