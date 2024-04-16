import { Nunito } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "WPPress.net",
  description: "WordPress Themes and Plugin Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <main id="main">
          <div className="flex flex-col">{children}</div>
        </main>
      </body>
    </html>
  );
}
