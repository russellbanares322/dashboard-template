import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { DashboardWrapper } from "@/layout/dashboard-wrapper";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Template",
  description: "Your dashboard description goes here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
