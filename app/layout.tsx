import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lakshay Manchanda",
  description: "I am a fullstack web developer with the T3 tech stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  redirect("https://lakshay-manchanda.vercel.app");

  return (
    <html lang="en">
      <body className={`${raleway.className} bg-black text-white bg-[url('/images/photoBackground.jpg')] bg-contain bg-repeat bg-right bg-fixed `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
