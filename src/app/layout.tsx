import { store } from "@/app/redux/store";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/app/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product App",
  description: "Simple eCommerce App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
