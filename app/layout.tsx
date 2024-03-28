import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    template: `%s | GDSC UI `,
    default: `GDSC UI`,
  },
  description:
    "A website to showcase GDSC UI achievements while spotlighting the Next Hack event",
}
const ProductSans = localFont({
  src: [
    {
      path: "../public/fonts/productSans/ProductSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/productSans/ProductSans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/productSans/ProductSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="favicon/apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/icon" href="favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <meta property="og:image" content="gdsc-hero.jpg" />
        <meta property="og:image:type" content="jpg>" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="320" />
        <meta name="twitter:image" content="gdsc-hero.jpg" />
        <meta name="twitter:image:type" content="jpg" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="320" />
      </head>
      <body className={ProductSans.className}>
        <Header />
        <main className="container mx-auto max-w-full pt-24 flex-grow">
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
