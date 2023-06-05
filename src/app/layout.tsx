import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { Providers } from "@/app/redux/provider";
import { Inter } from "next/font/google";
import { Slide, ToastContainer } from "react-toastify";

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
        <Providers>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar
            closeOnClick
            transition={Slide}
            role="alert"
            closeButton={false}
          />
        </Providers>
      </body>
    </html>
  );
}
