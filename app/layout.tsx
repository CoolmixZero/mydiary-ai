import { Inter } from "next/font/google";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

export const metadata = {
  title: "Diary.ai",
  description: "Your diary with AI!",
};

const font = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel="Continue" title={"Login Form"} isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
