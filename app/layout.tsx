import "./globals.css";
import { Inter } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import ClientOnly from "./components/ClientOnly";
import getCurrentUser from "./actions/getCurrentUser";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import UpgradeModal from "./components/modals/UpgradeModal";
import LoginModal from "./components/modals/LoginModal";

export const metadata = {
  title: "Diary.ai",
  description: "Your diary with AI!",
};

const font = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <UpgradeModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-16 pt-20">{children}</div>
      </body>
    </html>
  );
}
