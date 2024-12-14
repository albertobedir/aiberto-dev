import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const swissBoldItalic = localFont({
  src: "./fonts/Swiss 721 Bold Italic.otf",
  variable: "--font-swiss-bold-italic",
});

const swissBold = localFont({
  src: "./fonts/Swiss 721 Bold.otf",
  variable: "--font-swiss-bold",
});

const swissItalic = localFont({
  src: "./fonts/Swiss 721 Italic.otf",
  variable: "--font-swiss-italic",
});

const swissMedium = localFont({
  src: "./fonts/Swiss 721 Medium.otf",
  variable: "--font-swiss-medium",
});

const swissRegular = localFont({
  src: "./fonts/Swiss 721 Regular.otf",
  variable: "--font-swiss-regular",
});

//! description kismini degistir
export const metadata: Metadata = {
  title: "Bedirhan Arslanhan",
  description: "eyayberto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${swissBold.variable} ${swissBoldItalic.variable} ${swissItalic.variable}  ${swissMedium.variable} ${swissRegular.variable} font-swiss-regular antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
