import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Min-soo | Full Stack Developer",
  description: "모던 웹 기술로 사용자 경험을 만들어가는 풀스택 개발자 포트폴리오",
  openGraph: {
    title: "Min-soo | Full Stack Developer",
    description: "모던 웹 기술로 사용자 경험을 만들어가는 풀스택 개발자 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        {children}
      </body>
    </html>
  );
}
