import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from  'next/font/google'
import React from "react";
const poppins = Poppins ({
  subsets :['latin'],
    weight:['100','200','300','400','500','600','700'],
    variable : '--font-poppins',
});
export const metadata: Metadata = {
  title: "StoreIt",
  description: "StoreIt-The only srorage solution you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
