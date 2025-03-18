import type { Metadata } from "next";
import "./globals.css";
import {
  plusJakarta,
  bricolageGrotesque,
  geistMono,
  inter,
  sourceSerif,
} from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import FooterSocial from "@/components/FooterSocial";
export const metadata: Metadata = {
  title: {
    template: "%s | DP's Blog",
    default: "DP's Blog",
  },
  description: "Personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${bricolageGrotesque.variable} ${geistMono.variable} ${inter.variable} ${sourceSerif.variable} bg-white/40 overflow-y-auto overflow-x-hidden antialiased`}
      >
        <div className="px-3 pt-6">
          <Navbar />
        </div>
        {children}
        <div className="flex flex-col pb-5 justify-center items-center w-full">
          <FooterSocial />
          <p>Made with {"❤️"}</p>
        </div>
      </body>
    </html>
  );
}
