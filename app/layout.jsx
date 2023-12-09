import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { instrumentSans } from "./styles/fonts";

export const metadata = {
  title: "Robo HR",
  description: "Robo HR - Intelligent HR Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.className} `}>
        <Navbar />
        <main className="flex flex-col pt-20 px-4">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
