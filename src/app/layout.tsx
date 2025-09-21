import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust",
  description:
    "Wanderlust é um planejador de viagens criado para organizar, explorar e inspirar suas aventuras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.variable}>
        {children}
      </body>
    </html>
  );
}
