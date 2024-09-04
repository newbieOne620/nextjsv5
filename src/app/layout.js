import { Inter } from "next/font/google";
import "./globals.css";
import Mainlayout from "./layout/mainlayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "my next js5 practice",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Mainlayout>{children}</Mainlayout>
      </body>
    </html>
  );
}
