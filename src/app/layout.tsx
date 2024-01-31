import type { Metadata } from "next";
import "./globals.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/navgationbar/Nav";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dragon_store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        </body>
    </html>
  );
}
