import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "우민수 | 포트폴리오",
  description: "요구사항을 본질로 정리하고 안정적으로 구현하는 풀스택 개발자 포트폴리오",
  openGraph: {
    title: "우민수 | 포트폴리오",
    description: "요구사항을 본질로 정리하고 안정적으로 구현하는 풀스택 개발자 포트폴리오",
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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
