import { Inter } from "next/font/google";
import "./globals.css";
import DashboardPanel from "./components/DashboardPanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Craftopus Dashboard",
  description: "1st Dashboard",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="relative flex">
      <body className={`${inter.className} flex` }>
      <DashboardPanel></DashboardPanel >
<div className="lg:w-[75vw] w-[85vw]">

        {children}
</div>
        
        </body>
    </html>
  );
}
