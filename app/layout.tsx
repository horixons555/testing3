// "use client"

import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../app/api/uploadthing/core";

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});


export const metadata: Metadata = {
  title: 'Horixons',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  )
}
